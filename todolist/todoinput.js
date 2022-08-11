const Todoinput = {
    template: `
    <div>
        <!-- 할일 추가시 -->
        <input type="text" v-model="newTodoItem" @keyup.enter="addtodo()" placeholder="Add a new task" v-show="propsinput === false">
        <button @click="addtodo" Value="Add" v-show="propsinput === false">추가</button>

        <!-- 할일 수정시 -->
        <input id="inputtrue" type="text" v-model="$store.state.newTodoItem" @keyup.enter="edittodo()" v-show="propsinput === true">
        <button @click="edittodo" Value="Edit" v-show="propsinput === true">수정</button>
    </div>
  `,
    props: ['propsinput'],
    data() {
        return {newTodoItem: ''};
    },
    methods: {
        addtodo() {
            //store.commit('editvalue', this.newTodoItem);
            console.log("add 함수실행");
            //inputbox 빈값인지 체크, 빈값이 아니면 로직 수행
            if (this.newTodoItem !== '') {
                //inputbox에 입력된 텍스트의 앞, 뒤 공백문자열 제거
                var value = this.newTodoItem && this.newTodoItem.trim();
                //App컴포넌트로 이벤트 전달
                this.$emit('addtodo', value);
                //inputbox 초기화
                this.clearInputbox();
            }
        },
        edittodo() {
            console.log("edit 함수실행");
            this.$emit('editfinish');
        },
        clearInputbox() {
            this.newTodoItem = '';
        }
    }
};
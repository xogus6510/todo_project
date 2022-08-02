const Todoinput = {
    template: `
    <div>
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addtodo">
    <button v-on:click="addtodo">추가</button>
</div>
  `,
    data() {
        return {newTodoItem: ''};
    },
    methods: {
        addtodo() {
            //inputbox 빈값인지 체크, 빈값이 아니면 로직 수행
            console.log("input");
            if (this.newTodoItem !== '') {
                //inputbox에 입력된 텍스트의 앞, 뒤 공백문자열 제거
                var value = this.newTodoItem && this
                    .newTodoItem
                    .trim();
                //App컴포넌트로 이벤트 전달
                this.$emit('addtodo', value);
                //inputbox 초기화
                this.clearInputbox();
            }
        },
        clearInputbox() {
            this.newTodoItem = '';
        }
    }
};
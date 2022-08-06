const Todolist = {
    template: `
    <section>
        <table border="1" style="border-collapse:collapse;">
            <th style="width : 160px;" colspan='2'>등록시간</th>
            <th style="width : 350px;">할 일</th>
            <th style="width : 180px;">수정 / 삭제</th>
            <tr v-for="todoItem, index in propsdata" :key="todoItem.id" v-show="propsfilter === 'all' ? true : (propsfilter === 'done' ? !todoItem.condition : todoItem.condition)">
                <td class="truecolor" :class="{ falsecolor: todoItem.condition === false}"></td>
                <td>{{todoItem.date}}</td>
                <td @click="changeCondition(todoItem, index)" :class="{ condition: todoItem.condition === false}">{{todoItem.item}}</td>
                <td>
                <button type="button" @click="edittodo(todoItem.item, index)">수정</button>
                <button type="button" @click="removetodo(todoItem)" >삭제</button>
                </td>
            </tr>
            <tr>
                <td colspan='4'>
                    <button type="button" v-on:click="clearTodo">전체삭제</button>
                </td>
            </tr>
        </table>
    </section>
  `,
    props: ['propsdata', 'propsfilter'],
    methods: {
        removetodo(todoItem) {
            console.log('삭제클릭 emit, ' + todoItem + "=id");
            this.$emit('removetodo', todoItem);
        },
        edittodo(todoItem, id) {
            store.commit('editvalue', todoItem);
            store.commit('editid', id);
            console.log('수정클릭 emit, ' + id + "=id");
            this.$emit('edittodo', todoItem);
            this.$emit('editinput', todoItem);
        },
        clearTodo() {
            this.$emit('cleartodo');
        },
        changeCondition(todoItem, id) {
           console.log("todoItem.condition : " + todoItem.condition + " todoItem.id : " + id);
           store.commit('editid', id);
           this.$emit('changecondition', todoItem);
        }
        
    }
};
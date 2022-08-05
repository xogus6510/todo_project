const Todolist = {
    template: `
    <section>
    <ul>
        <li v-for="todoItem, index in propsdata" :key="todoItem.id">
            등록시간 : {{todoItem.date}} / {{todoItem.item}}
            <button type="button" @click="removetodo(todoItem)" >삭제</button>
            <button type="button" @click="edittodo(todoItem.item, index)">수정</button>
        </li>
    </ul>
</section>
  `,
    props: ['propsdata'],
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
        }
    }
};
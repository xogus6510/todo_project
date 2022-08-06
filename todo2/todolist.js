const Todolist = {
    template: `
    <section> 
    <table border="1" style="border-collapse:collapse;">
	<th>등록시간</th>
	<th style="width : 350px;">할 일</th>
    <th>수정 / 삭제</th>
	<tr v-for="todoItem, index in propsdata" :key="todoItem.id">
	    <td>{{todoItem.date}}</td>
	    <td>{{todoItem.item}}</td>
        <td>
        <button type="button" @click="edittodo(todoItem.item, index)">수정</button>
        <button type="button" @click="removetodo(todoItem)" >삭제</button>
        </td>
	</tr>
    <tr>
        <td colspan='3'>
            <button type="button" v-on:click="clearTodo">전체삭제</button>
        </td>
    </tr>
    </table>
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
        },
        clearTodo() {
            this.$emit('cleartodo');
        }
        
    }
};
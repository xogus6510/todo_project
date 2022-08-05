const Todolist = {
    template: `
    <section>
    <ul>
        <li v-for="todoItem in propsdata" :key="todoItem.id">
            등록시간 : {{todoItem.date}} / {{todoItem.item}}
            <button type="button" v-on:click="removetodo(todoItem)" >삭제</button>
            <button type="button" v-on:click="edittodo(todoItem.item)">수정</button>
        </li>
    </ul>
</section>
  `, props: ['propsdata'],
  methods: {
      removetodo(todoItem) {
            console.log('삭제클릭 emit, ' + todoItem + "=id");
            this.$emit('removetodo', todoItem);
                    
      },
      edittodo(todoItem) {
            console.log('수정클릭 emit, ' + todoItem + "=id");
          this.$emit('edittodo', todoItem); 
          this.$emit('editinput', todoItem); 
          store.commit('increment')
      }
  } 
};
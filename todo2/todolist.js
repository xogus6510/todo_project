const Todolist = {
    template: `
    <section>
    <ul>
        <li v-for="todoItem in propsdata" :key="todoItem.id">
            
            등록시간 : {{todoItem.date}} / {{todoItem.item}}
            <button type="button" v-on:click="removetodo(todoItem, index)">삭제</button>
        </li>
    </ul>
</section>
  `, props: ['propsdata'],
  methods: {
      removetodo(todoItem, index) {
            console.log('삭제클릭 emit, ' + todoItem + "=id");
            this.$emit('removetodo', todoItem);
                    
      }
  } 
};
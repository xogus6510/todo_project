const Todolist = {
    template: `
    <section>
    <ul>
        <li v-for="(todoItem, index) in propsdata" :key="todoItem">
            {{ todoItem.id }}{{todoItem.item}}{{todoItem.date}}
            <button type="button" v-on:click="removetodo(todoItem, index)">삭제</button>
        </li>
    </ul>
</section>
  `, props: ['propsdata'],
  methods: {
      removetodo(todoItem, index) {
            console.log('2번' + todoItem.id + index);
            this.$emit('aa', todoItem.id, index);
                    
      }
  } 
};
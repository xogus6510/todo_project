const All = {
    template: `
  <h1>all2</h1>
  <ul class="list">
      <li v-for="(todoItem, index) in todoItems" :key="todoItem">
           <p>{{ todoItem.id}} - {{ todoItem.item}} - {{todoItem.date}}</p>
              <button @click="deleteTodoItem(todoItem, index)">Delete</button>
      </li>
  </ul>`,
    data() {
        return {todoItems: []};
    },
    methods: {
        deleteTodoItem: function(todoItem, index) {
            localStorage.removeItem(todoItem.id);
            this.todoItems.splice(index, 1);
        }
    }, props: ['propsdata'],
    created: function() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                this.todoItems.sort(function(a,b){
                return a.id - b.id;
              });
            }
        }
    }
};
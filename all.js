const All = {
  template: `
  <h1>all2</h1>
  <ul class="list">
      <li v-for="todoItem in todoItems" :key="todoItem">
           <p>{{ todoItem}}</p>
      </li>
  </ul>`,
  data() {
    return {
      todoItems: []
    };
  },
  created() {
      for (let i = 0; i < localStorage.length; i++) { 
          this.todoItems.push(localStorage.getItem(localStorage.key(i)));
        }
    }
};
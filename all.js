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
        return {todoItems: [], todoValue: []};
    },
    methods: {
        deleteTodoItem: function(todoItem, index) {
            localStorage.removeItem(todoItem.id);
            this.todoItems.splice(index, 1);
        }
    },
    created: function() {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                // 로컬스토리지의 key를 이용하여 value를 가져옴 로컬스토리지에 저장된 값은 string이므로 JavaScript에 맞는 적절한 형태로
                // 변환하기 위해 JSON.parse() API 사용
              this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                //this.todoItems.sort();
                 this.todoItems.sort(function(a,b){
                return a.id - b.id;
              });
              console.log(this.todoItems);
            }
        }
    }
};
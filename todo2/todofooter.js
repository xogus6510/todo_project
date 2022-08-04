const Todofooter = {
    template: `
    
<div>
<button type="button" v-on:click="clearTodo">전체삭제</button>
</div>
  `,
    methods: {
        clearTodo() {
            this.$emit('cleartodo');
        }
    }
};
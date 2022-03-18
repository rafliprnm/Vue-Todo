Vue.createApp({
    data() {
        return {
            message: 'Hello Vue!',
            todo: '',
            listTodo: []
        };
    },
    mounted(){
        const todo = window.localStorage.getItem('todo');
        if (todo) {
            this.listTodo = JSON.parse(todo);
        }
    },
    methods: {
        addTodo(){
            if (this.todo === ''){
                alert('Todo tidak boleh kosong!')
            }else{
                this.listTodo.push({
                    name: this.todo, 
                    isDone: false
                });
                window.localStorage.setItem('todo', JSON.stringify(this.listTodo));
                this.todo = '';
            }
        },
        deleteTodo(index){
            this.listTodo.splice(index,1)
            window.localStorage.setItem('todo', JSON.stringify(this.listTodo));
        },
        markDoneTodo(index){
            this.listTodo[index].isDone = !this.listTodo[index].isDone;
        }
    }
}).mount('#app')
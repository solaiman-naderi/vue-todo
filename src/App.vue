 
<template>
 
 <div class=" mx-auto w-2/6 bg-white shadow-lg rounded-lg overflow-hidden  "  >
  <Header titleMessage="TODO"/>
   <AddTodo @addTask="addTask"/>
    <TodosItems :items="todos" @deleteTask="deleteTask"/> 
</div>
 
</template>

<script>
  import Header from "@/components/Header.vue";
  import TodosItems from "@/components/TodosItems.vue";
  import AddTodo from "@/components/AddTodo.vue";
 
  export default {

    components:{
      Header,
      TodosItems,
      AddTodo
    },

    data(){
      return {
        todos: []
       
      }
    },
    
    methods:{
      addTask (task){
         this.todos.push({id:Math.floor(Math.random() * 1000) , content : task , done:true})
      },
      deleteTask (id){
        console.log(id);
       this.todos =  this.todos.filter(item=> (item.id != id));
      }

 
    }
  }
</script>

 
 

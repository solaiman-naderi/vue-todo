 
<template>
 
 <div class=" mx-auto w-2/6 bg-white shadow-lg rounded-lg overflow-hidden  ">
  <Header titleMessage="TODO"/>
   <AddTodo @submitTodo="submitTodo"/>
    <TodosItems :items="todos"/> 
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
        todos:
        [
          {id : 1 , content : "task 1"},
          {id : 2 , content : "task 2"},
          {id : 3 , content : "task 3"},
        ]
      }
    },
    
    methods:{
      submitTodo (task){
         this.todos.push({id:Math.random() , content : task})
      }
    }
  }
</script>

 
 

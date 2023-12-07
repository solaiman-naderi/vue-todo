

<script>
 
  export default {
    props:{
      items : Array,
    },

    methods:{
      deleteCustomTodo (id){
      this.$emit("deleteTodo" , id)
      }
    }

   
  }
</script>

 


<template>
    <ul class="divide-y divide-gray-200 px-4">
        <li v-for="todo in items" :key="todo.id" class="py-4">
            <div class="flex items-center justify-between">
               <div class="flex items-center  ">

                <input id="todo1" name="todo1" type="checkbox"
                      class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"/>
                  <label for="todo1" class="ml-3 block text-gray-900">
                      <span :class="{'text-green-600 line-through' : todo.done}" class="text-lg font-medium ">{{ todo.content }}</span>
                  </label>
                
                </div>

                <span class="text-xs flex items-center justify-center w-4 h-4 text-white rounded-full cursor-pointer bg-red-400 font-bold" @click="deleteCustomTodo(todo.id)">x</span>
             </div>
        </li>
      
    </ul>
</template>

 

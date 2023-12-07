
<script setup >
  import Header from "@/components/Header.vue";
  import TodosItems from "@/components/TodosItems.vue";
  import { reactive } from 'vue';

  const todos = reactive([
    {index : 1 , content : "task 1"},
    {index : 2 , content : "task 2"},
    {index : 3 , content : "task 3"},
]);
</script>
<template>
 
 <div class=" mx-auto w-2/6 bg-white shadow-lg rounded-lg overflow-hidden  ">
  <Header titleMessage="TODO"/>
    <form class="w-full max-w-sm mx-auto px-4 py-2">
        <div class="flex items-center border-b-2 border-teal-500 py-2">
            <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Add a task">
            <button
                class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button">
                Add
            </button>
        </div>
    </form>
    <TodosItems :items="todos"/> 
</div>
 
</template>

<style scoped>
 
</style>

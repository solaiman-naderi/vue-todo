 <script  setup>
    const props = defineProps(['titleMessage'])
   
</script>
<template>
  <div class="px-4 py-2">
      <h1 class="text-gray-800 font-bold text-2xl uppercase">{{ props.titleMessage }}</h1>
  </div>
</template>
<template>
  <div class="home">
   <div class="text-4xl font-bold">Damola</div>
   <datatable
   :columns="columns"
        :data="data"
        :footer="false"
        :header="false"
        :limit="15"
        :selectable="false"
        dropdown="actions" 
   >
     </datatable> 
  </div>
</template>

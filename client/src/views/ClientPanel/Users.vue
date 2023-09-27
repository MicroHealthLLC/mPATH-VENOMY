<script setup>
import { store } from "../../store"

</script>

<template>
  <div class="text-center mt-5">
        <h4 >Welcome to the Users</h4>    
        
        <p>{{ store }} </p>
    </div>

  <!-- <main>
    <h1>Welcome {{ store?.username || 'Comrade' }}</h1>
  </main> -->
</template>
<style>
h4 {
  color: #DD9036;
  font-style: italic;
  font-weight: 400;
  margin-right: 5%;
  margin-bottom: -1.8%;
}
</style>
<template>
    <div class="wrap">
      <p>Create New Invoice</p>
      <input type="text" placeholder="Item ID">
      <input type="text" placeholder="Item Name">
      <input type="text" placeholder="QTY">
      <input type="text" placeholder="Unit Price">
      <input type="text" placeholder="Amount">
      <button>OK</button>
    </div>
</template>

<script>
export default {
  name: 'Create'
}
</script>

<style scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
}

input {
  margin-top: 30px;
}

button {
  margin-top: 50px;
}
</style>

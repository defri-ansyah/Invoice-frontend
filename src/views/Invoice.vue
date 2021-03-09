<template>
  <div class="wrap">
    <table>
      <tr>
        <th>IV. ID</th>
        <th>Invoice Date</th>
        <th>Customer Name</th>
        <th>Total Invoice Amount</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>1</td>
        <td>29 Januari 2019</td>
        <td>Mark</td>
        <td>$3300.12</td>
        <td>
          <router-link to="/">[Edit]</router-link>
          <router-link to="/">[Delete]</router-link>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>10 Januari 2019</td>
        <td>Defri</td>
        <td>$1154.00</td>
        <td>
          <router-link to="/">[Edit]</router-link>
          <router-link to="/">[Delete]</router-link>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>03 Februari 2019</td>
        <td>Bambang</td>
        <td>$114.00</td>
        <td>
          <router-link to="/">[Edit]</router-link>
          <router-link to="/">[Delete]</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Invoice'
}
</script>

<style scoped>
.wrap {
  width: 100%;
  display: flex;
  justify-content: center;
}
table {
  border-collapse: collapse;
  width: 80%;
  justify-content: center;
}

td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #dddddd;
  border: 1px solid white;
  text-align: left;
  padding: 8px;
}
</style>

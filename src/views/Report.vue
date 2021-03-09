<template>
  <div class="wrap">
    <table>
      <tr>
        <th>Customer Name</th>
        <th>Customer Phone</th>
        <th>Last Invoice ID</th>
        <th>Last Invoice Date</th>
        <th>Last Invoice Amount</th>
      </tr>
      <tr>
        <td>Iwan</td>
        <td>0813-98498433</td>
        <td>6</td>
        <td>19 February 2019</td>
        <td>$310.00</td>
      </tr>
      <tr>
        <td>Mark</td>
        <td>0811-12837183</td>
        <td>4</td>
        <td>16 February 2019</td>
        <td>$726.00</td>
      </tr>
      <tr>
        <td>Robert P</td>
        <td>0811-98761234</td>
        <td>7</td>
        <td>22 February 2019</td>
        <td>$987.50</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Report'
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

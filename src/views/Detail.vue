<template>
  <div class="wrap">
    <p>INVOICE</p>
    <p>Company Inc.</p>
    <div class="head">
      <div class="head">
        <p>Customer Name</p>
        <p>Will Smith</p>
      </div>
      <div class="head">
        <p>Invoice #</p>
        <p>IV0001</p>
      </div>
    </div>
    <div class="head">
      <div class="head">
        <p>Customer Address</p>
        <p>Jalan Kebayoran Lama No 1 Jakarta Barat, 12345</p>
      </div>
      <div class="head">
        <p>Invoice Date</p>
        <p>11/02/2019</p>
      </div>
    </div>
    <div class="phone">
      <p>Customer Phone</p>
      <p>0812 88881234</p>
    </div>
    <table>
      <tr>
        <th>Item ID</th>
        <th>Item Name</th>
        <th>QTY</th>
        <th>Unit Price</th>
        <th>Amount</th>
      </tr>
      <tr>
        <td>P001</td>
        <td>Cut off machine</td>
        <td>1</td>
        <td>$245.50</td>
        <td>$245.50</td>
      </tr>
      <tr>
        <td>P002</td>
        <td>Angle Grinder</td>
        <td>1</td>
        <td>$54.75</td>
        <td>$54.75</td>
      </tr>
      <tr>
        <td>P003</td>
        <td>Reciprocating Sabre Saw Blades</td>
        <td>5</td>
        <td>$1.23</td>
        <td>$6.15</td>
      </tr>
      <tr>
        <td></td>
        <td>Sub Total</td>
        <td></td>
        <td></td>
        <td>$306.40</td>
      </tr>
      <tr>
        <td></td>
        <td>Tax (10%)</td>
        <td></td>
        <td></td>
        <td>$30.64</td>
      </tr>
      <tr>
        <td></td>
        <td>Total</td>
        <td></td>
        <td></td>
        <td>$336.40</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Detail'
}
</script>

<style scoped>
.wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
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

.head{
  display: flex;
  justify-content: space-between;
}

.phone {
  display: flex;
}

p {
  margin-right: 20px;
}
</style>

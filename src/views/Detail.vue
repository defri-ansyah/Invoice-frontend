<template>
  <div class="wrap">
    <p>INVOICE</p>
    <p>Company Inc.</p>
    <div class="head">
      <div class="head">
        <p>Customer Name</p>
        <p>{{invoice.user.username}}</p>
      </div>
      <div class="head">
        <p>Invoice #</p>
        <p>{{invoice.invoice_code}}</p>
      </div>
    </div>
    <div class="head">
      <div class="head">
        <p>Customer Address</p>
        <p>{{invoice.user.address}}</p>
      </div>
      <div class="head">
        <p>Invoice Date</p>
        <p>{{handleMoment(invoice.createdAt)}}</p>
      </div>
    </div>
    <div class="phone">
      <p>Customer Phone</p>
      <p>{{invoice.user.phone_number}}</p>
    </div>
    <table>
      <tr>
        <th>Item ID</th>
        <th>Item Name</th>
        <th>QTY</th>
        <th>Unit Price</th>
        <th>Amount</th>
      </tr>
      <tr v-for="(item, index) in invoiceDetails" :key="index">
        <td>{{item.id}}</td>
        <td>{{item.item.name}}</td>
        <td>{{item.qty}}</td>
        <td>${{item.item.price}}</td>
        <td>${{item.amount}}</td>
      </tr>
      <tr>
        <td></td>
        <td>Sub Total</td>
        <td></td>
        <td></td>
        <td>${{invoice.sub_total}}</td>
      </tr>
      <tr>
        <td></td>
        <td>Tax (10%)</td>
        <td></td>
        <td></td>
        <td>${{invoice.sub_total * 0.1}}</td>
      </tr>
      <tr>
        <td></td>
        <td>Total</td>
        <td></td>
        <td></td>
        <td>${{invoice.total_amount}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Detail',
  data () {
    return {
      invoice: {},
      invoiceDetails: [],
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    getInvoices () {
      const token = this.user.token
      axios
        .get('http://localhost:8000/api/invoice/11', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => {
          console.log(res)
          if (res.status === 200) {
            const invoice = res.data.data
            // this.localData(invoices)
            this.invoice = invoice
            this.invoiceDetails = invoice.invoice_details
          }
        })
        .catch((err) => {
          console.log(err.response)
        })
    },
    handleMoment (date) {
      return moment(date).format('DD MMMM YYYY')
    }
  },
  created () {
    this.getInvoices()
  }
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

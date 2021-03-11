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
      <tr v-for="(item, index) in invoices" :key="index">
        <td>{{item.id}}</td>
        <td>{{handleMoment(item.createdAt)}}</td>
        <td>{{item.user.username}}</td>
        <td>${{item.total_amount}}</td>
        <td>
          <router-link to="/">[Edit]</router-link>
          <router-link to="/">[Delete]</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import axios from 'axios'
import moment from 'moment'

export default {
  name: 'Invoice',
  data () {
    return {
      invoices: [],
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  methods: {
    getInvoices () {
      const token = this.user.token
      axios
        .get('http://localhost:8000/api/invoice', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => {
          console.log(res)
          if (res.status === 200) {
            const invoices = res.data.data
            // this.localData(invoices)
            this.invoices = invoices
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

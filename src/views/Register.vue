<template>
  <div class="container">
    <!-- <SideLogin/> -->
    <form @submit.prevent="signup" class="form-container">
      <p class="text2">
        Register
      </p>
      <p class="text3">
        Manage Invoices
      </p>
      <div class="form-input">
        <div class="login-input">
          <img src="../assets/img/user.png" class="login-label" />
          <input
            type="text"
            id="text"
            placeholder="Enter your username"
            v-model="username"
            required
          />
        </div>
        <div class="login-input">
          <img src="../assets/img/mail.png" class="login-label" />
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            v-model="email"
            required
          />
        </div>
        <div class="login-input">
          <img src="../assets/img/lock.png" class="login-label" />
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            v-model="password"
            required
          />
          <img
            src="../assets/img/eye-open.png"
            class="login-label eye"
            id="togglePassword"
            onclick="myFunction()"
          />
        </div>
        <button to="/login" type="submit" class="btn-1">Sign Up</button>
        <footer class="sign-up">
          <span> Already have an account? Let’s </span>
          <router-link to="/">Login</router-link>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup (e) {
      const username = this.username
      const email = this.email
      const password = this.password
      e.preventDefault()
      axios
        .post('http://localhost:8000/api/auth/signup', {
          username,
          email,
          password
        }).then((res) => {
          console.log(res)
          if (res.status === 200) {
            this.username = ''
            this.email = ''
            this.password = ''
            this.goLogin()
          }
          Swal.fire('Success Register', 'account created successfully', 'success')
        })
        .catch((err) => {
          console.log(err.response)
          Swal.fire('Oops...', err.response.data.messages, 'error')
        })
      this.email = ''
      this.password = ''
      this.name = ''
    },
    goLogin () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.form-container {
  margin-left: 40px;
}
.form-container p {
  font-family: Nunito Sans;
}
.text2 {
  width: 320px;
  margin-top: 100px;
  color: #3a3d42;
  font-size: 20px;
}
.text3 {
  width: 380px;
  line-height: 22px;
  margin-top: 30px;
  color: rgba(58, 61, 66, 0.6);
  font-size: 12px;
}
.text4 {
  width: 380px;
  line-height: 22px;
  margin-top: 30px;
  color: rgba(58, 61, 66, 0.6);
  font-size: 13px;
  margin-bottom: 50px;
}
.text5 {
  width: 320px;
  color: #3a3d42;
  font-size: 20px;
}
.success {
  margin-top: 100px;
  margin-bottom: 30px;
}
.login-input {
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
  color: #d0cccc;
  display: flex;
  flex-direction: row;
  padding-bottom: 5px;
  margin-top: 50px;
}
#email,
#password,
#username,
#fullname,
#text {
  box-sizing: border-box;
  width: 100%;
  border: none;
  display: block;
  font-size: 14px;
  margin-left: 20px;
  font-family: Nunito Sans;
  color: #a9a9a9 80%;
  outline: none;
}
.forgot-password {
  font-size: 14px;
  width: 380px;
  text-align: right;
  margin-top: 30px;
  margin-left: 150px;
  color: rgba(58, 61, 66, 0.8);
}
.btn-1 {
  border: 1px solid #d0cccc;
  color: #d0cccc;
  font-size: 18px;
  background: #6379f4;
  color: #fff;
  border-radius: 12px;
  display: block;
  text-align: center;
  padding: 10px 0px;
  margin-top: 70px;
  height: 57px;
  width: 433px;
}
.btn-register {
  border: 1px solid #d0cccc;
  color: #88888f;
  font-size: 18px;
  background: #dadada;
  border-radius: 12px;
  display: block;
  text-align: center;
  padding: 10px 0px;
  margin-top: 70px;
}
.sign-up {
  font-family: Nunito Sans;
  color: rgba(58, 61, 66, 0.8);
  text-align: center;
  margin-top: 40px;
}
.sign-up a {
  color: #6379f4;
}
.eye {
  cursor: pointer;
}
input[type="number"] {
  height: 60px;
  width: 48px;
  font-size: 30px;
  color: #3a3d42;
  text-align: center;
  margin-right: 10px;
  border: 1px solid rgba(169, 169, 169, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
  border-radius: 10px;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
@media (max-width: 768px) {
  .pict-container {
    display: none;
  }
  form {
    width: 100%;
    margin-left: 0;
  }
  .form-container {
    margin: 0px 5px 0px 5px;
  }
}
</style>

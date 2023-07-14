<template>
  <main class="main-content mt-0">
    <div
      class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
      style="
        background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg');
        background-position: top;
      "
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 text-center mx-auto">
            <h1 class="text-white mb-2 mt-5">Welcome!</h1>
            <p class="text-lead text-white">
              Use these awesome forms to login or create new account in your
              project for free.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
        <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div class="card z-index-0">
            <div class="card-header text-center pt-4">
              <h5>Digite nome, email e senha para registrar-se</h5>
            </div>
            <div class="row px-xl-5 px-sm-4 px-3"></div>
            <div class="card-body">
              <form role="form" @submit.prevent="sendForm">
                <!-- <argon-input type="text" placeholder="Nome" aria-label="Name" v-model="user.name" /> -->
                <input
                  type="text"
                  class="form-control mb-3"
                  placeholder="Nome"
                  v-model="user.username"
                />
                <input
                  type="email"
                  class="form-control mb-3"
                  placeholder="Email"
                  v-model="user.email"
                />
                <input
                  type="password"
                  class="form-control mb-2"
                  placeholder="Senha"
                  aria-label="Password"
                  v-model="user.password"
                />
                <div class="text-center">
                  <argon-button
                    fullWidth
                    color="dark"
                    variant="gradient"
                    class="my-4 mb-2"
                    nativeType="submit"
                    >Cadastrar-se</argon-button
                  >
                  <!-- <button class="btn bg-gradient-dark w-100 my-4 mb-2" type="submit">Cadastrar-se</button> -->
                </div>
                <p class="text-sm mt-3 mb-0">
                  Já tem uma conta?
                  <router-link to="/signin" class="text-dark font-weight-bolder"
                    >Login</router-link
                  >
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <app-footer />
</template>

<script>
import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  components: {
    AppFooter,
    ArgonInput,
    ArgonCheckbox,
    ArgonButton,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    sendForm() {
      axios
        .post(
          "http://localhost/signup.php",
          { data: this.user },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          this.$router.push("/signin");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

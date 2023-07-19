<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8">
        <div class="row mt-4">
          <div class="col-xl-6 mb-xl-0 mb-4">
            <master-card />
          </div>
          <div class="col-xl-6">
            <div class="row">
              <div class="col-md-6">
                <default-info-card
                  :classIcon="salary.classIcon"
                  :title="salary.title"
                  :desc="user.role"
                  :price="'R$ ' + user.income"
                />
              </div>
              <div class="col-md-6">
                <default-info-card
                  :classIcon="paypal.classIcon"
                  :title="paypal.title"
                  :desc="paypal.desc"
                  :price="paypal.price"
                />
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-4">
            <payment-card />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <invoice-card class="mt-4" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-7">
        <billing-card />
      </div>
      <div class="col-md-5">
        <transaction-card />
      </div>
    </div>
    <v-fade-transition hide-on-leave>
      <v-card
        v-if="this.$store.state.addCardModal"
        append-icon="$close"
        class="mx-auto"
        elevation="16"
        max-width="500"
        title="Send a receipt"
      >
        <template v-slot:append>
          <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
        </template>

        <v-divider></v-divider>

        <div class="py-12 text-center">
          <v-icon
            class="mb-6"
            color="success"
            icon="mdi-check-circle-outline"
            size="128"
          ></v-icon>

          <div class="text-h4 font-weight-bold">This receipt was sent</div>
        </div>

        <v-divider></v-divider>

        <div class="pa-4 text-end">
          <v-btn
            class="text-none"
            color="medium-emphasis"
            min-width="92"
            rounded
            variant="outlined"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </div>
      </v-card>
    </v-fade-transition>
  </div>
</template>

<script>
import MasterCard from "@/examples/Cards/MasterCard.vue";
import DefaultInfoCard from "@/examples/Cards/DefaultInfoCard.vue";
import PaymentCard from "./components/PaymentCard.vue";
import InvoiceCard from "./components/InvoiceCard.vue";
import BillingCard from "./components/BillingCard.vue";
import TransactionCard from "./components/TransactionCard.vue";

export default {
  name: "Billing",
  components: {
    MasterCard,
    DefaultInfoCard,
    PaymentCard,
    InvoiceCard,
    BillingCard,
    TransactionCard,
  },
  data() {
    return {
      salary: {
        classIcon: "text-white fas fa-landmark",
        title: "Salary",
        desc: "Belong Interactive",
        price: "+$2000",
      },
      paypal: {
        classIcon: "text-white fab fa-paypal",
        title: "Paypal",
        desc: "Freelance Payment",
        price: "$455.00",
      },
      user: {},
    };
  },

  methods: {
    getUser() {
      this.$http
        .get("profile.php")
        .then((response) => {
          this.user = response.data;
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },

  beforeMount() {
    this.getUser();
  },
};
</script>

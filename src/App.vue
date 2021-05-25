<template>
  <body>
    <Header />

    <main class="tile">
      <div class="container">
        <router-view />
      </div>
    </main>

    <Footer />
  </body>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { mapActions } from "vuex";

export default {
  components: { Header, Footer },
  created() {
    this.loadCart();
  },
  methods: {
    ...mapActions(["loadCart"]),
  },
};
</script>
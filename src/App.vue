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

export default {
  components: { Header, Footer },
};
</script>
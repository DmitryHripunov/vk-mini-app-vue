<template>
  <body>
    <Header />

    <main class="main">
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

<style>
.main {
  min-height: calc(100vh - 60px);
  height: 100%;
}
</style>
<template>
  <header class="hero is-primary">
    <div class="hero-body indent-top">
      <div class="container">
        <router-link
          tag="h1"
          class="title has-text-centered-desktop"
          :to="{ name: 'main' }"
        >
          VK MINI APP
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
@media (max-width: 1024px) {
  .hero-body.indent-top {
    padding: 3rem 1.5rem 1.5rem 1.5rem;
    text-align: center;
  }
}
</style>
<template>
  <header class="hero is-small is-primary">
    <div class="hero-body">
      <div class="container">
        <!-- <h1 class="title has-text-centered-desktop"> -->
        <!-- VK MINI APP -->

        <router-link
          tag="h1"
          class="title has-text-centered-desktop"
          :to="{ name: 'main' }"
        >
          VK MINI APP
        </router-link>
        <!-- </h1> -->
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

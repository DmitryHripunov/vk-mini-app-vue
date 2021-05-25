<template>
  <footer class="footer">
    <nav
      class="navbar is-fixed-bottom box"
      style="padding: 0"
      role="navigation"
      aria-label="navigation"
    >
      <div class="container">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{ name: 'main' }">
            Главная
          </router-link>

          <router-link class="navbar-item" :to="{ name: 'events' }">
            События
          </router-link>

          <router-link class="navbar-item" :to="{ name: 'winers' }">
            Список побадителей
          </router-link>
        </div>
      </div>
    </nav>
  </footer>
</template>

<script>
export default {};
</script>
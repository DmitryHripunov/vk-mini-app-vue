<template>
  <div class="hero is-small">
    <div class="hero-body">
      <article class="panel is-info">
        <p class="panel-heading">Список побадителей</p>

        <Preloader v-if="productsLoading" />

        <a class="panel-block" v-for="item in usersData" :key="item.id">
          <div class="panel-block__item">
            <strong> {{ item.name }} </strong>
          </div>

          <div class="panel-block__item">
            {{ item.created_at | subString }}
          </div>

          <div class="panel-block__item">
            <i> {{ item.email | replaceString }} </i>
          </div>
        </a>
      </article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE_URL } from "@/config";
import Preloader from "@/components/Preloader.vue";
import subString from "@/helpers/subString";
import replaceString from "@/helpers/replaceString";

export default {
  components: { Preloader },

  data() {
    return {
      usersData: null,
      productsLoading: false,
    };
  },
  methods: {
    loadUsers() {
      this.productsLoading = true;
      clearTimeout(this.loadProductTimer);

      this.loadProductTimer = setTimeout(() => {
        axios
          .get(API_BASE_URL)
          .then((response) => {
            this.usersData = response.data.data;
          })
          .then(() => {
            this.productsLoading = false;
          });
      }, 1000);
    },
  },

  created() {
    this.loadUsers();
  },

  filters: {
    subString,
    replaceString,
  },
};
</script>

<style>
.panel-block {
  flex-wrap: wrap;
}

.panel-block__item:not(:last-child) {
  margin-right: 16px;
}
</style>
<template>
  <div class="hero is-small">
    <div class="hero-body">
      <article class="panel is-link">
        <p class="panel-heading">События</p>

        <Preloader v-if="productsLoading" />

        <a class="panel-block" v-for="item in eventsData" :key="item.id">
          <div class="events-img-wrapper">
            <img class="events-img" :src="item.image" :alt="item.name" />
          </div>

          <div class="panel-block__item">
            <strong> {{ item.name }} </strong>
          </div>

          <div class="date">{{ item.price }}</div>

          <div class="panel-block__item">
            {{ item.description }}
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

export default {
  components: { Preloader },

  data() {
    return {
      productsLoading: false,
      eventsData: null,
    };
  },

  methods: {
    loadEvents() {
      this.productsLoading = true;
      clearTimeout(this.loadProductTimer);

      this.loadProductTimer = setTimeout(() => {
        axios
          .get(`${API_BASE_URL}/products?limit=1`)
          .then((response) => {
            this.eventsData = response.data.data;
          })
          .then(() => {
            this.productsLoading = false;
          });
      }, 1000);
    },
  },

  created() {
    this.loadEvents();
  },
};
</script>;

<style>
.events-img-wrapper {
  margin-right: 16px;
  width: 50px;
  height: 50px;
}

.events-img {
  max-width: 100%;
  object-fit: cover;
  border-radius: 50%;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
}

.panel-block:hover .events-img {
  filter: grayscale(0);
}

.date {
  margin-left: auto;
  margin-top: 0;
}
</style>
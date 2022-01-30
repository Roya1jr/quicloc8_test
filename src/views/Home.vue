<template>
  <div class="home">
    <Map />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
import Map from "@/components/Map.vue";

export default defineComponent({
  name: "Home",
  components: {
    Map,
  },
});
</script>

<style>
.home {
  animation: fadein 14s;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

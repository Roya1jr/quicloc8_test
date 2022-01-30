<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Map from "@/components/Map.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    Map,
  },
});
</script>

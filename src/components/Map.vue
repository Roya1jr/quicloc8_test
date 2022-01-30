<template>
  <div id="map"></div>
</template>

<script>
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";

export default {
  name: "Map",
  props: {},
  setup() {
    let map = null;
    onMounted(() => {
      map = leaflet.map("map").setView([-33.92, 18.42], 12);
      leaflet
        .tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoicm95YTFqciIsImEiOiJja3oxOWxqZ2kxanpyMzJxbDNkeHNiYnh6In0.MAb_5S0hbcvSDkC17gcXog",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
              "pk.eyJ1Ijoicm95YTFqciIsImEiOiJja3oxOWxqZ2kxanpyMzJxbDNkeHNiYnh6In0.MAb_5S0hbcvSDkC17gcXog",
          }
        )
        .addTo(map);
    });
  },
};
</script>

<style>
#map {
  height: 600px;
  widows: 100px;
}
</style>
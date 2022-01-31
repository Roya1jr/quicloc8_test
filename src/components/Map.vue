<template>
  <div id="map">
    <div class="leaflet-top leaflet-right">
      <button id="floating-button">
        <div>
          <router-link style="text-decoration: none" to="/messages"
            >🗨️</router-link
          >
        </div>
      </button>
    </div>
  </div>
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
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}
#floating-button {
  text-align: center;
  justify-content: center;
  font-size: 14px;
  pointer-events: auto;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  background: #db4437;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}
#floating-button div {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  text-align: center;
  display: table-cell;
  overflow: hidden;
  vertical-align: middle;
  font-size: 3em;
}
</style>
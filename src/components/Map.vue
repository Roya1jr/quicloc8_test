<template>
  <div id="map">
    <div class="leaflet-top leaflet-right">
      <div id="floating-button">
        <router-link style="text-decoration: none" to="/messages"
          ><va-button
            icon="comment"
            color="myaccent"
            text-color="myprimary"
            flat
            class="mr-4"
            round="true"
            size="large"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import { onMounted } from "vue";
import Cars from "@/assets/codingTest/vehicleCoordinates.json";
import myimage from "@/assets/codingTest/ic_new_white_taxi.png";
import "leaflet-rotatedmarker";

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

      var CarIcon = leaflet.icon({
        iconUrl: myimage,
        iconSize: [45, 50], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
      });

      Cars.forEach((element) => {
        console.log(element);
        leaflet
          .marker([element.latitude, element.longitude], {
            icon: CarIcon,
            rotationAngle: element.heading,
          })
          .addTo(map)
          .bindPopup("Taxi");
      });
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
  pointer-events: auto;
}
</style>
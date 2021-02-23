<template>
  <div class="map-collection" id="map-collection" />
</template>

<script>
import 'leaflet/dist/leaflet.css'
import 'leaflet'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'

import layer from './layer'

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  },
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      var map = L.map(
        'map-collection',
        {
          center: [30.470853, 104.009746],
          zoomControl: false,
          attributionControl: false,
        }
      ).setView([30.470853, 104.009746], 3)

      L.tileLayer(
        this.url,
        {
          attribution: '<a href="https://www.openstreetmap.org/">OSM</a>',
          maxZoom: 19,
        }
      ).addTo(map)

      var defaultIcon = L.icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        iconShadow : require('leaflet/dist/images/marker-icon.png')
      })

      var markers = new L.MarkerClusterGroup();

      // map 数据经纬度聚合
      for (let i = 0; i < layer.length; i++) {
        markers.addLayer(L.marker(layer[i],
          {
            icon: defaultIcon
          })
        )
      }

      map.addLayer(markers)

      this.map = map
    }
  }
}
</script>

<style scoped>
.map-collection {
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>

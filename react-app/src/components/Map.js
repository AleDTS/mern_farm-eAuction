import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup, GeoJSON, LayerGroup, Circle } from 'react-leaflet';

export default class Map extends React.Component {
  render() {
	  // const geojson = this.props.map.geojson;
	  const geojson = this.props.map.geoj;
	  const center = this.props.map.coord;
	  console.log(center)
    return (
      <LeafletMap
        center={center}
        zoom={14}
        maxZoom={20}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
	  	<LayerGroup>
			<GeoJSON data={geojson}/>
		</LayerGroup>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
		  attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </LeafletMap>
    );
  }
}

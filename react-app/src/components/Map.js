import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup, GeoJSON, LayerGroup, Circle } from 'react-leaflet';

class Map extends React.Component {
  render() {
	  // const geojson = this.props.map.geojson;
	  // const geojson = this.props.map;
	  // const center = this.props.map.latLng;
	  const geojson = [];
	  const center = [4.68566, -74.21133]
	  // console.log(this.props.map)
    return (
      <LeafletMap
        center={center}
        zoom={15}
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
        />
        <Marker position={[50, 10]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map

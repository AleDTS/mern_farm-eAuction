import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup, GeoJSON, LayerGroup, Circle } from 'react-leaflet';

class Map extends React.Component {
  render() {
	  const geojson = geojsonFeature;
	  const center = [4.68566, -74.21133]
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
			<GeoJSON data={geojsonFeature}/>
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


var geojsonFeature = {
    "type": "FeatureCollection",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "g_name": "Talhão-0",
                "g_area_ha": "18.32915032824457",
                "field_id": "1515"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -74.208312,
                            4.685498
                        ],
                        [
                            -74.204471,
                            4.685476
                        ],
                        [
                            -74.203934,
                            4.681862
                        ],
                        [
                            -74.208419,
                            4.681926
                        ],
                        [
                            -74.208312,
                            4.685498
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "g_name": "Talhão-0",
                "g_area_ha": "4.154656196260981",
                "field_id": "1314"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -74.211537,
                            4.690747
                        ],
                        [
                            -74.208819,
                            4.690709
                        ],
                        [
                            -74.208802,
                            4.690576
                        ],
                        [
                            -74.208759,
                            4.689474
                        ],
                        [
                            -74.211531,
                            4.689517
                        ],
                        [
                            -74.211537,
                            4.690747
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "g_name": "Talhão-0",
                "g_area_ha": "18.10678373520952",
                "field_id": "1315"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -74.212951,
                            4.685609
                        ],
                        [
                            -74.209111,
                            4.685587
                        ],
                        [
                            -74.209133,
                            4.683641
                        ],
                        [
                            -74.208489,
                            4.683641
                        ],
                        [
                            -74.208489,
                            4.68193
                        ],
                        [
                            -74.212479,
                            4.682059
                        ],
                        [
                            -74.213359,
                            4.684347
                        ],
                        [
                            -74.212951,
                            4.684497
                        ],
                        [
                            -74.212951,
                            4.685609
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "g_name": "Talhão-0",
                "g_area_ha": "37.04083596623678",
                "field_id": "1313"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -74.208167,
                            4.689308
                        ],
                        [
                            -74.208296,
                            4.685673
                        ],
                        [
                            -74.217048,
                            4.685951
                        ],
                        [
                            -74.216619,
                            4.68933
                        ],
                        [
                            -74.208167,
                            4.689308
                        ]
                    ]
                ]
            }
        }
    ]
}

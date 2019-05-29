import React from 'react'
import Map from './Map'
import CardSearch from './CardSearch'
import {
	Container,
	Row,
	Col
} from 'react-bootstrap'

export default class Screen1 extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			  value: ''
		};
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<Map geojson={GEOJSON}/>
					</Col>
					<Col>
						<CardSearch farms={FARMS} />
					</Col>
				</Row>
			</Container>

		);
	}
}

const GEOJSON = {
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

const FARMS = [
	{ "farm_id" : 221, "name" : "Farm X", "latitude" : 4.68566, "longitude" : -74.21133, "culture" : "soybean", "variety" : "XXX1", "total_area" : 1000, "yield_estimation" : 60, "price" : 72, "__v" : 0 },
	{ "farm_id" : 231, "name" : "Farm Y", "latitude" : -20.41673, "longitude" : -48.75594, "culture" : "soybean", "variety" : "XXX2", "total_area" : 900, "yield_estimation" : 85, "price" : 81, "__v" : 0 },
	{ "farm_id" : 271, "name" : "Farm Z", "latitude" : -22.946619, "longitude" : -45.580756, "culture" : "rice", "variety" : "XXX1", "total_area" : 850, "yield_estimation" : 58, "price" : 80.5, "__v" : 0 }
]

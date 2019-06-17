const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GeoJSON = require('mongoose-geojson-schema');

const GeoJSchema = new mongoose.Schema({
	any: mongoose.Schema.Types.GeoJSON,
	point: mongoose.Schema.Types.Point,
	multipoint: mongoose.Schema.Types.MultiPoint,
	linestring: mongoose.Schema.Types.LineString,
	multilinestring: mongoose.Schema.Types.MultiLineString,
	polygon: mongoose.Schema.Types.Polygon,
	multipolygon: mongoose.Schema.Types.MultiPolygon,
	geometry: mongoose.Schema.Types.Geometry,
	geometrycollection: mongoose.Schema.Types.GeometryCollection,
	feature: mongoose.Schema.Types.Feature,
	featurecollection: mongoose.Schema.Types.FeatureCollection
});


module.exports = exports = mongoose.model('GeoJSchema', GeoJSchema);
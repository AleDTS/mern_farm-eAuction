// https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a
// https://www.chartjs.org/docs/latest/charts/scatter.html
import React from 'react'
import Chart from "chart.js";
import moment from 'moment'

export default class LineGraph extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data.log_ndvi
		}
	}

	chartRef = React.createRef();

    componentDidMount() {
		this.buildChart();
    }

	buildChart = () => {
		const {data} = this.state;
		let newData = []
		data.forEach(point => {
			newData.push({
				x: moment(point['date']),
				y: point['value']
			})
		})

        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                datasets: [{
                    label: "NDVI",
                    data: newData,
					fill: false
				}]
            },
            options: {
                scales: {
		            xAxes: [{
		                type: 'time'
		                // position: 'bottom'
		            }]
		        }
            }
        });
	}

    render() {
        return (
            <div>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

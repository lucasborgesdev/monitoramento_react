import React, { Component } from 'react';
import Line  from 'react-chartjs-2';
import Chart from 'chart.js';

class ChartPh extends Component {
    constructor(){
      super();
      this.state = {
        chartData:{}
      }
    }

    componentWillMount(){
        this.getchartData();
    }
    getChartData(){
        // conexão ajax ou json aqui
        this.setState({
            chartData:{               
                        labels: ["03-10","02-10","01-10","30-09","29-09","28-09","27-09","26-07","25-09","24-09","23-09","22-09","21-09","20-09"],
                        datasets: [
                            {
                            label: "Nivel do Ph",
                            data: [2,5,10,5,10,12,11,7,12,8,12,11,5,10],
                            borderWidth: 6,
                            borderColor: 'rgba(77,166,253, 0.85)',
                            backgroundColor: 'transparent'
                            },
                        ]
                    
                }

        });

    }
    render() {
        return (        
                          
            
            <Chart 
                chartData={this.state.chartData}
            />
          
        );
      }
    }
    


export default ChartPh;
    
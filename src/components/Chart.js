import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';


class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: [ 
        'Eat out',
        'Rent',
        'Grocery',
        'Cable',
        'Internet',
        'Travel',
        'Childcare',
        ],
        datasets:[
          {
            label: ['title'],
            data:[ 30,  350, 
                   90,  100, 
                   200, 150, 
                   1200,
            ],
            backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#3380FF',
              '#33FFD5',
              '#FF5102',
            ],
          }
        ]
      }
    }
  }
  static defaultProps ={
    displayTitle: true,
    displayLend: true,
    legendPosition: 'right'
  

  }

  render() {
    return (
      <div className= "chart">
        <Pie
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'My budget',
          
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}
export default Chart;
import React,{PureComponent} from  'react'
import '../Main/Style.css';
import {Pie} from 'react-chartjs-2';

class Chart extends PureComponent {
   
       render() {
  return (
    <div className="chart">
     <Pie data={
         {
           
            labels: [
          'Purple',
          'Green',
          'Orange'
        ],
        datasets: [{
          label: 'Anime Details',
          data: [1000, 15250, 20100],
          backgroundColor: [
            'rgb(128,0,128)',
            'rgb(34,139,34)',
            'rgb(255,69,0)'
          ],
         
        }]
      
         }
         
     }
     height={400}
     width={400}></Pie>
    </div>
 
    );
}
}
export default Chart;
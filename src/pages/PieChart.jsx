import React from 'react';
import { Doughnut  } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Bad Review', 'good review', 'avarage', ''],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3,  2],
      backgroundColor: [
        'pink',
        'lightgreen',
        '#ffc107',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(153, 102, 255, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};
 
const PieChart = () => (
  <>
    <div className='header'>
      
      <div className='links'>
     
      </div>
    </div>
    <Doughnut  data={data}  />
  </>
);
 
export default PieChart;
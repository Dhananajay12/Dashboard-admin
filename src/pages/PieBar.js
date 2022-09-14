import React from 'react';
import { Doughnut  } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Incomplete', 'Complete'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 39],
      backgroundColor: [
        'pink',
        'lightgreen',
       
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
     
        
      ],
      borderWidth: 1,
    },
  ],
};
 



const PieBar = () => {
  return (
   <>
       <div className='header'>
      
      <div className='links'>
     
      </div>
    </div>
    <Doughnut  data={data}  />
   </>
  )
}

export default PieBar


// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// import useDebounce from "../hook/useDebounce"
// interface searchList {
//   calories:number
//   carbohydrates_total_g:number
//   cholesterol_mg:number
//   fat_saturated_g:number
//   fat_total_g:number
//   fiber_g:number
//   name:string
//   potassium_mg:number
//   protein_g:number
//   serving_size_g:number
//   sodium_mg:number
//   sugar_g:number

// }

// function NutritionSearch() {
//   const [Query, setQuery] = useState("");
//   const [list, setList] = useState<searchList[]>([]);
//   const searchResults = useDebounce(Query, 1000)
//   useEffect(() => {
//     fetch(`https://api.api-ninjas.com/v1/nutrition?query=${searchResults}`, {
//       method: "GET",
//       headers: {
//         "Content-type": "applocation/json",
//         "X-Api-Key": "BVtSLKPpjfvzm0tB4e1JTw==s152m7qlTgrzSoQM"
//       }
//     }).then((res) => res.json())
//       .then((res) => {
//         console.log(res)
//         setList(res)
//       })
//   }, [searchResults])
//   console.log("list", list)
//   return (
//     <div>
//       <input className="w-1/3 p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" type="text" placeholder='search foods'
//         value={Query}
//         onChange={(e) => setQuery(e.target.value)} />
//       {list && <div className='container'>
//         {list.map((item, i) => (
//         <div className='mt-5'>
//            <p className="text-base  font-semibold leading-7 text-indigo-600">All value is in scale of 100gm </p>
//           <h1 className="mt-16 text-2xl text-center font-bold tracking-tight text-gray-900">{item.name}</h1>
//           <table>
//           <tbody>
//           <tr className="bg-gray-100">
//             <th className="px-4 py-2 font-bold">Calories</th>
//             <td className="px-4 py-2">{item.calories}</td>
//           </tr>
//           <tr className="bg-white">
//             <th className="px-4 py-2 font-bold">Carbohydrates</th>
//             <td className="px-4 py-2">{item.carbohydrates_total_g}</td>
//           </tr>
//           <tr className="bg-gray-100">
//             <th className="px-4 py-2 font-bold">Fats </th>
//             <td className="px-4 py-2">{item.fat_total_g}</td>
//           </tr>
//           <tr className="bg-white">
//             <th className="px-4 py-2 font-bold">Fibre</th>
//             <td className="px-4 py-2">{item.fiber_g}</td>
//           </tr>
//           <tr className="bg-white">
//             <th className="px-4 py-2 font-bold">Sugar</th>
//             <td className="px-4 py-2">{item.sugar_g}</td>
//           </tr>
//           <tr className="bg-white">
//             <th className="px-4 py-2 font-bold">Protein</th>
//             <td className="px-4 py-2">{item.protein_g}</td>
//           </tr>
//         </tbody>
//       </table>
//       </div>
//         ))}
//       </div>
//       }
//     </div>
//   )
// }

// export default NutritionSearch

// import React from 'react'


// import { Doughnut } from 'react-chartjs-2';

// const NutritionSearch: React.FC = () => {
//   const data = {
//     labels: ['Protein', 'Carbohydrates', 'Fats'],
//     datasets: [
//       {
//         data: [30, 50, 20],
//         backgroundColor: ['#F87171', '#60A5FA', '#34D399'],
//       },
//     ],
//   };

//   const options = {
//     maintainAspectRatio: false,
//     responsive: true,
//     legend: {
//       position: 'bottom',
//       labels: {
//         fontColor: '#333',
//       },
//     },
//   };

//   return (
//     <div className="w-64 h-64">
//       <Doughnut data={data} options={options} />
//     </div>
//   );
// };

// export default NutritionSearch;

// import { VictoryLabel, VictoryPie } from 'victory';

// const breakfastData = [
//   { x: 'Protein', y: 25 },
//   { x: 'Carbs', y: 50 },
//   { x: 'Fat', y: 25 },
//   { x: 'Protien', y: 2 }
// ];

// const NutritionSearch  = () => {
//   return (
//     <div className="w-64">
//       <VictoryPie

//         data={breakfastData}
//         colorScale={['#10B981', '#60A5FA', '#F87171',"black"]}
//         labels={({ datum }) => `${datum.x}: ${datum.y}%`}
//         labelComponent={<VictoryLabel textAnchor="middle" />}
//       />
//     </div>
//   );
// };

import React from 'react';
import Chart from 'react-apexcharts';

// interface DietIntakeChartProps {
//   data: number[];
// }

let data = [
  {
    series: [50, 25, 15, 10],
    category: "Breakfast",
    options: {
      labels: ['Carbohydrates', 'Proteins', 'Fats', "fibre"],
      colors: ['#10B981', '#60A5FA', '#F87171', "#f471f8"],
      legend: {
        position: 'bottom' as 'bottom',
      },
    },
  },
  {
    series: [60, 30, 15, 10],
    category: "Lunch",
    options: {
      labels: ['Carbohydrates', 'Proteins', 'Fats', "fibre"],
      colors: ['#10B981', '#60A5FA', '#F87171', "#f471f8"],
      legend: {
        position: 'bottom' as 'bottom',
      },
    },
  },
  {
    series: [60, 30, 10, 10],
    category: "Dinner",
    options: {
      labels: ['Carbohydrates', 'Proteins', 'Fats', "fibre"],
      colors: ['#10B981', '#60A5FA', '#F87171', "#f471f8"],
      legend: {
        position: 'bottom' as 'bottom',
      },
    },
  }
]

const NutritientsIntake: React.FC = () => {

  return (
    <div className='mt-20'>
      <h1 className="mb-3 text-4xl font-bold text-center">Nutrients Intake guidance</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4'>
        <img className='w-96 ml-20 rounded-xl' src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <p className="w-96 m-auto text-xl leading-8 text-gray-700">
          Following are general recommendations for nutrient intake in adults, including carbohydrates, fats, and proteins. If you have any health issues, it is important to consult your doctor before making any dietary changes based on these guidelines.
        </p>
        <img  className='w-96 ml-20 rounded-xl' src="https://media.istockphoto.com/id/1384900198/photo/vegan-food-colorful-fresh-vegetables-and-fruits-and-dried-legumes-in-a-row-on-white.jpg?b=1&s=170667a&w=0&k=20&c=T1sKSXgAPlj5OSkxf0ukrR5tPIjDHmCiifzwy4PtA0U=" alt="" />
      </div>

      <div className="lg:w-full md:w-full sm:w-1/4 bg-white sm:py-32 rounded-lg shadow-md p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">

        {data.map((item, i) => {
          return <div key={i} className='sm:w-1/2 lg:w-full md:w-full '>
 <h1 className="text-3xl font-bold tracking-tight text-sky-800 sm:text-4xl text-center">{item.category}</h1>
            <Chart
              options={item.options}
              series={item.series}
              type="pie"
              width="100%"
            />
            <div className="flex justify-center mt-4">
              <div className="flex items-center mr-4">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium text-gray-800">Carbohydrates</span>
              </div>
              <div className="flex items-center mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm font-medium text-gray-800">Proteins</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm font-medium text-gray-800">Fats</span>
              </div>
            </div>
           
          </div>

        })}


      </div>
    </div>
  );
};

export default NutritientsIntake;











import React from 'react';
import Chart from 'react-apexcharts';


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
    <div className='mt-20 text-white'>
      <h1 className="mb-3 text-4xl font-bold text-center">Nutrients Intake guidance</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4'>
        <img className='w-96 ml-20 rounded-xl' src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <p className="w-96 m-auto text-xl leading-8 ">
          Following are general recommendations for nutrient intake in adults, including carbohydrates, fats, and proteins. If you have any health issues, it is important to consult your doctor before making any dietary changes based on these guidelines.
        </p>
        <img className='w-96 ml-20 rounded-xl' src="https://media.istockphoto.com/id/1384900198/photo/vegan-food-colorful-fresh-vegetables-and-fruits-and-dried-legumes-in-a-row-on-white.jpg?b=1&s=170667a&w=0&k=20&c=T1sKSXgAPlj5OSkxf0ukrR5tPIjDHmCiifzwy4PtA0U=" alt="" />
      </div>

      <div className="lg:w-full md:w-full sm:w-1/4 sm:py-32 rounded-lg shadow-md p-4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">

        {data.map((item, i) => {
          return <div key={i} className='sm:w-1/2 lg:w-full md:w-full text-white '>
            <h1 className="text-3xl font-bold tracking-tight text-sky-800 sm:text-4xl text-center text-white">{item.category}</h1>
            <Chart
              options={item.options}
              series={item.series}
              type="pie"
              width="100%"
              color="white"
            />
            <div className="flex justify-center mt-4">
              <div className="flex items-center mr-4">
                <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm font-medium  text-white">Carbohydrates</span>
              </div>
              <div className="flex items-center mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm font-medium  text-white">Proteins</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm font-medium text-white">Fats</span>
              </div>
            </div>

          </div>

        })}


      </div>
    </div>
  );
};

export default NutritientsIntake;









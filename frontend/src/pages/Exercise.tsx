import { useEffect, useState } from "react";
import axios from 'axios'
// import ReactPlayer from 'react-player/lazy'

interface WorkoutObj { id: Number, exercise_name: string, videoURL: string[], steps: string[], Category: string, Difficulty: string, Force: string, Grips: string, target: Object, youtubeURL: string, details: String }

function Exercise() {
    const [products,setProducts]=useState<WorkoutObj[]>([]);
    const token=localStorage.getItem("token");

    useEffect(()=>{
    axios.get("http://localhost:8080/exercise",{
      headers:{"Content-Type":"application/json", Authorization:`Bearer ${token}`}
    })
    .then((res)=>{
        console.log(res);
        setProducts(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
},[])
console.log(products);
    return (
      <div >
        {products && products.map((el,i)=>(
          <h1>{el.exercise_name}</h1>
        ))}
        <h1>Workout</h1>
      </div>
    )
  }

export default Exercise;

{/* <button style={{color:'white'}}>Explore our Plan for Brgineers</button>
<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  <h2 className="text-2xl font-bold tracking-tight text-white">Customers also purchased</h2>

  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {products.map((product,ind) => (
      <div key={ind} className="group relative">

        <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">

          <video className="h-full w-full object-cover object-center lg:h-full lg:w-full" controls >
            <source src={product.videoURL[0]} type="video/mp4"/>
            Sorry, your browser doesn't support videos.
          </video>

        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-white">
                <span aria-hidden="true" className="absolute inset-0" />
                {product.exercise_name}
            </h3>
            <p className="mt-1 text-sm text-white">Difficulty: {product.Difficulty}</p>
          </div>
          <p className="text-sm font-medium text-white">Category: {product.Category}</p>
        </div>
      </div>
    ))}
  </div>
</div> */}
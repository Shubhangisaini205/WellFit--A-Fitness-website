import React, { useState } from 'react'
interface IExercise {
  [key: string]: number
}
const Addworkout = () => {
  const [running,setrunning]=useState(0)
  const [rtime,setrtime]=useState(0)
  const [cycling,setcyclic]=useState(0)
  const [ctime,setctime]=useState(0)
  const [swimming,setswimming]=useState(0)
  const [stime,setstime]=useState(0)
  const [treadmill,settreadmill]=useState(0)
  const [ttime,setttime]=useState(0)
  const [hiking,sethiking]=useState(0)
  const [htime,sethtime]=useState(0)
  const [weight,setweight]=useState(0)
  const [wtime,setwtime]=useState(0)

  const [state,setstate]=useState(false)

  let running1 = JSON.parse(localStorage.getItem("running") as string) || null;
  let treadmill1 = JSON.parse(localStorage.getItem("treadmill") as string) || null;
  let weight1 = JSON.parse(localStorage.getItem("weight") as string) || null;
  let hiking1 = JSON.parse(localStorage.getItem("hiking") as string) || null;
  let swimming1 = JSON.parse(localStorage.getItem("swimming") as string) || null;
  let cyclic1 = JSON.parse(localStorage.getItem("cyclic") as string) || null;


  const handlehiking1=()=>{
    localStorage.removeItem("hiking")
    setstate(!state)
    alert("Excerise Removed Successfully ")
    }
    
    const handlecycle=()=>{
      localStorage.removeItem("cyclic")
      setstate(!state)
      alert("Excerise Removed Successfully ")
    }

    const handleswim=()=>{
    localStorage.removeItem("swimming")
    setstate(!state)
    alert("Excerise Removed Successfully ")
    }
    
    const handletread=()=>{
    localStorage.removeItem("treadmill")
    setstate(!state)
    alert("Excerise Removed Successfully ")
    }
    
    
    const hanlerun=()=>{
    localStorage.removeItem("running")
    setstate(!state)
    alert("Excerise Removed Successfully ")
    }
    
    const hanleweight=()=>{
    localStorage.removeItem("weight")
    setstate(!state)
    alert("Excerise Removed Successfully ")
    }
  
  



const handlecylic=()=>{
localStorage.removeItem("cylic")
let ob={
  cycling,ctime
}

localStorage.setItem("cyclic",JSON.stringify(ob))
alert("Excerise Added Successfully ")
}

const handlehiking=()=>{

  localStorage.removeItem("cylic")
  let ob={
    hiking,htime
  }
  
  localStorage.setItem("hiking",JSON.stringify(ob))
  alert("Excerise Added Successfully ")
}

const handlerunning=()=>{
  localStorage.removeItem("cylic")
  let ob={
    running,rtime
  }
  
  localStorage.setItem("running",JSON.stringify(ob))
  alert("Excerise Added Successfully ")

}
   

const handleswimming=()=>{
  localStorage.removeItem("cylic")
    let ob={
    swimming,stime
  }
  
  localStorage.setItem("swimming",JSON.stringify(ob))
  alert("Excerise Added Successfully ")
}

const handletreadmill=()=>{
  localStorage.removeItem("cylic")
  let ob={
    treadmill,ttime
  } 
  localStorage.setItem("treadmill",JSON.stringify(ob))
  alert("Excerise Added Successfully ")

}

const handleweight=()=>{

  localStorage.removeItem("cylic")
  
  let ob={
    weight,wtime
  }
  
  localStorage.setItem("weight",JSON.stringify(ob))
  alert("Excerise Added Successfully ")

}


  return (
    <div >
    <div className=" p-8 flex flex-wrap md:flex-nowrap justify-between">
    <div className="mt-8">
  <img src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" className="w-full lg:max-w-2xl mx-auto" />
</div>
  <div className="w-full md:w-1/2 md:pr-12">
    <h1 className="text-3xl md:text-4xl font-bold mb-8">Add Workout of Your Choice</h1>

    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Running</h2>
      <div className="flex flex-wrap gap-2">
        <input type="number" placeholder='Enter time in minutes' onChange={(e)=>setrunning(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />

        <input type="number" placeholder='Enter distance in km' onChange={(e)=>setrtime(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />
       {running1? <button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={hanlerun}>Remove</button>:
        <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handlerunning}>ADD</button>}
       
      </div>
    </div>

    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Cycling</h2>
      <div className="flex flex-wrap gap-2">
        <input type="number" placeholder='Enter time in minutes'  onChange={(e)=>setcyclic(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />

        <input type="number" placeholder='Enter distance in km' onChange={(e)=>setctime(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />
     {cyclic1? <button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handlecycle}>Remove</button>:
     <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handlecylic}>ADD</button>}   

       

      </div>
    </div>

    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Swimming</h2>
      <div className="flex flex-wrap gap-2">
        <input type="number" placeholder='Enter time in minutes' onChange={(e)=>setswimming(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />

        <input type="number" placeholder='Enter Number of Sprints' onChange={(e)=>setctime(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />
      {swimming1? <button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handleswim} >Remove</button>:
       <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handleswimming} >ADD</button> } 
      
      </div>
    </div>

    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Treadmill</h2>
      <div className="flex flex-wrap gap-2">
        <input type="number" placeholder='Enter time in minutes' onChange={(e)=>settreadmill(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />

        <input type="number" placeholder='Enter distance in km' onChange={(e)=>setttime(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />
       {treadmill1?<button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handletread}>Remove</button>:
       <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handletreadmill}>ADD</button>} 
        
      </div>
    </div>

    
    <div className="mb-8">
    <h1 className="text-xl font-bold mb-4">Hiking</h1>
    <div className="flex flex-wrap gap-2">
      <input type="number" placeholder="Enter time in minutes" onChange={(e)=>sethiking(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />
      <input type="number"  placeholder="Enter distance in km" onChange={(e)=>sethiking(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />
    {hiking1?<button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handlehiking1}>Remove</button>
    
  :<button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handlehiking}>ADD</button>
  }  
      
    </div>
  </div>

  <div className="mb-8">
    <h1 className="text-xl font-bold mb-4">Weight Machines</h1>
    <div className="flex flex-wrap gap-2">
      <input type="number"  placeholder="Enter time in minutes" onChange={(e)=>setweight(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />
      <input type="number"  placeholder="Enter weight in kg" onChange={(e)=>setwtime(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />
     {weight1?<button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={hanleweight}>ADD</button>
     : <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handleweight}>ADD</button>} 
     
    </div>
  </div>


</div>
 
</div>
    </div> 
  )
}

export default Addworkout
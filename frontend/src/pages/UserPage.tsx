import React, { useEffect, useRef, useState } from 'react'
import {FaHiking, FaRunning} from "react-icons/fa"
import {FaWalking} from "react-icons/fa"
import {BiCycling} from "react-icons/bi"

import {GiWeightLiftingUp} from "react-icons/gi"
import {FaUserCircle} from "react-icons/fa"
import {FaRuler} from "react-icons/fa"
import {FaWeight} from "react-icons/fa"
import {FaBicycle} from "react-icons/fa"
import {FaDumbbell} from "react-icons/fa"
import {FaFire} from "react-icons/fa"
import {FaShoePrints} from "react-icons/fa"
import {BiSwim} from "react-icons/bi"
import axios from 'axios'

import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from "chart.js"

import {Bar} from "react-chartjs-2"
import { useNavigate } from 'react-router-dom'



const UserPage = () => {

  let loggeduser = localStorage.getItem("wellfituser")
  let userDetails= JSON.parse(localStorage.getItem("userDetails") as string) || null;
  // console.log(userDetails)
const navigate=useNavigate()
ChartJS.register(
  BarElement,CategoryScale,LinearScale,Tooltip,Legend
)

const [state,setstate]=useState(false)
let running = JSON.parse(localStorage.getItem("running") as string) || null;
let treadmill = JSON.parse(localStorage.getItem("treadmill") as string) || null;
let weight = JSON.parse(localStorage.getItem("weight") as string) || null;
let hiking = JSON.parse(localStorage.getItem("hiking") as string) || null;
let swimming = JSON.parse(localStorage.getItem("swimming") as string) || null;
let cyclic = JSON.parse(localStorage.getItem("cyclic") as string) || null;

// console.log(running,treadmill,weight,hiking,swimming,cyclic)



let counter: number = parseInt(localStorage.getItem('counter') || '0');

const [steps,setsteps]=useState(counter)



useEffect(()=>{
  setInterval(function() {

    counter++;
   setsteps(counter)
    localStorage.setItem('counter', counter.toString());
  }, 3000); 
},[setsteps])

let colories=Math.floor(counter/3.5294)

let targetforsteps=((counter/6000)*100).toFixed(4)

// let calorietarget: number =((colories/1700)*100).toFixed(4)

// let chartdata: number = Math.floor((calorietarget / 100) * 170);
let calorietarget: number = ((colories/1700)*100);
let chartdata: number = Math.floor((calorietarget / 100) * 170);

// console.log(chartdata,"line 81")
chartdata=chartdata/17
// console.log(chartdata,"line 83")
const handlecycle=()=>{
  localStorage.removeItem("cyclic")
  setstate(!state)
}

const handlehiking=()=>{
localStorage.removeItem("hiking")
setstate(!state)
}

const handleswim=()=>{
localStorage.removeItem("swimming")
setstate(!state)
}

const handletread=()=>{
localStorage.removeItem("treadmill")
setstate(!state)
}


const hanlerun=()=>{
localStorage.removeItem("running")
setstate(!state)
}

const hanleweight=()=>{
localStorage.removeItem("weight")
setstate(!state)
}

const data={
  labels:["Day before Yesterday","Yesterday","Today"],
  datasets:[
    {
      label:"Achieved",
      data:[3,6,chartdata],
      backgroundColor:"aqua",
      borderColor:"black",
      borderWidth:1

    },
    { 
      label:"Target",
      data:[4,6,10],
      backgroundColor:"grey",
      borderColor:"black",
      borderWidth:1

    }
  ]
}

// const options={

// }

    return (
      <div>
        


<div className=" p-10 flex justify-between">

 <div className="p-3">
            <div className="flex justify-center">
              <FaRunning className="text-white text-5xl" />
            </div>
            <h1 className="text-3xl font-bold text-center text-white">Fitness Dashboard</h1>
          </div>
          <div >
          <div className="flex justify-center mt-5">
            <FaRunning className="text-white text-5xl" />
          </div>
          <div onClick={()=>navigate("/exercise")}>
          <h1 className="text-3xl font-bold text-center text-white">Workouts</h1></div>
        </div>
</div>
          <div className="text-white shadow-lg rounded-lg overflow-hidden p-5 mt-5">
            <h1 className="text-xl font-bold">My Profile</h1>
            <div className="flex justify-between mt-5">
              <div className="flex items-center">
                <FaUserCircle className="text-gray-500 text-2xl mr-2" />
                <span className="text-lg font-medium">{loggeduser}</span>
              </div>
              {/* <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Edit</button> */}
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                <FaRuler className="text-white-500 text-2xl mr-2" />
                <span className="text-lg font-medium">Height: {userDetails.height} cm</span>
              </div>
              <div className="flex items-center">
                <FaWeight className="text-white-500 text-2xl mr-2" />
                <span className="text-lg font-medium">Weight: {userDetails.weight} kg</span>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                <FaFire className="text-white-500 text-2xl mr-2" />
                <span className="text-lg font-medium">Calories Burned: 1000 cal</span>
              </div>
              <div className="flex items-center">
                <FaShoePrints className="text-white-500 text-2xl mr-2" />
                <span className="text-lg font-medium">Steps: 8000</span>
              </div>
            </div>
            <div className="mt-5">
            <div className="flex justify-between mt-10">
              <h1 className="text-xl font-bold">My Workouts</h1>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={()=>navigate("/addworkout")} >Edit</button>
            </div>
              <div className="mt-5">

              {running?<div className="flex justify-between items-center border-b-2 border-gray-200 pb-3">
                  <div className="flex items-center">
                    <FaRunning className="text-white-500 text-xl mr-2" />
                    <span className="text-lg font-medium">Morning Run</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white-500 text-lg mr-2">{running.running} km</span>
                    <span className="text-white-500 text-lg">{running.rtime} mins</span>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={hanlerun} >Remove</button>
                  </div>
                </div>:"" }
                



{treadmill?<div className="flex justify-between items-center border-b-2 border-gray-200 pb-3 mt-3">
                  <div className="flex items-center">
                    <FaDumbbell className="text-white-500 text-xl mr-2" />
                    <span className="text-lg font-medium">TreadMill</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-white-500 text-lg mr-2">{treadmill.ttime} mins</span>
                    <span className="text-white-500 text-lg">{treadmill.treadmill} cal</span>
                    <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={handletread} >Remove</button>
                    </div>
            </div>:""}
                



{cyclic?<div className="flex justify-between items-center border-b-2 border-gray-200 pb-3 mt-3">
             <div className="flex items-center">
               <FaBicycle className="text-white-500 text-xl mr-2" />
                <span className="text-lg font-medium">Cycling</span>
               </div>
              <div className="flex items-center">
                <span className="text-white-500 text-lg mr-2">{cyclic.cycling} km</span>
                 <span className="text-white-500 text-lg">{cyclic.ctime} mins</span>
                 <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={handlecycle} >Remove</button>
              </div>
            </div>:""}

            



{weight? <div className="flex justify-between items-center border-b-2 border-gray-200 pb-3 mt-3">
             <div className="flex items-center">
               <GiWeightLiftingUp className="text-white-500 text-xl mr-2" />
                <span className="text-lg font-medium">Weight lift</span>
               </div>
              <div className="flex items-center ">
                <span className="text-white-500 text-lg mr-2">{weight.weight} kg</span>
                 <span className="text-white-500 text-lg">{weight.wtime} mins</span>
                 <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={hanleweight} >Remove</button>
              </div>
            </div>:""}

           


{hiking?<div className="flex justify-between items-center border-b-2 border-gray-200 pb-3 mt-3">
             <div className="flex items-center">
               <FaHiking className="text-white-500 text-xl mr-2" />
                <span className="text-lg font-medium">Hiking</span>
               </div>
              <div className="flex items-center">
                <span className="text-white-500 text-lg mr-2">{hiking.hiking} km</span>
                 <span className="text-white-500 text-lg">{hiking.htime} mins</span>
                 <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={handlehiking} >Remove</button>
              </div>
            </div>:""}

            
{swimming?<div className="flex justify-between items-center border-b-2 border-white-200 pb-3 mt-3">
             <div className="flex items-center">
               <BiSwim className="text-white-500 text-xl mr-2" />
                <span className="text-lg font-medium">Swimming</span>
               </div>
              <div className="flex items-center">
                <span className="text-white-500 text-lg mr-2">{swimming.swimming} sprint</span>
                 <span className="text-white-500 text-lg">{swimming.stime} mins</span>
                 <button className="bg-red-500 text-white px-3 py-1 rounded-md" onClick={handleswim} >Remove</button>
              </div>
            </div>
:""}
            
          </div>
        </div>
      </div>
      <div className="text-white mx-auto flex justify-between border-2 border-white p-5 mt-5">
          <div>           
            <h1 className="text-3xl">Steps</h1>
            <span className="text-2xl">{counter}</span>
            <span>/6000</span>
          </div>
          <div>
            <h1 className="text-2xl">Target Achieved</h1>
            <h1 className="text-2xl">{targetforsteps} %</h1>
          </div>
        </div>
        <div className="text-white mx-auto flex justify-between border-2 border-white p-5 mt-2">
          <div className="text-left">           
            <h1 className="text-3xl">Calories Burned</h1>
            <span className="text-2xl">{colories}</span>
            <span>/1700</span>
          </div>
          <div>
            <h1 className="text-2xl ">Target Achieved</h1>
            <h1 className="text-2xl">{calorietarget} %</h1>
          </div>
        </div>

        <div className="mt-8 text-center text-white text-2xl">Visualise Your Progress</div>
<div className="w-4/5 mx-auto mt-5">
  <Bar
    data={data}
  ></Bar>
</div>

      </div>
    );
  };
  
  

export default UserPage


import React from 'react'
import {FaRunning} from "react-icons/fa"
import {FaWalking} from "react-icons/fa"
import {BiCycling} from "react-icons/bi"


import {FaUserCircle} from "react-icons/fa"
import {FaRuler} from "react-icons/fa"
import {FaWeight} from "react-icons/fa"
import {FaBicycle} from "react-icons/fa"
import {FaDumbbell} from "react-icons/fa"
import {FaFire} from "react-icons/fa"
import {FaShoePrints} from "react-icons/fa"
import {BiSwim} from "react-icons/bi"
const UserPage = () => {
    return (
      <div>
        <div className=" bg-yellow-300 p-10 border-2 border-black">
          <div className="flex justify-center">
            <FaRunning className="text-yellow-900 text-5xl" />
          </div>
          <h1 className="text-3xl font-bold text-center text-yellow-900">Workouts</h1>
        </div>



 <div className="bg-blue-500 p-10">
            <div className="flex justify-center">
              <FaRunning className="text-white text-5xl" />
            </div>
            <h1 className="text-3xl font-bold text-center text-white">Fitness Dashboard</h1>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-5 mt-5">
            <h1 className="text-xl font-bold">My Profile</h1>
            <div className="flex justify-between mt-5">
              <div className="flex items-center">
                <FaUserCircle className="text-gray-500 text-2xl mr-2" />
                <span className="text-lg font-medium">John Doe</span>
              </div>
              <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Edit</button>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                <FaRuler className="text-gray-500 text-2xl mr-2" />
                <span className="text-lg font-medium">Height: 175 cm</span>
              </div>
              <div className="flex items-center">
                <FaWeight className="text-gray-500 text-2xl mr-2" />
                <span className="text-lg font-medium">Weight: 75 kg</span>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex items-center">
                <FaFire className="text-gray-500 text-2xl mr-2" />
                <span className="text-lg font-medium">Calories Burned: 1000 cal</span>
              </div>
              <div className="flex items-center">
                <FaShoePrints className="text-gray-500 text-2xl mr-2" />
                <span className="text-lg font-medium">Steps: 8000</span>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-xl font-bold">My Workouts</h1>
              <div className="mt-5">
                <div className="flex justify-between items-center border-b-2 border-gray-200 pb-3">
                  <div className="flex items-center">
                    <FaRunning className="text-gray-500 text-xl mr-2" />
                    <span className="text-lg font-medium">Morning Run</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-lg mr-2">3.5 km</span>
                    <span className="text-gray-500 text-lg">25 mins</span>
                  </div>
                </div>
                <div className="flex justify-between items-center border-b-2 border-gray-200 pb-3 mt-3">
                  <div className="flex items-center">
                    <FaDumbbell className="text-gray-500 text-xl mr-2" />
                    <span className="text-lg font-medium">Strength Training</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-500 text-lg mr-2">60 mins</span>
                    <span className="text-gray-500 text-lg">1000 cal</span>

                    </div>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-200 pb-3 mt-3">
             <div className="flex items-center">
               <FaBicycle className="text-gray-500 text-xl mr-2" />
                <span className="text-lg font-medium">Cycling</span>
               </div>
              <div className="flex items-center">
                <span className="text-gray-500 text-lg mr-2">20 km</span>
                 <span className="text-gray-500 text-lg">45 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex justify-between border-2 border-black p-5 mt-5">
          <div>           
            <h1 className="text-3xl">Steps</h1>
            <span className="text-2xl">3085</span>
            <span>/6000</span>
          </div>
          <div>
            <h1 className="text-2xl">Target Achieved</h1>
            <h1 className="text-2xl">51%</h1>
          </div>
        </div>
        <div className=" mx-auto flex justify-between border-2 border-black p-5 mt-2">
          <div className="text-left">           
            <h1 className="text-3xl">Calories Burned</h1>
            <span className="text-2xl">900</span>
            <span>/1700</span>
          </div>
          <div>
            <h1 className="text-2xl ">Target Achieved</h1>
            <h1 className="text-2xl">51%</h1>
          </div>
        </div>
      </div>
    );
  };
  
  

export default UserPage


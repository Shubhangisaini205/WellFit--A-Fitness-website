import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bot from "../images/chatbot.png"
import { useNavigate } from 'react-router-dom'
const Addworkout = () => {
  const navigate = useNavigate()

  const showToastAddedMessage = () => {
    toast.success('Excerise Added Successfully!', {
      position: toast.POSITION.TOP_CENTER
    });
  };
  const showToastRemoveMessage = () => {
    toast.success('Excerise Removed Successfully!', {
      position: toast.POSITION.TOP_CENTER
    });
  }
  const [running, setrunning] = useState(0)
  const [rtime, setrtime] = useState(0)
  const [cycling, setcyclic] = useState(0)
  const [ctime, setctime] = useState(0)
  const [swimming, setswimming] = useState(0)
  const [stime, setstime] = useState(0)
  const [treadmill, settreadmill] = useState(0)
  const [ttime, setttime] = useState(0)
  const [hiking, sethiking] = useState(0)
  const [htime, sethtime] = useState(0)
  const [weight, setweight] = useState(0)
  const [wtime, setwtime] = useState(0)

  const [state, setstate] = useState(false)

  let running1 = JSON.parse(localStorage.getItem("running") as string) || null;
  let treadmill1 = JSON.parse(localStorage.getItem("treadmill") as string) || null;
  let weight1 = JSON.parse(localStorage.getItem("weight") as string) || null;
  let hiking1 = JSON.parse(localStorage.getItem("hiking") as string) || null;
  let swimming1 = JSON.parse(localStorage.getItem("swimming") as string) || null;
  let cyclic1 = JSON.parse(localStorage.getItem("cyclic") as string) || null;


  const handlehiking1 = () => {
    localStorage.removeItem("hiking")
    setstate(!state)
    // alert("Excerise Removed Successfully ")
    showToastRemoveMessage()
  }

  const handlecycle = () => {
    localStorage.removeItem("cyclic")
    setstate(!state)
    showToastRemoveMessage()
  }

  const handleswim = () => {
    localStorage.removeItem("swimming")
    setstate(!state)
    showToastRemoveMessage()
  }

  const handletread = () => {
    localStorage.removeItem("treadmill")
    setstate(!state)
    showToastRemoveMessage()
  }


  const hanlerun = () => {
    localStorage.removeItem("running")
    setstate(!state)
    showToastRemoveMessage()
  }

  const hanleweight = () => {
    localStorage.removeItem("weight")
    setstate(!state)
    showToastRemoveMessage()
  }





  const handlecylic = () => {
    localStorage.removeItem("cylic")
    let ob = {
      cycling, ctime
    }

    localStorage.setItem("cyclic", JSON.stringify(ob))
    setstate(!state)
    showToastAddedMessage()
  }

  const handlehiking = () => {

    localStorage.removeItem("cylic")
    let ob = {
      hiking, htime
    }

    localStorage.setItem("hiking", JSON.stringify(ob))
    setstate(!state)
    showToastAddedMessage()
  }

  const handlerunning = () => {
    localStorage.removeItem("cylic")
    let ob = {
      running, rtime
    }

    localStorage.setItem("running", JSON.stringify(ob))
    setstate(!state)
    showToastAddedMessage()

  }


  const handleswimming = () => {
    localStorage.removeItem("cylic")
    let ob = {
      swimming, stime
    }

    localStorage.setItem("swimming", JSON.stringify(ob))
    setstate(!state)
    showToastAddedMessage()
  }

  const handletreadmill = () => {
    localStorage.removeItem("cylic")
    let ob = {
      treadmill, ttime
    }
    localStorage.setItem("treadmill", JSON.stringify(ob))
    setstate(!state)
    showToastAddedMessage()

  }

  const handleweight = () => {

    localStorage.removeItem("cylic")

    let ob = {
      weight, wtime
    }

    localStorage.setItem("weight", JSON.stringify(ob))
    setstate(!state)
    showToastAddedMessage()

  }


  return (
    <div >
      <div className=" p-8 flex flex-wrap md:flex-nowrap justify-between">
        <div className="mt-8">
          <img src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" className="w-full lg:max-w-2xl mx-auto" />
        </div>
        <div className="w-full md:w-1/2 md:pr-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Add Workout of Your Choice</h1>

          {running1 ?
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Running</h2>
              <button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-6/6" onClick={hanlerun}>Remove</button>
            </div> :
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Running</h2>
              <div className="flex flex-wrap gap-2">
                <input type="number" placeholder='Enter time in minutes' onChange={(e) => setrunning(Number(e.target.value))} className="border text-black border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3" />
                <input type="number" placeholder='Enter distance in km' onChange={(e) => setrtime(Number(e.target.value))} className="border  border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />
                <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handlerunning}>ADD</button>

              </div>
            </div>
          }




          {cyclic1 ?
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Cycling</h2>
              <button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-6/6" onClick={handlecycle}>Remove</button>
            </div> :
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Cycling</h2>
              <div className="flex flex-wrap gap-2">
                <input type="number" placeholder='Enter time in minutes' onChange={(e) => setcyclic(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />

                <input type="number" placeholder='Enter distance in km' onChange={(e) => setctime(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />

                <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handlecylic}>ADD</button>

              </div>
            </div>
          }



          {swimming1 ?
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Swimming</h2>
              <button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-6/6" onClick={handleswim} >Remove</button>
            </div> :
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Swimming</h2>
              <div className="flex flex-wrap gap-2">
                <input type="number" placeholder='Enter time in minutes' onChange={(e) => setswimming(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />
                <input type="number" placeholder='Enter Number of Sprints' onChange={(e) => setctime(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />
                <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handleswimming} >ADD</button>
              </div>
            </div>

          }




          {treadmill1 ? <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Treadmill</h2>
            <button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-6/6" onClick={handletread}>Remove</button>
          </div> :
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Treadmill</h2>
              <div className="flex flex-wrap gap-2">
                <input type="number" placeholder='Enter time in minutes' onChange={(e) => settreadmill(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />

                <input type="number" placeholder='Enter distance in km' onChange={(e) => setttime(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />

                <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handletreadmill}>ADD</button>

              </div>
            </div>
          }



          {hiking1 ? <div className="mb-8">
            <h1 className="text-xl font-bold mb-4">Hiking</h1>
            <button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-6/6" onClick={handlehiking1}>Remove</button>

          </div> : <div className="mb-8">
            <h1 className="text-xl font-bold mb-4">Hiking</h1>
            <div className="flex flex-wrap gap-2">
              <input type="number" placeholder="Enter time in minutes" onChange={(e) => sethiking(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />
              <input type="number" placeholder="Enter distance in km" onChange={(e) => sethiking(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />
              <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handlehiking}>ADD</button>
            </div>
          </div>
          }


          {!weight1 ? <div className="mb-8">
            <h1 className="text-xl font-bold mb-4">Weight Machines</h1>
            <div className="flex flex-wrap gap-2">
              <input type="number" placeholder="Enter time in minutes" onChange={(e) => setweight(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />
              <input type="number" placeholder="Enter weight in kg" onChange={(e) => setwtime(Number(e.target.value))} className="border border-gray-400 rounded px-4 py-2 w-1/2 md:w-1/3  text-black" />
              <button className="bg-black text-white rounded px-4 py-2 w-1/2 md:w-1/6" onClick={handleweight}>ADD</button>
            </div>
          </div>
            :
            <div className="mb-8">
              <h1 className="text-xl font-bold mb-4">Weight Machines</h1>
              <button className="bg-red-500 text-white rounded px-4 py-2 w-1/2 md:w-6/6" onClick={hanleweight}>Remove</button>
            </div>
          }
        </div>

      </div>
      <ToastContainer autoClose={2000} />
      <div onClick={() => navigate("/expert")}>
        <img style={{ float: 'right', width: "87px", fontSize: "70px", marginRight: "-18%", position: "absolute", top: "70%", left: "93.3%" }} src={bot} />
      </div>
    </div>
  )
}

export default Addworkout
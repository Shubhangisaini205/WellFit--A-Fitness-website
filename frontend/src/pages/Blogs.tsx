import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blogs = () => {
    return (
        <div>
            <div className='text-white w-4/5  m-auto'>
                {/* 1st blog */}
                <div className='flex m-5 pb-5 ' style={{ borderBottom: "1px solid gray" }}>
                    <div className='m-10'>
                        <img className='rounded-lg ' src="https://media-www.sqspcdn.com/images/pages/tour/member-areas/engage/integrate-750w.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl mb-5'>Start accurately tracking body measurements to highlight your progress</h1>
                        <p>When it comes to tracking body measurements, the scale isn’t the only tool to monitor your weight loss or fitness progress. Following your body measurements is a simple and quite motivating strategy that allows you to note when you lose fat or gain muscle

                        </p>
                        <button>Read More...</button>

                    </div>

                </div>

                {/* 2nd blog */}
                <div className='flex m-5 pb-5 ' style={{ borderBottom: "1px solid gray" }}>

                    <div>
                        <h1 className='font-bold text-3xl mb-5'>Start accurately tracking body measurements to highlight your progress</h1>
                        <p>When it comes to tracking body measurements, the scale isn’t the only tool to monitor your weight loss or fitness progress. Following your body measurements is a simple and quite motivating strategy that allows you to note when you lose fat or gain muscle

                        </p>
                        <button>Read More...</button>

                    </div>
                    <div className='m-10'>
                        <img className='rounded-lg ' src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg" alt="" />
                    </div>

                </div>

                {/* 3rd blog */}
                <div className='flex m-5 pb-5 ' style={{ borderBottom: "1px solid gray" }}>
                    <div className='m-10'>
                        <img className='rounded-lg ' src="https://media-www.sqspcdn.com/images/pages/tour/member-areas/engage/integrate-750w.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-3xl mb-5'>Start accurately tracking body measurements to highlight your progress</h1>
                        <p>When it comes to tracking body measurements, the scale isn’t the only tool to monitor your weight loss or fitness progress. Following your body measurements is a simple and quite motivating strategy that allows you to note when you lose fat or gain muscle

                        </p>
                        <button>Read More...</button>

                    </div>

                </div>
                {/* 4th blog */}

                <div className='flex m-5 pb-5 ' style={{ borderBottom: "1px solid gray" }}>

                    <div>
                        <h1 className='font-bold text-3xl mb-5'>Start accurately tracking body measurements to highlight your progress</h1>
                        <p>When it comes to tracking body measurements, the scale isn’t the only tool to monitor your weight loss or fitness progress. Following your body measurements is a simple and quite motivating strategy that allows you to note when you lose fat or gain muscle

                        </p>
                        <button>Read More...</button>

                    </div>
                    <div className='m-10'>
                        <img className='rounded-lg ' src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg" alt="" />
                    </div>

                </div>
                <button className='float-right bg-white text-black pr-5 pl-5 pt-2 pb-2 rounded-lg font-bold '>
                    Next
                </button>

            </div>

        </div>
    )
}

export default Blogs

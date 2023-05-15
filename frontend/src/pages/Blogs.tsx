import React, { useState } from 'react'

import bot from "../images/chatbot.png"
import { useNavigate } from 'react-router-dom'

const Blogs = () => {
    const navigate = useNavigate()
    const [next, setNext] = useState<boolean>(false);
    function myFunction(): void {
        const dots: HTMLElement | null = document.getElementById("dots");
        const moreText: HTMLElement | null = document.getElementById("more");
        const btnText: HTMLElement | null = document.getElementById("myBtn");

        if (dots && moreText && btnText) {
            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less";
                moreText.style.display = "inline";
            }
        }
    }

    return (
        <div>
            <div className='text-white w-4/5 m-auto'>
                {/* 1st blog */}
                <div className='flex flex-col md:flex-row m-5 pb-5 border-b-2 border-gray-300'>
                    <div className='md:w-2/5'>
                        <img className='rounded-lg' src="https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='md:w-3/5 md:pl-10'>
                        <h1 className='font-bold text-3xl mb-5'>Start accurately tracking body measurements to highlight your progress</h1>
                        <p>Eating a good breakfast is one of the foundational elements of long-term weight loss. This is mainly because eating food an hour or two after waking up helps maintain good gut and metabolic health.<span id="dots">...</span><span id="more">Your metabolism plays a crucial role in sustained weight loss. So, making sure that it functions smoothly is one of the simplest yet most effective ways to shed unwanted weight over time. Plus, the right meal will keep you fuller for longer throughout the day and encourage you to resist unnecessary snacking.</span></p>
                        <button onClick={myFunction} id="myBtn">Read more</button>
                    </div>
                </div>

                {/* 2nd blog */}
                <div className='flex flex-col-reverse md:flex-row m-5 pb-5 border-b-2 border-gray-300'>
                    <div className='md:w-3/5 md:pr-10'>
                        <h1 className='font-bold text-3xl mb-5'>How Weight Loss Can Improve Your Mental Health</h1>
                        <p>When it comes to tracking body measurements, the scale isn’t the only tool to monitor your weight loss or fitness progress. Following your body measurements is a simple and quite motivating strategy that allows you to note when you lose fat or gain muscle.</p>
                        <button>Read More...</button>
                    </div>
                    <div className='md:w-2/5'>
                        <img className='rounded-lg' src="https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>

                {/* 3rd blog */}
                <div className='flex flex-col md:flex-row m-5 pb-5 border-b-2 border-gray-300'>
                    <div className='md:w-2/5'>
                        <img className='rounded-lg' src="https://images.pexels.com/photos/6605299/pexels-photo-6605299.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                    <div className='md:w-3/5 md:pl-10'>
                        <h1 className='font-bold text-3xl mb-5'>How To Have A Healthy Roast Dinner</h1>
                        <p>There is nothing better than a Sunday roast is there? All the family together, sat round, having a chat, enjoying a home-cooked meal. But how you still enjoy yourself when you are counting your calories and trying to eat healthily. After all, a big plateful of meat, roast potatoes, vegetables and maybe stuffing or Yorkshire pudding can mount up when you arecounting the calories. Do you know that a full Sunday roast with all the trimmings can add up to 850 calories? Maybe more if you are generous with your portion sizes. And that’s before pudding!</p>
                        <button>Read More...</button>
                    </div>
                </div>

                {/* 4th blog */}
                <div className='flex flex-col-reverse md:flex-row m-5 pb-5 border-b-2 border-gray-300'>
                    <div className='md:w-3/5 md:pr-10'>
                        <h1 className='font-bold text-3xl mb-5'>8 Delicious Breakfast Foods to Support Your Weight Loss Journey</h1>
                        <p>Eggs are a classic breakfast food that are easy to prepare in a number of creative ways for a delicious yet nutritionally balanced breakfast. Rich in iron, vitamins, carotenoids, healthy fats, and protein, the humble egg is a nutrient powerhouse that makes an excellent base for everyday breakfast. Boiled or scrambled are the healthiest ways to prepare eggs (as opposed to fried, which adds unnecessary oil to the dish). Pop them onto a slice of wholegrain toast, inside a breakfast wrap, or simply eat them on their own for a simple, protein-rich snack.</p>
                        <button>Read More...</button>
                    </div>
                    <div className='md:w-2/5'>
                        <img className='rounded-lg' src="https://images.pexels.com/photos/5645090/pexels-photo-5645090.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>
            </div>

            <div onClick={() => navigate("/expert")}>
                <img style={{ float: 'right', width: "87px", fontSize: "70px", marginRight: "-18%", position: "fixed", top: "70%", left: "93.3%" }} src={bot} />
            </div>
        </div>
    )

}

export default Blogs

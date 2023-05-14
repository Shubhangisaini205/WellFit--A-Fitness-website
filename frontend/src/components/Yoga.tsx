import React, { useEffect } from 'react'
import Pan1 from "../images/Pan1.mp4"
import Pan2 from "../images/pan2.mp4"
import Pan3 from "../images/pan3.mp4"
import Pan4 from "../images/pan4.mp4"


import * as Aos from "aos";  
import "aos/dist/aos.css";



 
const Yoga = () => {

    useEffect(()=>{ 
        Aos.init({duration:1000})
    },[])

    return (
        <div>
<div className="flex flex-col lg:flex-row items-center justify-between mx-4 lg:mx-10 lg:my-20">
    <video className="w-full lg:w-1/3 lg:mr-8"  controls data-aos="fade-right">
        <source src={Pan1} />
    </video>
    <div className="w-full lg:w-2/3 lg:text-left text-center mt-8 lg:mt-0 text-white" data-aos="fade-left">
        <h2 className="text-3xl lg:text-5xl font-bold mb-8 lg:mb-12 text-left">Do Not Make Excuses</h2>
        <p className="text-lg lg:text-2xl mb-8 lg:pr-16">Exercise plays a crucial role in enhancing strength, flexibility, and cardiovascular fitness, which are essential for daily activities and maintaining independence. Moreover, it contributes to improved mental well-being, reducing stress and anxiety while increasing self-esteem and a sense of accomplishment.</p>
        <p className="text-lg lg:text-2xl">These determined individuals often seek out communities and support groups that understand their unique challenges and provide encouragement. Being surrounded by like-minded individuals fosters a sense of belonging and motivation to push through obstacles.</p>
    </div>
</div>


<div className="flex flex-wrap justify-around my-10 mx-4 lg:mx-auto">
  <div className="w-full md:w-1/2 lg:w-5/12 text-white" data-aos="fade-right">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-5 md:mt-0 mb-8 md:mb-10 lg:mb-12 text-left">Stretching is Compulsory</h2>
    <p className="text-lg md:text-xl lg:text-2xl mb-6 lg:mb-10 leading-8 lg:leading-9">Regular stretching exercises help to increase the flexibility of muscles and joints. It allows muscles to extend and contract efficiently, resulting in improved posture, mobility, and ease of movement. Increased flexibility also reduces the risk of muscle strains and injuries during physical activities.</p>
    <p className="text-lg md:text-xl lg:text-2xl leading-8 lg:leading-9">Stretching helps to prevent injuries by increasing the elasticity and flexibility of muscles and tendons. When muscles are more supple, they are less likely to strain or tear during sudden movements or strenuous activities. Incorporating stretching into regular exercise routines can help maintain muscle balance, improve joint stability, and reduce the risk of injuries.</p>
  </div>
  <div className="w-full md:w-1/2 lg:w-5/12" data-aos="fade-left">
    <video className="w-full" controls >
      <source src={Pan2} />
    </video>
  </div>
</div>


<div className="flex flex-col md:flex-row justify-around items-center md:items-stretch px-4 md:px-12 lg:px-24 py-12 md:py-24">
  <video className="w-full md:w-1/3 lg:w-1/4 mr-20" controls  data-aos="fade-right">
    <source src={Pan3} />
  </video>
  <div className="w-full md:w-2/3 lg:w-3/4 md:text-left text-center text-white my-8 md:my-0" data-aos="fade-left">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 md:mb-12 md:text-left">Importance Of Meditation</h2>
    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 md:mb-12">
      Meditation is a practice that has been embraced for centuries, and its importance continues to grow in our modern world. It involves training the mind to focus and redirect thoughts, ultimately promoting mental clarity, emotional well-being, and inner peace.
    </p>
    <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
      One of the significant benefits of meditation is its positive impact on mental health. Regular practice has been shown to reduce symptoms of depression and anxiety, improve mood, and enhance overall emotional well-being. By observing thoughts and emotions without judgment, individuals develop a greater understanding of their inner workings and can respond to challenging situations with greater equanimity.
    </p>
  </div>
</div>


<div className="flex flex-wrap justify-around my-10 mx-4 lg:mx-auto">
  <div className="w-full md:w-1/2 lg:w-5/12 text-white" data-aos="fade-right">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-5 md:mt-0 mb-8 md:mb-10 lg:mb-12 text-left">Strength</h2>
    <p className="text-lg md:text-xl lg:text-2xl mb-6 lg:mb-10 leading-8 lg:leading-9">
      Strength is essential for performing daily activities with ease and efficiency. From lifting objects and carrying groceries to climbing stairs and maintaining balance, having adequate strength ensures that we can meet the physical demands of daily life and maintain independence.
    </p>
    <p className="text-lg md:text-xl lg:text-2xl leading-8 lg:leading-9">
      Strength training has numerous psychological benefits. It can increase self-confidence, improve body image, and boost self-esteem. Regular exercise releases endorphins, the "feel-good" hormones, which promote positive mental health and reduce symptoms of anxiety and depression.
    </p>
  </div>
  <div className="w-full md:w-1/2 lg:w-5/12" data-aos="fade-left">
    <video controls  className="w-full">
      <source src={Pan4} />
    </video>
  </div>
</div>

            <h1 style={{margin:"5%" ,fontSize: "3rem", fontWeight:"800",color:"white" }}>Videos That Can Help</h1>

            <div className="grid grid-cols-2 gap-4 m-5">
  <iframe data-aos="fade-right" className="w-full h-80" src="https://www.youtube.com/embed/sOuKeVuej9E" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

  <iframe data-aos="fade-left" className="w-full h-80" src="https://www.youtube.com/embed/DulNz2CkoHI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

  <iframe data-aos="fade-right" className="w-full h-80" src="https://www.youtube.com/embed/3XVGDYuPay4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

  <iframe data-aos="fade-left" className="w-full h-80" src="https://www.youtube.com/embed/sSiA25XlG_A" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
</div>





        </div>
    )
}

export default Yoga
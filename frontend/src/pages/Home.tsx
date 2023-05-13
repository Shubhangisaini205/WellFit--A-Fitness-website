import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'



function Home() {
  return (
    <div>
  <Navbar/>
  <Banner/>
 
    <div className='flex w-4/5 m-auto gap-5'>
      <div>
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png" alt="" />
        <div className='text-white'>
          <h1 className='text-xl font-bold'>Unlimited access to</h1>
         
            <li>At-center group classes</li>
            <li>All ELITE & PRO gyms</li>
            <li>At-home live workouts</li>
          
        </div>
      </div>
      <div className='text-white'>
        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png" alt="" />
        <div>
          <h1 className='text-xl font-bold'>Unlimited access to</h1>
        
            <li>At-center group classes</li>
            <li>All ELITE & PRO gyms</li>
            <li>At-home live workouts</li>
        
        </div>
      </div>
      <div className='text-white'>
       <div  >
       <img  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png" alt="" />
        {/* <h2 className='sticky'>FitZone Pro</h2> */}
       </div>
        <div>
          <h1 className='text-xl font-bold'>Unlimited access to</h1>
          
            <li>At-center group classes</li>
            <li>All ELITE & PRO gyms</li>
            <li>At-home live workouts</li>
       
        </div>
      </div>
      
    </div>
    <div className='text-white text-center m-20'>
      <h1 className='font-bold text-2xl m-4'>Discover your nutrition</h1>
      <p className='m-4'>Cronometer encourages you to not just count your calories but to focus on your nutrition as a whole.</p>
    <div className='flex ' style={{justifyContent:"space-around"}}>
      <div  className='w-1/2 '>
        <img className='w-2/3 block m-auto' src="https://cdn1.cronometer.com/webflow/crono-hero-img-22x-1-p-1600.png" alt="" />
        <p>Fitness Equipment and Healthy Food Isolated on White </p>
      </div>
      <div  className='w-1/2 '>
        <img className='w-2/3 block m-auto' src="https://cdn1.cronometer.com/webflow/crono-hero-img-22x-1-p-1600.png" alt="" />
        <p>achieve your diet and fitness resolutions for 2022</p>
      </div>
      <div  className='w-1/2 '>
        <img className='w-2/3 block m-auto' src="https://cdn1.cronometer.com/webflow/crono-hero-img-22x-1-p-1600.png" alt="" />
        <p>It is health that is real wealth and not pieces of gold and silver.</p>
      </div>
      <div >
        
      </div>
    </div>
    </div>
<div>
  <h1 className='text-2xl m-4 text-white font-bold text-center'>Sync with apps and device</h1>
  <div className='w-full m-auto'>
    <img className='w-10/12 m-auto' src="https://cdn1.cronometer.com/webflow/cronometer-devices-3-p-1080.png" alt="" />
  </div>
</div>
{/* review */}
<div className='w-10/12  m-auto mt-10'>
  <h1 className='text-2xl text-white text-center font-bold'>Customer Reviews</h1>
  <div className='flex m-10 '>
    <div className='mr-10' >
      <img className='rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVXp-Uzjucv7jeesIrr5a-aRhYDRxmvN5M4oWU-wEkw&usqp=CAU&ec=48600112" alt="" />
    </div>
    <div>
      <h1 className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque, molestias autem eaque eligendi quasi libero facere, beatae nobis quo labore architecto. Optio eaque odio, possimus ex animi fuga aperiam. Totam natus minus voluptas saepe error amet distinctio provident? Facilis sunt deserunt aut ipsum quam, atque sit molestiae eveniet quia.</h1>
    </div>
  </div>
  <div className='flex m-10 '>
    
    <div>
      <h1 className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque, molestias autem eaque eligendi quasi libero facere, beatae nobis quo labore architecto. Optio eaque odio, possimus ex animi fuga aperiam. Totam natus minus voluptas saepe error amet distinctio provident? Facilis sunt deserunt aut ipsum quam, atque sit molestiae eveniet quia.</h1>
    </div>
    <div >
      <img className='rounded-full' src="https://www.shutterstock.com/image-vector/vector-circle-avatar-icon-man-260nw-391090273.jpg" alt="" />
    </div>

  </div>
  <div className='flex  m-10'>
    <div className='mr-10'  >
      <img className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tszMw5iX_JtnX0UfKSftyIfMck3nsAOMBDQII6AXzQ&usqp=CAU&ec=48600112" alt="" />
    </div>
    <div>
      <h1 className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias cumque, molestias autem eaque eligendi quasi libero facere, beatae nobis quo labore architecto. Optio eaque odio, possimus ex animi fuga aperiam. Totam natus minus voluptas saepe error amet distinctio provident? Facilis sunt deserunt aut ipsum quam, atque sit molestiae eveniet quia.</h1>
    </div>
  </div>
</div>

<Footer/>
    </div>
  )
}

export default Home
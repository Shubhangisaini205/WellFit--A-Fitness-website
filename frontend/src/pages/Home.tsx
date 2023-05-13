import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'



function Home() {
  return (
    <div>
  {/* <Navbar/> */}
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

/*
// import React from "react";

// const Signup: React.FC = () => {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div
//                 className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
//             >
//                 /* <!-- left side --> */
//                 <div className="flex flex-col justify-center p-8 md:p-14">
//                     <span className="mb-3 text-4xl font-bold">Welcome back</span>
//                     <span className="font-light text-gray-400 mb-8">
//                         Welcom back! Please enter your details
//                     </span>
//                     <div className="py-4">
//                         <span className="mb-2 text-md">Email</span>
//                         <input
//                             type="text"
//                             className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
//                             name="email"
//                             id="email"
//                         />
//                     </div>
//                     <div className="py-4">
//                         <span className="mb-2 text-md">Password</span>
//                         <input
//                             type="password"
//                             name="pass"
//                             id="pass"
//                             className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
//                         />
//                     </div>
//                     <div className="flex justify-between w-full py-4">
//                         <div className="mr-24">
//                             <input type="checkbox" name="ch" id="ch" className="mr-2" />
//                             <span className="text-md">Remember for 30 days</span>
//                         </div>
//                         <span className="font-bold text-md">Forgot password</span>
//                     </div>
//                     <button
//                         className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
//                     >
//                         Sign in
//                     </button>
//                     <button
//                         className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
//                     >
//                         <img src="google.svg" alt="img" className="w-6 h-6 inline mr-2" />
//                         Sign in with Google
//                     </button>
//                     <div className="text-center text-gray-400">
//                         Dont'have an account?
//                         <span className="font-bold text-black">Sign up for free</span>
//                     </div>
//                 </div>
//                 {/* <!-- right side --> */}
//                 <div className="relative">
//                     <img
//                         src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzcyUyMG1wZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//                         alt="img"
//                         className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
//                     />
//                     {/* <!-- text on image  --> */}
//                     <div
//                         className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block"
//                     >
//                         <span className="text-white text-xl"
//                         >We've been uesing Untitle to kick"<br />start every new project
//                             and can't <br />imagine working without it."
//                         </span>
//                     </div>
//                 </div>
//             </div>


// </div>
//             );
// };

//             export default Signup
           
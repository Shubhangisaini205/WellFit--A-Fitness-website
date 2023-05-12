import React, { useEffect, useState } from 'react'
import Img5 from "../Assests/Img5.jpg"
import useDebounce from "../hook/useDebounce"
import NutritientsIntake from './NutritientsIntake'
interface searchList {
    calories: number
    carbohydrates_total_g: number
    cholesterol_mg: number
    fat_saturated_g: number
    fat_total_g: number
    fiber_g: number
    name: string
    potassium_mg: number
    protein_g: number
    serving_size_g: number
    sodium_mg: number
    sugar_g: number
}
function Nutriton() {
    const [Query, setQuery] = useState("");
    const [list, setList] = useState<searchList[]>([]);
    const searchResults = useDebounce(Query, 1000)
    useEffect(() => {
        fetch(`https://api.api-ninjas.com/v1/nutrition?query=${searchResults}`, {
            method: "GET",
            headers: {
                "Content-type": "applocation/json",
                "X-Api-Key": "BVtSLKPpjfvzm0tB4e1JTw==s152m7qlTgrzSoQM"
            }
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
                setList(res)
            })
    }, [searchResults])
    console.log("list", list)

    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
                    <defs>
                        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">WellFit </p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nutrition flow</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">A well-balanced diet provides all of the: energy you need to keep active throughout the day. nutrients you need for growth and repair, helping you to stay strong and healthy and help to prevent diet-related illness, such as some cancers.</p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src={Img5} alt="" />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <h1 className="mt-16 text-2xl font-bold mb-4 tracking-tight text-gray-900">Foods To Add To Your Gym Diet Plan</h1>
                            <p className='text-base font-semibold leading-7 '>There are mainly three macronutrients that play a crucial role in maintaining bodily functions and even promote changes in strength and composition – they are carbs, proteins, and fats and it is essential that we consume all three macros in ample quantities to optimize progress accordingly.</p>
                            <p className='text-base font-semibold leading-7 '>Let’s see what are the vital nutrients you must include in your gym diet plan for muscle gain and weight loss.</p>

                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    👉
                                    <span className='text-base font-semibold leading-7 '><strong className="font-semibold text-xl text-gray-900">Carbohydrates{" "}≫</strong> {" "}Firstly, carbohydrates are the primary source of energy for the body and therefore play the most substantial role in fueling exercise. There are two different types of carbohydrates i.e. complex and simple. The names give an indication of the time taken to digest complex carbs that take a longer time period to digest than simple carbs.
                                        <br />
                                        Furthermore, complex carbohydrates provide the body with prolonged slow-release of energy and have a great nutritional benefit. While simple carbohydrates provide the body with a short-term, fast releasing energy, they contain little nutritional value.</span>

                                </li>
                                <li className="flex gap-x-3">
                                    👉
                                    <span className='text-base font-semibold leading-7 '><strong className="font-semibold text-xl text-gray-900">Protein{" "}≫</strong> {" "}

                                        Specifically, the majority of gym-goers will be well aware that consuming protein is important. Likewise, the reason why protein is so important is because it plays a key role in recovery and repair. A gym diet plan must include protein. During exercise, the body is exposed to strains and stresses.
                                        <br />
                                        This cause damage to occur to the muscles at a microscopic level. So, in order to repair the damage, protein is needed. Without it, recovery periods will be extended and chronic fatigue may become a factor.
                                        <br />
                                        Protein is found most highly in animal produce such as lean meats, eggs & dairy. Similarly, it can also be found in smaller quantities in foods such as seeds, nuts, legumes, beans, and soy.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    👉
                                    <span className='text-base font-semibold leading-7 '><strong className="font-semibold text-xl text-gray-900">Fats{" "}≫</strong> {" "} Fats are often incorrectly seen as the primary reason for fat gain. However, fats are not responsible for this and actually play a key role in the absorption and transport of nutrients. In addition, they can have a positive impact on heart health and hormone production.
                                        <br />
                                        While fats can have a positive impact on health, there are several types of fat – some of which are of greater benefit than others in gym diet plans. Recently studies have shown that saturated fats are not as harmful as once believed, you should mainly focus primarily on unsaturated fats.
                                        <br />
                                        Examples of unsaturated fat foods include avocados, seeds, nuts, peanut butter, fish (salmon, tuna, mackerel), oils (olive, peanut), and soy products that you can include in your gym diet plan.
                                    </span>
                                </li>
                            </ul>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Search the value of nutrients</h2>
                            {/* <span className="mb-2 text-md ">Name of the Food</span> */}
                            <input className="w-1/2 p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" type="text" placeholder='Enter the name of food'

                                value={Query}
                                onChange={(e) => setQuery(e.target.value)} />
                            {list && <div className='container'>
                                {list.map((item, i) => (
                                    <div className='mt-5'>
                                        <p className="text-base  font-semibold leading-7 text-indigo-600">All value is in scale of 100gm </p>
                                        <h1 className=" text-2xl ml-20 font-bold tracking-tight text-gray-900">{item.name}</h1>
                                        <table className='mt-5'>
                                            <tbody>
                                                <tr className="bg-gray-100">
                                                    <th className="px-4 py-2 font-bold">Calories</th>
                                                    <td className="px-4 py-2">{item.calories}</td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <th className="px-4 py-2 font-bold">Carbohydrates</th>
                                                    <td className="px-4 py-2">{item.carbohydrates_total_g}</td>
                                                </tr>
                                                <tr className="bg-gray-100">
                                                    <th className="px-4 py-2 font-bold">Fats </th>
                                                    <td className="px-4 py-2">{item.fat_total_g}</td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <th className="px-4 py-2 font-bold">Fibre</th>
                                                    <td className="px-4 py-2">{item.fiber_g}</td>
                                                </tr>
                                                <tr className="bg-gray-100">
                                                    <th className="px-4 py-2 font-bold">Sugar</th>
                                                    <td className="px-4 py-2">{item.sugar_g}</td>
                                                </tr>
                                                <tr className="bg-white">
                                                    <th className="px-4 py-2 font-bold">Protein</th>
                                                    <td className="px-4 py-2">{item.protein_g}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                            </div>
                            }

                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Foods to Avoid in Your Gym Diet Plan</h2>
                            <p className="mt-6 text-base font-semibold leading-7 ">In the same way that proper nutrition has the potential to optimize performance and adaptation, improper nutrition can detrimentally affect progress and health. The following three foods should be avoided or limited as far as possible.</p>
                            <p className='text-base font-semibold leading-7 '>
                                For instance, trans fats are a type of dietary fat that has consistently been shown to impact health. While trans fats do naturally occur in small quantities, artificial trans fats are notoriously hazardous. Artificial trans fats can be found in baked goods, fast food, and many snack foods.
                            </p>
                        </div>
                       
                        
                    </div>
                </div>
            </div>
            <NutritientsIntake/>
        </div>





    )
}

export default Nutriton
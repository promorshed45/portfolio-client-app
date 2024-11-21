'use client'
import { Slider } from '@nextui-org/react';
import { FaReact, FaNodeJs, FaHtml5, FaJs, FaCss3Alt    } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiShadcnui, SiNextui, SiTypescript, SiExpress, SiMongodb, SiMongoose, SiRedux   } from "react-icons/si";


const Skills = () => {
    return (
        <div className='relative z-100 container bg-gray-950/90 rounded-lg w-full py-10 px-10'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                        <div className='pt-4 pb-8'>
                    <h1 className="text-xl" >Working Skills </h1>
                    </div>
                    <div className="flex flex-col gap-6 w-full max-w-md">
                        <Slider
                            size="sm"
                            color="secondary"
                            label="Front-End Devloper"
                            maxValue={100}
                            minValue={0}
                            defaultValue={75}
                            className="max-w-md"
                        />
                        <Slider
                            size="sm"
                            color="success"
                            label="Back-End Devloper"
                            maxValue={100}
                            minValue={0}
                            defaultValue={60}
                            className="max-w-md"
                        />
                        <Slider
                            size="sm"
                            color="danger"
                            label="Graphics Design"
                            maxValue={100}
                            minValue={0}
                            defaultValue={80}
                            className="max-w-md"
                        />
                        
                    </div>
                </div>

                <div>
                        <div className='pt-4 pb-8'>
                    <h1 className="text-xl" > Knowledges </h1>
                    </div>
                    <div className="flex flex-col gap-6 w-full max-w-md">
                    <div className="flex flex-wrap  gap-3">  {/* `justify-center` for centering icons */}
                            <div className="flex justify-center items-center gap-2 bg-gray-950 rounded-md px-3 py-2">
                                <FaHtml5 className="text-orange-500 size-8" />
                                <span>Html</span>
                            </div>
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <FaCss3Alt  className="text-blue-600 size-8" />
                                <span>CSS/3</span>
                            </div>
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <SiTailwindcss   className="text-sky-400 size-8" />
                                <span>Tailwind</span>
                            </div>
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <FaJs  className="text-yellow-500 size-8" />
                                <span>JavaScript</span>
                            </div>
                           
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <FaReact className="text-sky-400 size-8" />
                                <span>ReactJs</span>
                            </div>
                            
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <TbBrandNextjs className="text-white size-8" />
                                <span>NextJs</span>
                            </div>
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <SiRedux className="text-violet-500 size-8" />
                                <span>Redux</span>
                            </div>
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <SiShadcnui  className="text-white size-8" />
                                <span>ShadCn</span>
                            </div>
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <SiNextui   className="text-white size-8" />
                                <span>NextUi</span>
                            </div>

                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <SiTypescript  className="text-blue-700 size-8" />
                                <span>TS</span>
                            </div>
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <FaNodeJs className="text-green-500 size-8" />
                                <span>NodeJs</span>
                            </div>
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <SiExpress  className="text-emerald-500 size-8" />
                                <span>Express</span>
                            </div>
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <SiMongodb   className="text-green-600 size-8" />
                                <span>Mongodb</span>
                            </div>
                            <div className="flex justify-center items-center gap-5 bg-gray-950 rounded-md px-3 py-2">
                                <SiMongoose   className="text-red-900 size-8" />
                                <span>Mongoose</span>
                            </div>
                            
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
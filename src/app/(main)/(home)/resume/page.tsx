'use client'
import ResumeCard from './_components/ResumeCard';
import { Briefcase, GraduationCap } from 'lucide-react';
import Skills from './_components/Skills';

const page = () => {
    return (
        <div className='z-100 container md:px-20 md:py-10'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div>
                    <div className="flex text-2xl gap-3 px-5 py-10 items-center">
                    <GraduationCap className='size-10  text-fuchsia-500' />
                        <span>Education</span>
                    </div>
                    <ResumeCard/>
                </div> 
                <div>
                    <div className="flex text-2xl gap-3 px-5 py-10 items-center">
                    <Briefcase className='size-10  text-fuchsia-500' />
                        <span>Experience</span>
                    </div>
                    <ResumeCard/>
                </div> 
                <div>
                    <div className="flex text-2xl gap-3 px-5 py-10 items-center">
                    <GraduationCap className='size-10  text-fuchsia-500' />
                        <span>Awards</span>
                    </div>
                    <ResumeCard/>
                </div> 
            </div>

            <div className='px-4 pt-16'>
                <Skills/>
            </div>
        </div>
    );
};

export default page;
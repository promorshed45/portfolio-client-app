'use client'

import About from "./_components/About";
import WhatIdo from "./_components/WhatIdo";

const page = () => {
    return (
        <div className=' container md:px-20 md:py-10'>
           <About/>
           <WhatIdo/>
        </div>
    );
};

export default page;
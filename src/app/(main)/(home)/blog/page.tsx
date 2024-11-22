import React from 'react';
import BlogCard from './_components/BlogCard';
import nexiosInstance from '@/src/config/nexios.config';

const page = async() => {
    const response = await nexiosInstance.get(`/post`, {
        headers: {
          'Cache-Control': 'no-store',
        },
        next: { revalidate: 3600, tags: ["posts"] },
       
      });
    
      const { data }: any = response?.data;
    
      // console.log("blog page from home:", data); 
    
    return (
        <div className='relative z-100 container md:px-20 md:py-10'>
            <BlogCard data={data}/>
        </div>
    );
};

export default page;
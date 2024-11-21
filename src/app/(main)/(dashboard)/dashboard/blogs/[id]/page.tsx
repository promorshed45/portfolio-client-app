

import nexiosInstance from '@/src/config/nexios.config';
import { IParamsProps } from '@/src/types';
import UpdatePost from './_components/UpdatePost';


const BlogDetailsPage = async ({ params: { id } }: IParamsProps) => {
    const response = await nexiosInstance.get(`/post/${id}`, {
        next: { tags: ['posts'], revalidate: 3600, }
    });

    const { data }: any = response.data;

    // console.log('single post data page by id', data);

    return (
        <div className="relative z-101 flex flex-col min-h-screen">
            <div className='container mx-auto max-w-7xl px-6 flex-grow'>
                <>
                    <UpdatePost postData={data}/>
                </>
            </div>
        </div>
    );
};

export default BlogDetailsPage;


import nexiosInstance from '@/src/config/nexios.config';
import { IParamsProps } from '@/src/types';
import EditSkill from '../_components/EditSkill';


const BlogDetailsPage = async ({ params: { id } }: IParamsProps) => {
    const response = await nexiosInstance.get(`/skill/${id}`, {
        next: { tags: ['posts'], revalidate: 3600, }
    });

    const { data }: any = response.data;

    console.log('single post data page by id', data);

    return (
        <div className="relative z-101 flex flex-col min-h-screen">
            <div className='container mx-auto max-w-7xl px-6 flex-grow'>
                <>
                    <EditSkill data={data}/>
                </>
            </div>
        </div>
    );
};

export default BlogDetailsPage;
import Image from 'next/image';
import Layout from '../components/section/Layout';

const Works = () => {
	return (
		<Layout title='works'>
			<div className='container w-11/12 xl:w-6/12 xl:px-6 lg:w-8/12 lg:px-8 md:w-10/12 md:px-4 sm:w-10/12 sm:px-2'>
				<div className='font-mono text-sm xl:text-lg lg:text-lg md:text-lg sm:text-md text-dark dark:text-light'>
					I&#39;ll add my portofolio here 😉
				</div>
				<div className='mt-5'>
					<div className='flex justify-center'>
						<Image src='/p2.jpg' alt='anime-wave' height={360} width={640} />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Works;

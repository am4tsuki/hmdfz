import LinkItem from '../components/LinkItem';
import Layout from '../components/section/Layout';

const About = () => {
	return (
		<Layout title='about'>
			<div className='container w-11/12 xl:w-6/12 xl:px-6 lg:w-8/12 lg:px-8 md:w-10/12 md:px-4 sm:w-10/12 sm:px-2'>
				<div className='font-mono text-sm xl:text-lg lg:text-lg md:text-lg sm:text-md text-dark dark:text-light'>
					hi! I&#39;m <LinkItem href='https://github.com/xtenkousa'>hmdfz.</LinkItem> 👀
				</div>
			</div>
		</Layout>
	);
};

export default About;

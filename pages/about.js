import Layout from '../components/section/Layout';
import LinkItem from '../components/LinkItem';
const About = () => {
	return (
		<Layout title='about'>
			<div className='container w-6/12 px-6'>
				<div className='font-mono text-md text-dark dark:text-light'>
					Hi! I&#39;m <LinkItem href='https://github.com/xtenkousa'>hmdfz.</LinkItem> 👀
				</div>
			</div>
		</Layout>
	);
};

export default About;

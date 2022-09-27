import Image from 'next/image';
import LinkItem from '../components/LinkItem';
import Paragraph from '../components/Paragraph';
import Layout from '../components/section/Layout';

const Home = () => {
	return (
		<Layout>
			<div className='container w-6/12 px-6'>
				<div className='font-mono text-md text-dark dark:text-light'>
					Welcome to my profile page 👋
					<div className='mt-5'>
						<div className='flex justify-center'>
							<Image unoptimized={true} src='anime-wave.gif' alt='anime-wave' height={300} width={550} />
						</div>
						<div className='p-2 mt-5 bg-stone-200 dark:bg-stone-800'>
							<div className='h-24 mr-5 w-[2px] float-left bg-stone-800 dark:bg-light'></div>
							<div>
								<Paragraph>“We are such stuff as dreams are made on, and our little life is rounded with a sleep.”</Paragraph>
							</div>
							<p className='mt-5'>
								~ <LinkItem href='https://id.wikipedia.org/wiki/William_Shakespeare'>William Shakespeare</LinkItem>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Home;

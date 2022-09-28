import Image from 'next/image';
import LinkItem from '../components/LinkItem';
import Paragraph from '../components/Paragraph';
import Layout from '../components/section/Layout';

const Home = () => {
	return (
		<Layout>
			<div className='container w-11/12 xl:w-6/12 xl:px-6 lg:w-8/12 lg:px-8 md:w-10/12 md:px-4 sm:w-10/12 sm:px-2'>
				<div className='font-mono text-sm xl:text-lg lg:text-lg md:text-lg sm:text-md text-dark dark:text-light'>
					welcome to my profile page 👋
					<div className='mt-5'>
						<div className='flex justify-center'>
							<Image src='https://c.tenor.com/H4xLf6epW-wAAAAC/anime-wave.gif' alt='anime-wave' height={300} width={550} />
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

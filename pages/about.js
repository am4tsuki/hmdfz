import Image from 'next/image';
import LinkItem from '../components/LinkItem';
import Layout from '../components/section/Layout';

const About = () => {
	return (
		<Layout title='about'>
			<div className='container w-11/12 xl:w-6/12 xl:px-6 lg:w-8/12 lg:px-8 md:w-10/12 md:px-4 sm:w-10/12 sm:px-2'>
				<div className='flex justify-center'>
					<Image className='rounded-full ' src='/p1.jpg' alt='pict' height={150} width={150} />
				</div>
				<div className='flex justify-center mt-3'>
					<div className='font-mono text-sm xl:text-lg lg:text-lg md:text-lg sm:text-base text-dark dark:text-light'>
						hi! i&#39;m <LinkItem href='https://github.com/powzee'>hmdfz</LinkItem> 👀
					</div>
				</div>
				<div className='flex justify-center mt-1'>
					<div className='font-mono text-sm leading-tight xl:text-base lg:text-base md:text-base sm:text-sm text-dark dark:text-light'>
						front end developer 🤞
					</div>
				</div>
				<div className='mt-5 font-mono text-sm underline underline-offset-4 decoration-orange xl:text-lg lg:text-lg md:text-lg sm:text-md text-dark dark:text-light'>
					# about me
				</div>
				<div className='mt-3 font-mono text-sm text-justify indent-6 xl:text-base lg:text-base md:text-base sm:text-sm text-dark dark:text-light'>
					i&#39;m just an ordinary person who loves graphic design, web design, games, music, anime and other stuff 👀.
				</div>
				<div className='flex justify-center mt-5'>
					<Image src='https://media.tenor.com/oGbO8vW_eqgAAAAC/spy-x-family-anya.gif' alt='anime-wave' height={300} width={550} />
				</div>
				<div className='mt-5 font-mono text-sm leading-relaxed text-justify xl:text-base lg:text-base md:text-base sm:text-sm text-dark dark:text-light'>
					i created this personal website for improving my skills with react/nextjs, which is my favorite framework for frontend development. if
					you interested with me, feel free to contact my instagram account <LinkItem href='https://instagram.com/hmdfzzi_'>hmdfzzi_</LinkItem>{' '}
					😉.
				</div>
			</div>
		</Layout>
	);
};

export default About;

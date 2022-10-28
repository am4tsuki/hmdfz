import Line from '../Line';
import Link from 'next/link';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NavWrap from '../NavWrap';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children, title }) => {
	const router = useRouter();
	const mytitle = title ? `${title} - hmdfz.` : 'hmdfz.';
	return (
		<>
			<Head>
				<meta name='author' content='xtenkousa' />
				<meta name='author' content='Ahmad Fauzi' />
				<meta property='og:type' content='website' />
				<meta name='og:title' content='Ahmad Fauzi' />
				<meta name='description' content='hmdfz homepage' />
				<meta property='og:site_name' content='Ahmad Fauzi' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>{mytitle}</title>
				<link rel='shortcut icon' href='/favicon.png' type='image/png' />
			</Head>
			<div>
				<Header />
				<div className='container mx-auto'>
					<Line />
				</div>
				<nav>
					<div className='flex justify-center mt-5 space-x-5 xl:space-x-10 lg:space-x-10 md:space-x-10 sm:space-x-10'>
						<NavWrap>
							<Link href='/' passHref>
								<a className={router.pathname == '/' ? 'bg-orange dark:text-dark' : 'dark:text-light'}>home</a>
							</Link>
						</NavWrap>
						<NavWrap>
							<Link href='/about' passHref>
								<a className={router.pathname == '/about' ? 'bg-orange dark:text-dark' : 'dark:text-light'}>about</a>
							</Link>
						</NavWrap>
						<NavWrap>
							<Link href='/works' passHref>
								<a className={router.pathname == '/works' ? 'bg-orange dark:text-dark' : 'dark:text-light'}>works</a>
							</Link>
						</NavWrap>
						<NavWrap>
							<Link href='https://github.com/powzee' passHref>
								<a target='_blank' className='dark:text-light'>
									github
								</a>
							</Link>
						</NavWrap>
					</div>
					<div className='container'>
						<Line />
					</div>
				</nav>
				<motion.div
					initial='hidden'
					animate='enter'
					exit='exit'
					variants={variants}
					transition={{ duration: 0.3, type: 'easeInOut' }}
					style={{ position: 'relative' }}
				>
					{children}
				</motion.div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;

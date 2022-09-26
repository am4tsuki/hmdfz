import Line from '../Line';

const Footer = () => {
	return (
		<footer className='container mx-auto'>
			<Line />
			<div className='text-center text-md text-dark dark:text-light font-mono  transition'>
				Powered by <span className='font-semibold'>NextJS</span> & <span className='font-semibold'>TailwindCSS</span>
			</div>
			<div className='text-center text-md text-dark dark:text-light font-mono  transition mt-3'> &copy; {new Date().getFullYear()} xtenkousa</div>
		</footer>
	);
};

export default Footer;

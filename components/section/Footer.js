import Line from '../Line';

const Footer = () => {
	return (
		<footer className='container mx-auto'>
			<Line />
			<div className='font-mono text-sm text-center transition text-dark dark:text-light'>
				Powered by <span className='font-semibold'>NextJS</span> & <span className='font-semibold'>TailwindCSS</span>
			</div>
			<div className='mt-3 font-mono text-sm text-center transition text-dark dark:text-light'> &copy; {new Date().getFullYear()} xtenkousa</div>
			<div className='mt-5'></div>
		</footer>
	);
};

export default Footer;

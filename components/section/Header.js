import Line from '../Line';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Header = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const { systemTheme, theme, setTheme } = useTheme();

	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className='w-10 h-10 p-2 transition duration-300 rounded-full text-light hover:bg-light hover:text-dark hover:bg-opacity-75'
					role='button'
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<MoonIcon
					className='w-10 h-10 p-2 transition duration-300 rounded-full text-dark hover:bg-dark hover:text-light hover:bg-opacity-75'
					role='button'
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};

	return (
		<div className='container mx-auto mt-5'>
			<div className='relative flex items-center justify-center mx-auto text-5xl text-center transition lg:w-6/12 font-monoxl text-dark dark:text-light'>
				<Link href='/'>HMDFZ.</Link>
				<div className='absolute right-5 xl:right-0 lg:-right-20 md:right-24 sm:right-14'>{renderThemeChanger()}</div>
			</div>
			<p className='my-5 font-mono text-center lg:text-lg xl:text-lg md:text-lg sm:text-md'>
				You can ask me about design, programming and other stuff.
			</p>
			<Line />
		</div>
	);
};

export default Header;

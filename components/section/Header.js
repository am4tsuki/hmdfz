import Link from 'next/link';
import Line from '../Line';
import NavItem from '../NavItem';
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
			return <SunIcon className='w-8 h-8 text-yellow-500' role='button' onClick={() => setTheme('light')} />;
		} else {
			return <MoonIcon className='w-8 h-8 text-gray-900' role='button' onClick={() => setTheme('dark')} />;
		}
	};

	return (
		<div className='container mx-auto mt-5'>
			<div className='relative w-6/12 mx-auto flex transition justify-center items-center font-monoxl font-semibold text-5xl text-dark dark:text-light text-center'>
				<Link href='/'>HMDFZ.</Link>
				<div className='absolute right-0'>{renderThemeChanger()}</div>
			</div>
			<p className='text-md font-mono text-center my-5'>You can ask me about design, games, programming and other stuff.</p>
			<Line />
			<div className='mt-5 flex space-x-10 justify-center'>
				<NavItem href='/'>home</NavItem>
				<NavItem href='/about'>about</NavItem>
				<NavItem href='/works'>works</NavItem>
				<NavItem href='https://github.com/xtenkousa'>github</NavItem>
			</div>
			<Line />
		</div>
	);
};

export default Header;

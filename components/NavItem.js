import Link from 'next/link';

const NavItem = ({ href, children }) => {
	return (
		<div
			className={`font-mono text-xl text-dark dark:text-light underline decoration-dark dark:decoration-light underline-offset-8 hover:bg-orange hover:no-underline duration-300 transition dark:hover:text-dark`}
		>
			<Link href={href}>{children}</Link>
		</div>
	);
};

export default NavItem;

const NavWrap = ({ children }) => {
	return (
		<div className={`font-mono xl:text-xl lg:text-xl md:text-xl sm:text-xl text-md text-dark hover:bg-orange duration-300 transition`}>
			{children}
		</div>
	);
};

export default NavWrap;

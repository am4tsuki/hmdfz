const LinkItem = ({ href, children }) => {
	return (
		<a href={href} className='underline underline-offset-2'>
			{children}
		</a>
	);
};

export default LinkItem;

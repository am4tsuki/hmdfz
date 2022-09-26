import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title }) => {
	const mytitle = title ? `${title} - hmdfz.` : 'hmdfz.';
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='description' content='hmdfz homepage' />
				<meta name='author' content='Ahmad Fauzi' />
				<meta name='author' content='xtenkousa' />
				<meta property='og:site_name' content='Ahmad Fauzi' />
				<meta name='og:title' content='Ahmad Fauzi' />
				<meta property='og:type' content='website' />
				<title>{mytitle}</title>
				<link rel='shortcut icon' href='/favicon.png' type='image/png' />
			</Head>
			<div>
				<Header />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;

/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/section/Layout';

function Website({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default Website;

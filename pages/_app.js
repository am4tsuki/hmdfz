/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

if (typeof window !== 'undefined') {
	window.history.scrollRestoration = 'manual';
}

function Website({ Component, pageProps, router }) {
	return (
		<ThemeProvider enableSystem={true} attribute='class'>
			<AnimatePresence
				exitBeforeEnter
				initial={true}
				onExitComplete={() => {
					if (typeof window !== 'undefined') {
						window.scrollTo({ top: 0 });
					}
				}}
			>
				<Component {...pageProps} key={router.route} />
			</AnimatePresence>
		</ThemeProvider>
	);
}

export default Website;

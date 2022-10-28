/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['c.tenor.com', 'media.tenor.com'],
	},
	reactStrictMode: false,
	swcMinify: true,
};

module.exports = nextConfig;

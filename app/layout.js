import localFont from 'next/font/local';
import './globals.css';

const workSans = localFont({
	src: [
		{
			path: './fonts/WorkSans-Black.ttf',
			weight: '900',
			style: 'normal',
		},
		{
			path: './fonts/WorkSans-ExtraBold.ttf',
			weight: '800',
			style: 'normal',
		},
		{
			path: './fonts/WorkSans-Bold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/WorkSans-SemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './fonts/WorkSans-Medium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './fonts/WorkSans-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/WorkSans-Black.ttf',
			weight: '900',
			style: 'normal',
		},
		{
			path: './fonts/WorkSans-Thin.ttf',
			weight: '200',
			style: 'normal',
		},
		{
			path: './fonts/WorkSans-ExtraLight.ttf',
			weight: '100',
			style: 'normal',
		},
	],
	variable: '--font-work-sans',
});

export const metadata = {
	title: 'Profit Lounge',
	description:
		'Profit Lounge kickstarts your reselling career With cutting-edge tech that monitors every time a retailer changes a price, runs a promotion, or offers a discount We help upgrade your side-hustle & offer so much more',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${workSans.variable}`}>{children}</body>
		</html>
	);
}

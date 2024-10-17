import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Fahimul Islam: Portfolio',
	description:
		'Passionate full-stack web developer with a love for JavaScript and Golang.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="max-w-3xl mx-auto px-4">
					<header
						style={{
							background:
								'linear-gradient(90deg, rgb(12, 18, 30), rgba(12, 18, 30, 0.9))',
						}}
						className="py-4 sticky top-0 drop-shadow-md"
					>
						<Navbar />
					</header>
					<main className="mt-2 min-h-[500px]">{children}</main>
					<footer>
						<Footer />
					</footer>
				</div>
			</body>
		</html>
	);
}

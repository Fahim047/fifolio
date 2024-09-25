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
					<header className="mt-4">
						<Navbar />
					</header>
					<main className="mt-4">{children}</main>
					<footer>
						<Footer />
					</footer>
				</div>
			</body>
		</html>
	);
}

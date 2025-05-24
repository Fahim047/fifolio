import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '../components/Navbar';
import './globals.css';

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
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-white`}
			>
				<div className="max-w-3xl mx-auto px-4">
					<header className="py-4 bg-transparent sticky top-0 drop-shadow-md z-[999]">
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

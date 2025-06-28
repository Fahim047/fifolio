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
				{/* Background grid and gradient */}
				<div className="fixed inset-0 -z-10">
					<div className="absolute inset-0 bg-[#151e30]" />
					<div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,#151e30_1px)] bg-[size:20px_20px]" />
					<div className="absolute inset-0 bg-radial-[at_30%_10%] from-[rgba(255,255,255,0)] from-10% to-[rgba(0,0,0,1)] to-100%" />
				</div>

				{/* Main content */}
				<div className="max-w-3xl mx-auto px-4">
					<header className="py-4 bg-transparent sticky top-0 drop-shadow-md z-999">
						<Navbar />
					</header>
					<main className="mt-2 min-h-[500px] pb-12">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}

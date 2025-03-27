import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'TirojNet - Smart Solutions for Modern Businesses',
    description: 'We provide AI, network, and digital solutions to empower your business with technology that works.',
    metadataBase: new URL('https://tirojnet.ca'),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
} 
import type { Metadata } from "next";
import React, { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Ordin@Trix24",
	description: "The official website for OrdinatriXKurioubots created by the pyrotech club",
	icons: {
		icon:"/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			{children}
			</body>
			
		</html>
	);
}

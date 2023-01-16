import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Loading from "./loading";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat:wght@200;400;600;800&family=Righteous&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="preload"
					href="/dark-texture-watercolor.jpg"
					as="image"
				></link>
				<link rel="preload" href="/aboutMePic6.jpg" as="image"></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

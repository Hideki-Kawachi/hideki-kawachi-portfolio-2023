import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { animated, useSpring, useScroll } from "@react-spring/web";
import StartPage from "../components/startPage";

export default function Home() {
	const headerSpring = useSpring({
		from: { y: -50, opacity: 0 },
		to: { y: 0, opacity: 1 },
	});

	const textSpring = useSpring({
		from: { opacity: -100 },
		to: { opacity: 1 },
	});

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.matchMedia("(max-width: 767px)").matches) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<>
			<Head>
				<title>Ron Hideki L. Kawachi Portfolio</title>
			</Head>
			<StartPage
				headerSpring={headerSpring}
				textSpring={textSpring}
				isMobile={isMobile}
			></StartPage>
		</>
	);
}

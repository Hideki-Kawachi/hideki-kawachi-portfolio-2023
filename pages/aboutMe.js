import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useEffect, useRef } from "react";
import Header from "../components/header";
import Image from "next/image";
import {
	motion,
	useMotionValue,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import AboutMeFirst from "../components/aboutMeFirst";
import AboutMeFirstHeader from "../components/aboutMeFirstHeader";
import AboutMeSecondHeader from "../components/aboutMeSecondHeader";
import AboutMeSecond from "../components/aboutMeSecond";

function AboutMe() {
	return (
		<>
			<Header></Header>
			<section id="about-me-container" className="main-container">
				<div className="content-area">
					<AboutMeFirstHeader></AboutMeFirstHeader>
					<AboutMeFirst></AboutMeFirst>
					<AboutMeSecondHeader></AboutMeSecondHeader>
					<AboutMeSecond></AboutMeSecond>
				</div>
			</section>
		</>
	);
}

export default AboutMe;

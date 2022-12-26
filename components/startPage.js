import React from "react";
import { animated, useSpring } from "@react-spring/web";
import Orb from "../components/orb";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function StartPage({ headerSpring, textSpring, isMobile }) {
	return (
		<section id="start-container" className="main-container">
			<animated.div className="header-container" style={{ ...headerSpring }}>
				<h1>RON HIDEKI L. KAWACHI</h1>
				<span>Full-Stack Web Developer</span>
			</animated.div>
			<animated.div className="orb-text-container" style={{ ...textSpring }}>
				<span>Click Here</span>
			</animated.div>
			<Canvas shadows>
				<Orb isMobile={isMobile}></Orb>
			</Canvas>
		</section>
	);
}

export default StartPage;

import React, { useState } from "react";
import { animated, useChain, useSpring, useSpringRef } from "@react-spring/web";
import Orb from "../components/orb";
import { Canvas } from "@react-three/fiber";

function StartPage({ headerSpring, textSpring, isMobile }) {
	const [start, setStart] = useState(false);

	const div1Ref = useSpringRef();
	const div1 = useSpring({
		ref: div1Ref,
		from: { width: "0vw" },
		to: { width: "65vw" },
		reverse: start,
	});

	const div2Ref = useSpringRef();
	const div2 = useSpring({
		ref: div2Ref,
		from: { width: "0vw" },
		to: { width: "50vw" },
		reverse: start,
	});

	const div3Ref = useSpringRef();
	const div3 = useSpring({
		ref: div3Ref,
		from: { width: "0vw" },
		to: { width: "30vw" },
		reverse: start,
	});

	const bigRef = useSpringRef();
	const divBig = useSpring({
		ref: bigRef,
		from: { width: "0vw" },
		to: { width: "45vw" },
		reverse: start,
	});

	const medRef = useSpringRef();
	const divMed = useSpring({
		ref: medRef,
		from: { width: "0vw" },
		to: { width: "35vw" },
		reverse: start,
	});

	const smallRef = useSpringRef();
	const divSmall = useSpring({
		ref: smallRef,
		from: { width: "0vw" },
		to: { width: "25vw" },
		reverse: start,
	});

	const div7Ref = useSpringRef();
	const div7 = useSpring({
		ref: div7Ref,
		from: { width: "0vw" },
		to: { width: "25vw" },
		reverse: start,
	});

	const div8Ref = useSpringRef();
	const div8 = useSpring({
		ref: div8Ref,
		from: { width: "0vw" },
		to: { width: "40vw" },
		reverse: start,
	});

	useChain([bigRef, medRef, smallRef], [0, 0.7, 1], 1000);
	useChain(
		[div1Ref, div2Ref, div8Ref, div3Ref, div7Ref],
		[0, 0, 0.4, 0.4, 1],
		800
	);

	return (
		<section id="start-container" className="main-container">
			<animated.div className="div1" style={{ ...div1 }}></animated.div>
			<animated.div className="div2" style={{ ...div2 }}></animated.div>
			<animated.div className="div3" style={{ ...div3 }}></animated.div>
			<animated.div className="div4" style={{ ...divBig }}></animated.div>
			<animated.div className="div5" style={{ ...divMed }}></animated.div>
			<animated.div className="div6" style={{ ...divSmall }}></animated.div>
			<animated.div className="div7" style={{ ...div7 }}></animated.div>
			<animated.div className="div8" style={{ ...div8 }}></animated.div>
			<animated.div className="header-container" style={{ ...headerSpring }}>
				<h1>RON HIDEKI L. KAWACHI</h1>
				<span>Full-Stack Web Developer</span>
			</animated.div>
			<animated.div className="orb-text-container" style={{ ...textSpring }}>
				<span>Click Here</span>
			</animated.div>
			<Canvas shadows className="orb-main-container">
				<Orb isMobile={isMobile} setStart={setStart}></Orb>
			</Canvas>
		</section>
	);
}

export default StartPage;

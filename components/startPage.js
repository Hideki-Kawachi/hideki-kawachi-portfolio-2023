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
			<div className="main-header-container">
				{!isMobile && (
					<svg
						width="266"
						height="180"
						viewBox="0 0 266 180"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={"RHK-logo"}
					>
						<path
							d="M75.0772 12.5C52.5992 14.5 6.75066 24.6 3.18062 49C-0.930422 77.0976 66.4314 89.9191 73.2508 91.7646C73.7808 91.9081 73.3948 92.21 73.0192 92.6134C67.9869 98.0193 30.8582 137.797 9.62651 157.5M140.528 177L125.117 154.147C124.385 153.062 122.834 152.969 121.98 153.959L114.239 162.936C113.925 163.3 113.753 163.766 113.753 164.248V175C113.753 176.105 112.865 177 111.769 177H90.4482C89.3528 177 88.4648 176.112 88.4648 175.007V93.5M126.644 3V33C126.644 34.1046 125.756 35 124.661 35H115.736C114.641 35 113.753 34.1046 113.753 33V5C113.753 3.89543 112.865 3 111.769 3H90.4482C89.3528 3 88.4648 3.89694 88.4648 5.00151V93.5M88.4648 93.5L113.753 85M113.753 85V56.5C113.753 55.3954 114.641 54.5 115.736 54.5H124.661C125.756 54.5 126.644 55.3954 126.644 56.5V87C126.644 88.1046 127.532 89 128.628 89H148.461C149.557 89 150.445 88.1046 150.445 87V5C150.445 3.89543 151.333 3 152.428 3H261.017C262.112 3 263 3.89543 263 5V175C263 176.105 262.112 177 261.017 177H172.319C171.662 177 171.049 176.673 170.679 176.126L141.373 132.751C140.873 132.011 140.922 131.026 141.492 130.34L166.06 100.785C167.142 99.4832 166.224 97.5 164.54 97.5H137.992C137.4 97.5 136.839 97.7669 136.462 98.2276L117.266 121.703C116.083 123.15 113.753 122.306 113.753 120.431V85ZM74.5814 119.5L24.9975 169.5M71.1105 36.5C49.1283 42.1667 18.3533 56.2 71.1105 67"
							stroke="white"
							strokeWidth="5"
							strokeLinecap="round"
						/>
					</svg>
				)}
				<animated.div
					className="sub-header-container"
					style={{ ...headerSpring }}
				>
					<h1>RON HIDEKI L. KAWACHI</h1>
					<span>Software Developer</span>
				</animated.div>
			</div>

			<animated.div className="orb-text-container" style={{ ...textSpring }}>
				<span>Start Exploring</span>
			</animated.div>
			<Canvas shadows className="orb-main-container">
				<Orb isMobile={isMobile} setStart={setStart}></Orb>
			</Canvas>
		</section>
	);
}

export default StartPage;

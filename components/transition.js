import { animated, useSpring } from "@react-spring/web";
import React, { useEffect } from "react";

function Transition({ isLeaving }) {
	// const spring = useSpring({
	// 	from: { opacity: 1 },
	// 	to: { opacity: 0 },
	// 	config: { duration: 1000, ease: "easeIn" },
	// });

	// useEffect(() => {
	// 	let element = document.getElementById("main-transition-container");
	// 	if (element) {
	// 		setTimeout(() => {
	// 			setTransitionShow(false);
	// 		}, 1000);
	// 	}
	// });

	return (
		<>
			{isLeaving ? (
				<div id="main-transition-container" className="leave"></div>
			) : (
				<div id="main-transition-container" className="enter"></div>
			)}
		</>
	);
}

export default Transition;

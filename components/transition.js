import { animated, useSpring } from "@react-spring/web";
import React, { useEffect } from "react";

function Transition({ isLeaving }) {
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

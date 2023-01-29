import { animated, useSpring } from "@react-spring/web";
import React, { useEffect } from "react";
import { useSessionStorage } from "@react-hooks-library/core";

function Transition({ isLeaving }) {
	//const [loading, setLoading] = useSessionStorage("loading", "true");

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

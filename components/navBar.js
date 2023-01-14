import { useSpring } from "@react-spring/web";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function NavBar() {
	const router = useRouter();
	const [listShow, setListShow] = useState([]);

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.matchMedia("(max-width: 767px)").matches) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	// useEffect(() => {
	// 	let temp = [];
	// 	for (let i = -pageIndex; i != temp.length(); i++) {
	// 		if (i < pageIndex) {
	// 			let element = document.getElementById(i.toString());
	// 			let width = element?.clientWidth();
	// 			let fontSize = 1.2/i
	// 			temp.push({ fontSize:  });
	// 		}
	// 	}
	// }, [pageIndex]);

	// const navText = useSpring({
	// 	from:{ fontSize: }
	// })

	return (
		<nav>
			<span onClick={() => router.push("/aboutMe")} className="about-me" id="0">
				About Me
			</span>
			<span onClick={() => router.push("/skills")} className="skills" id="1">
				Skills
			</span>
			<span
				onClick={() => router.push("/projects")}
				className="projects"
				id="2"
			>
				Projects
			</span>
			<span id="3">Experiences</span>
			<span id="4">Contact Me</span>
		</nav>
	);
}

export default NavBar;

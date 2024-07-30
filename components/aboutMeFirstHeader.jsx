import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

function AboutMeFirstHeader() {
	const headerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: headerRef,
		offset: ["start center", "end start"],
	});

	const yPic = useSpring(useTransform(scrollYProgress, [0, 1], [0, 100]), {
		duration: 0,
	});
	const yText = useSpring(useTransform(scrollYProgress, [0, 1], [0, 250]), {
		duration: 0,
	});

	const headerVariant = {
		hidden: { opacity: 0, y: -5 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: "easeInOut",
				duration: 1,
			},
		},
	};

	const picVariant = {
		hidden: { opacity: 0.8 },
		visible: {
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 1,
			},
		},
	};

	// useEffect(() => {
	// 	sessionStorage.setItem("loading", "true");
	// 	console.log("SET SESSION STORAGE TO:", sessionStorage.getItem("loading"));
	// }, []);

	return (
		<div className="content-header-container">
			<motion.span
				variants={headerVariant}
				initial="hidden"
				animate="visible"
				ref={headerRef}
				style={{ y: yText }}
			>
				ABOUT ME
			</motion.span>
			<motion.div
				className="header-image-container"
				initial="hidden"
				animate="visible"
				variants={picVariant}
				style={{ y: yPic }}
			>
				<Image
					// onLoadingComplete={() => {
					// 	sessionStorage.removeItem("loading");
					// 	console.log("LOADED");
					// }}
					src="/aboutMePic5-comp.jpg"
					alt="background picture"
					className="header-image"
					fill
					priority={true}
					blurDataURL="/aboutMeFirstHeaderComp.jpg"
				></Image>
			</motion.div>
		</div>
	);
}

export default AboutMeFirstHeader;

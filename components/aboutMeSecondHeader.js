import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

function AboutMeSecondHeader() {
	const headerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: headerRef,
		offset: ["start center", "end start"],
	});

	function parallax(value, min, max) {
		return useTransform(value, [0, 1], [min, max]);
	}
	const yPic = useSpring(parallax(scrollYProgress, 0, 100), {
		duration: 0,
	});
	const yText = useSpring(parallax(scrollYProgress, 0, 250), {
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
	return (
		<motion.div className="content-header-container">
			<motion.span
				variants={headerVariant}
				initial="hidden"
				animate="visible"
				ref={headerRef}
				style={{
					y: yText,
					textShadow: "0px 0px 10px rgba(0, 0, 0, 1)",
					color: "#3D9E34",
				}}
			>
				EDUCATION
			</motion.span>
			<motion.div
				className="header-image-container"
				initial="hidden"
				animate="visible"
				variants={picVariant}
				style={{ y: yPic }}
			>
				<Image
					src="/dlsu1.jpg"
					alt="background picture"
					className="header-image"
					fill
					priority={true}
				></Image>
			</motion.div>
		</motion.div>
	);
}

export default AboutMeSecondHeader;

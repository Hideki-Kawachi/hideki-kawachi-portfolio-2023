import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function ExperienceCard({ image, org, duration, position, timing, bullets }) {
	return (
		<motion.div
			className="experience-card-main-container"
			initial={{ opacity: 0, y: -5 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -5 }}
			transition={{ delay: timing, ease: "easeInOut", duration: 0.7 }}
		>
			<div className="experience-card-image-container">
				<Image src={image} fill alt="Google Students Developers Club"></Image>
			</div>
			<div className="experience-card-text-container">
				<h2>{position}</h2>
				<span className="position-duration">{duration}</span>
				<hr></hr>
				<span>{org}</span>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "5px",
						marginTop: "5px",
					}}
				>
					{bullets?.map((bullet, index) => (
						<li key={`${bullet.charAt(0) + index}`}>{bullet}</li>
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default ExperienceCard;

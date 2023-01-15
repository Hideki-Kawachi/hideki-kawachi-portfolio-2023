import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AboutMeGridCard from "./aboutMeGridCard";

function AboutMeSecond() {
	return (
		<motion.div className="about-me-second-container">
			<p>
				I&apos;m currently in my 3rd year of college taking up{" "}
				<b>Bachelor of Science in Information Systems</b> in{" "}
				<b style={{ color: "#006937" }}>De La Salle University Manila.</b>
			</p>
			<div className="grid-container">
				<AboutMeGridCard
					target={[0, 0.4, 0.9, 1.2, 1.7, 1.9, 2.4, 2.6, 2.97]}
					caption={"CGPA"}
				></AboutMeGridCard>
				<AboutMeGridCard
					target={[0, 1, 2, 3, 4, 5, 6]}
					caption={"Time Dean's Lister Awardee"}
				></AboutMeGridCard>
			</div>
		</motion.div>
	);
}

export default AboutMeSecond;

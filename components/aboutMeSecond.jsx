import { motion } from "framer-motion";
import React from "react";
import AboutMeGridCard from "./aboutMeGridCard";

function AboutMeSecond() {
	return (
		<motion.div className="about-me-second-container">
			<p>
				I recently graduated with a{" "}
				<b>Bachelor of Science in Information Systems</b> in{" "}
				<b style={{ color: "#006937" }}>De La Salle University Manila.</b>
			</p>
			<div className="grid-container">
				<AboutMeGridCard
					caption={"Nominated for Excellence in Capstone Awward"}
				></AboutMeGridCard>
				<AboutMeGridCard
					caption={"DLSU Research Congress 2024 Participant"}
				></AboutMeGridCard>
				<AboutMeGridCard
					target={[0, 0.4, 0.9, 1.2, 1.7, 1.9, 2.4, 2.6, 2.9, 3.0, 3.1, 3.15]}
					caption={"CGPA"}
					isDecimal={true}
				></AboutMeGridCard>
				<AboutMeGridCard
					target={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
					caption={"Time Dean's Lister Awardee"}
					isDecimal={false}
				></AboutMeGridCard>
			</div>
		</motion.div>
	);
}

export default AboutMeSecond;

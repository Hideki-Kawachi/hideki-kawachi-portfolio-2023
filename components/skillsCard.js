import { motion } from "framer-motion";
import React from "react";

function SkillsCard({ level, color, caption }) {
	return (
		<div className="skills-card-container">
			<div className="level-container">
				<motion.hr
					style={{ backgroundColor: color }}
					whileInView={{ width: level }}
					initial={{ width: "0px" }}
					transition={{ ease: "easeOut", duration: 1 }}
				></motion.hr>
			</div>
			<span>{caption}</span>
		</div>
	);
}

export default SkillsCard;

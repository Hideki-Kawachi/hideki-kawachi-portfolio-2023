import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function AboutMeFirst() {
	return (
		<motion.div className="about-me-first-container">
			<p>
				I&apos;m <b>Hideki</b>, an Information Systems student who is passionate
				on...
			</p>
			<motion.h1
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ delay: 0.25, ease: "easeInOut", duration: 1 }}
			>
				SOFTWARE DEVELOPMENT
			</motion.h1>
			<p>
				What I enjoy most about coding is the satisfaction of{" "}
				<strong style={{ color: "#50A3E2" }}>making ideas come to life</strong>{" "}
				and <strong style={{ color: "#FA8129" }}>solving problems</strong> with
				technology.
			</p>
		</motion.div>
	);
}

export default AboutMeFirst;

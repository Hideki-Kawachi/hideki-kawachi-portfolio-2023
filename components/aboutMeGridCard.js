import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function AboutMeGridCard({ target, caption }) {
	const [targetShow, setTargetShow] = useState(false);
	const [targetNum, setTargetNum] = useState(0);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (targetShow && index != target.length) {
			setTimeout(() => {
				setTargetNum(target[index]);
				setIndex(index + 1);
			}, 100);
		}
	}, [targetShow, index]);

	return (
		<motion.div
			whileInView={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: -10 }}
			transition={{ duration: 1.5 }}
			className="grid-card-container"
		>
			<motion.span
				className="highlight-text"
				onViewportEnter={() => setTargetShow(true)}
				onViewportLeave={() => {
					setTargetShow(false);
					setTargetNum(0);
					setIndex(0);
				}}
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
			>
				{targetNum}
			</motion.span>
			<span>{caption}</span>
		</motion.div>
	);
}

export default AboutMeGridCard;

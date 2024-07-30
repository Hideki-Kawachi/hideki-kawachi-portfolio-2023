import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { animate, motion } from "framer-motion";
import { useRouter } from "next/router";

function ProjectCard({ image, title, description, link, bgColor }) {
	const router = useRouter();
	return (
		<div
			className="project-card-main-container"
			style={{ backgroundColor: bgColor + "CC" }}
		>
			<motion.div
				className="project-card-header-container"
				onClick={() => router.push(link)}
				whileInView={{ opacity: 1 }}
				initial={{ opacity: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: "easeInOut" }}
			>
				<motion.div
					className="project-card-image-container"
					whileHover={{
						scale: 1.01,
						transition: { duration: 0.2 },
					}}
				>
					<Image src={image} fill alt={title} priority={true}></Image>
				</motion.div>
			</motion.div>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
}

export default ProjectCard;

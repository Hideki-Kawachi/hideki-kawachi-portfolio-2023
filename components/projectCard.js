import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({
	image,
	title,
	description,
	link,
	linkColor,
	bgColor,
	demo,
}) {
	return (
		<div
			className="project-card-main-container"
			style={{ backgroundColor: bgColor + "B3" }}
		>
			<div
				className="project-card-header-container"
				onClick={() => window.open(demo, "_blank")}
			>
				<div className="project-card-image-container">
					<Image src={image} fill alt={title}></Image>
				</div>
				<svg
					width="30"
					height="30"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.3332 6.6665H4.99984C4.11578 6.6665 3.26794 7.01769 2.64281 7.64281C2.01769 8.26794 1.6665 9.11578 1.6665 9.99984V24.9998C1.6665 25.8839 2.01769 26.7317 2.64281 27.3569C3.26794 27.982 4.11578 28.3332 4.99984 28.3332H19.9998C20.8839 28.3332 21.7317 27.982 22.3569 27.3569C22.982 26.7317 23.3332 25.8839 23.3332 24.9998V16.6665M11.6665 18.3332L28.3332 1.6665M28.3332 1.6665H19.9998M28.3332 1.6665V9.99984"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<h2>{title}</h2>
			<p>{description}</p>
			<Link href={link} style={{ color: linkColor }}>
				Learn More
			</Link>
		</div>
	);
}

export default ProjectCard;

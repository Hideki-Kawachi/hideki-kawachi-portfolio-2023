import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Menu({ isOpen, setIsOpen }) {
	const router = useRouter();

	const navVariant = {
		hidden: {
			height: "0px",
			transition: {
				when: "afterChildren",
				staggerChildren: 0.1,
				ease: "easeInOut",
				duration: 0.25,
			},
		},
		visible: {
			height: "95vh",
			transition: {
				when: "beforeChildren",
				staggerChildren: 0.2,
				ease: "easeInOut",
				duration: 0.5,
			},
		},
	};

	const buttonVariant = {
		hidden: {
			y: -5,
			opacity: 0,
			transition: {
				ease: "easeOut",
				duration: 0.2,
			},
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				ease: "easeOut",
				duration: 0.3,
			},
		},
	};

	const hoverButton = {
		scale: 1.1,
		textDecoration: "underline",
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.nav
					id="nav-main-container"
					variants={navVariant}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<motion.button
						onClick={() => {
							setIsOpen(false);
							setTimeout(() => router.push("/aboutMe"), 900);
						}}
						variants={buttonVariant}
						whileHover={hoverButton}
						style={{ marginTop: "60px" }}
					>
						ABOUT ME
					</motion.button>
					<motion.button
						onClick={() => {
							setIsOpen(false);
							setTimeout(() => router.push("/skills"), 900);
						}}
						variants={buttonVariant}
						whileHover={hoverButton}
					>
						SKILLS
					</motion.button>
					<motion.button
						onClick={() => {
							setIsOpen(false);
							setTimeout(() => router.push("/projects"), 900);
						}}
						variants={buttonVariant}
						whileHover={hoverButton}
					>
						PROJECTS
					</motion.button>
					<motion.button
						onClick={() => {
							setIsOpen(false);
							setTimeout(() => router.push("/experiences"), 900);
						}}
						variants={buttonVariant}
						whileHover={hoverButton}
					>
						EXPERIENCES
					</motion.button>
					<motion.button
						onClick={() => {
							setIsOpen(false);
							setTimeout(() => router.push("/contactMe"), 900);
						}}
						variants={buttonVariant}
						whileHover={hoverButton}
					>
						CONTACT ME
					</motion.button>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}

export default Menu;

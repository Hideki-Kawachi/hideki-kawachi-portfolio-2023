import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

function Menu({ isOpen, setIsOpen }) {
	const router = useRouter();

	const navVariant = {
		hidden: {
			height: "0vh",
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
					<motion.a
						onClick={(e) => {
							e.preventDefault();
							setIsOpen(false);
							setTimeout(() => router.push("/aboutMe"), 900);
						}}
						variants={buttonVariant}
						whileHover={hoverButton}
						key={"aboutMe"}
						href="/aboutMe"
					>
						ABOUT ME
					</motion.a>
					<motion.a
						onClick={(e) => {
							e.preventDefault();
							setIsOpen(false);
							setTimeout(() => router.push("/skills"), 900);
						}}
						variants={buttonVariant}
						whileHover={hoverButton}
						key={"skills"}
						href="/skills"
					>
						SKILLS
					</motion.a>
					<motion.a
						onClick={(e) => {
							e.preventDefault();
							setIsOpen(false);
							setTimeout(() => router.push("/projects"), 900);
						}}
						variants={buttonVariant}
						whileHover={hoverButton}
						key={"projects"}
						href="/projects"
					>
						PROJECTS
					</motion.a>
					<motion.a
						onClick={(e) => {
							e.preventDefault();
							setIsOpen(false);
							setTimeout(() => router.push("/experiences"), 900);
						}}
						variants={buttonVariant}
						whileHover={hoverButton}
						key={"experiences"}
						href="/experiences"
					>
						EXPERIENCES
					</motion.a>
					<motion.a
						onClick={(e) => {
							e.preventDefault();
							setIsOpen(false);
							setTimeout(() => router.push("/contactMe"), 900);
						}}
						variants={buttonVariant}
						whileHover={hoverButton}
						key={"contactMe"}
						href="/contactMe"
					>
						CONTACT ME
					</motion.a>
				</motion.nav>
			)}
		</AnimatePresence>
	);
}

export default Menu;

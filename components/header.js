import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Menu from "./Menu";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const router = useRouter();

	return (
		<>
			<header>
				<svg
					width="65"
					height="65"
					viewBox="0 0 65 65"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="RHK-logo"
					onClick={() => router.push("/")}
				>
					<g filter="url(#filter0_d_335_14)">
						<path
							d="M42.4126 60.0002H35.146V23.9961H42.4126V41.9982L55.9331 23.9961H64.1872L52.7176 39.1861L64.1872 60.0002H55.9331L47.9575 45.4379L42.4126 52.7944V60.0002Z"
							fill="#93B13B"
						/>
						<path
							d="M11.2998 26.0594V40.4711H18.5665C19.5623 40.4711 20.4992 40.2869 21.3769 39.9187C22.2546 39.5337 23.0226 39.0148 23.6809 38.362C24.3392 37.7092 24.8541 36.9476 25.2254 36.0772C25.6136 35.1901 25.8078 34.2528 25.8078 33.2652C25.8078 32.2776 25.6136 31.3487 25.2254 30.4783C24.8541 29.5911 24.3392 28.8212 23.6809 28.1684C23.0226 27.5156 22.2546 27.0051 21.3769 26.6368C20.4992 26.2519 19.5623 26.0594 18.5665 26.0594H11.2998ZM11.2998 54.8576H4.0332V18.8535H18.5665C19.8999 18.8535 21.1828 19.0293 22.415 19.3808C23.6472 19.7155 24.795 20.201 25.8584 20.837C26.9387 21.4563 27.9177 22.2095 28.7954 23.0967C29.69 23.9671 30.4496 24.9379 31.0742 26.0091C31.7156 27.0804 32.2051 28.227 32.5427 29.4489C32.8971 30.6708 33.0744 31.9429 33.0744 33.2652C33.0744 34.5038 32.914 35.709 32.5933 36.8807C32.2895 38.0524 31.8422 39.1655 31.2514 40.22C30.6775 41.2745 29.9686 42.2453 29.1246 43.1324C28.2806 44.0196 27.3354 44.7895 26.2888 45.4423L30.3146 54.8576H22.5922L19.4273 47.6016L11.2998 47.6518V54.8576Z"
							fill="#8BCCF0"
						/>
						<path
							d="M28.5845 36.0041H21.3179V0H28.5845V14.4117H43.0924V0H50.359V36.0041H43.0924V21.6175H28.5845V36.0041Z"
							fill="#F0DD7B"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_335_14"
							x="0.0332031"
							y="0"
							width="64.1538"
							height="64"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dx="-4" dy="4" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0 0.595833 0 0 0 0.5 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_335_14"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_335_14"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
				<motion.button
					initial={{ aspectRatio: 0 / 1 }}
					animate={{ aspectRatio: menuOpen ? 1.5 / 1 : 1 / 1 }}
					whileHover={{ aspectRatio: 1.5 / 1 }}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<div></div>
					<div></div>
					<div></div>
				</motion.button>
			</header>
			<Menu isOpen={menuOpen}></Menu>
		</>
	);
}

export default Header;

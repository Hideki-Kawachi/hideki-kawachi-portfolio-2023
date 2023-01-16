import { Router } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import Transition from "../components/transition";
import "../styles/globals.scss";
import Loading from "./loading";

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);
	const [transitionShow, setTransitionShow] = useState(true);
	const [isLeaving, setIsLeaving] = useState(false);

	useEffect(() => {
		// let element = document.getElementById("main-transition-container");
		// if (!element) {
		// 	setTransitionShow(true);
		// }

		const leaving = () => {
			setTransitionShow(true);
			setIsLeaving(true);
		};
		const entering = () => {
			setTransitionShow(true);
			setIsLeaving(false);
			setTimeout(() => {
				setTransitionShow(false);
			}, 1000);
		};

		Router.events.on("routeChangeStart", leaving);
		Router.events.on("routeChangeComplete", entering);
		return () => {
			Router.events.off("routeChangeStart", leaving);
			Router.events.off("routeChangeComplete", entering);
		};
	}, []);

	return (
		<>
			{transitionShow ? <Transition isLeaving={isLeaving}></Transition> : <></>}
			<Component {...pageProps} />
		</>
	);
}

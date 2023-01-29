import { Router } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import Transition from "../components/transition";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
	const [transitionShow, setTransitionShow] = useState(true);
	const [isLeaving, setIsLeaving] = useState(false);

	useEffect(() => {
		const leaving = () => {
			setTransitionShow(true);
			setIsLeaving(true);
		};
		const entering = () => {
			setTransitionShow(true);
			setIsLeaving(false);
			setTimeout(() => {
				setTransitionShow(false);
			}, 1500);
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

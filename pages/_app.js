import { Router } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/globals.scss";
import Loading from "./loading";

export default function App({ Component, pageProps }) {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const start = () => {
			setLoading(true);
		};
		const end = () => {
			setLoading(true);
		};
		Router.events.on("routeChangeStart", start);
		Router.events.on("routeChangeComplete", end);
		Router.events.on("routeChangeError", end);
		return () => {
			Router.events.off("routeChangeStart", start);
			Router.events.off("routeChangeComplete", end);
			Router.events.off("routeChangeError", end);
		};
	}, []);

	return (
		<>
			{loading ? <Loading></Loading> : <></>}
			<Component {...pageProps} />
		</>
	);
}

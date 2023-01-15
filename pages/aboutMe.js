import React from "react";
import Header from "../components/header";
import AboutMeFirst from "../components/aboutMeFirst";
import AboutMeFirstHeader from "../components/aboutMeFirstHeader";
import AboutMeSecondHeader from "../components/aboutMeSecondHeader";
import AboutMeSecond from "../components/aboutMeSecond";

function AboutMe() {
	return (
		<>
			<Header></Header>
			<section id="about-me-container" className="main-container">
				<div className="content-area">
					<AboutMeFirstHeader></AboutMeFirstHeader>
					<AboutMeFirst></AboutMeFirst>
					<AboutMeSecondHeader></AboutMeSecondHeader>
					<AboutMeSecond></AboutMeSecond>
				</div>
			</section>
		</>
	);
}

export default AboutMe;

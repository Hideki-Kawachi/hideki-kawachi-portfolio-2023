import React from "react";
import Header from "../components/header";
import SkillsCard from "../components/skillsCard";

function Skills() {
	return (
		<>
			<Header></Header>
			<section id="skills-container" className="main-container">
				<div className="content-area">
					<div className="main-text-container">
						<h1>SKILLS</h1>
						<hr></hr>
						<p>
							I&rsquo;m primarily focused on Web Development using
							<strong style={{ color: "#F0DB4F" }}> Javascript </strong>
							frameworks such as
							<strong style={{ color: "#61DAFB" }}> React </strong>
							and
							<strong style={{ color: "#E4E4E4" }}> Next.js </strong>
							while using <strong style={{ color: "#8CC84B" }}>
								Express
							</strong>{" "}
							and Javascript along with databases like
							<strong style={{ color: "#14A506" }}> mongoDB</strong> ,
							<strong style={{ color: "#E38D1A" }}> mySQL</strong>, and{" "}
							<strong style={{ color: "#FEBA00" }}>Firebase</strong> for the
							backend. I also have experience developing mobile applications for
							Android using <strong style={{ color: "#8949FB" }}>Kotlin</strong>{" "}
							and <strong style={{ color: "#EC2025" }}>Java</strong>. I&rsquo;m
							comfortable with and have prior experience in working with teams
							adopting <strong style={{ color: "#FF76AF" }}>agile</strong>{" "}
							methodologies such as scrum.
							<br></br>
							<br></br>
							Recently, I&rsquo;ve also been studying and trying out new
							technologies such as <b>Framer Motion</b>, <b>Three.js</b>, and{" "}
							<b>React Spring</b> for website animations. Along with this, I
							have experience in using <b>Figma </b>
							for making prototypes and <b>Lucidchart</b> for creating BPMN 2.0
							diagrams.
						</p>
					</div>
					<div className="skills-list-main-container">
						<div className="skills-list-container">
							<h3>FRAMEWORKS & LANGUAGES</h3>
							<SkillsCard
								level={"90%"}
								color={"#F0DB4F"}
								caption={"Javascript"}
								key={1}
							></SkillsCard>
							<SkillsCard
								level={"80%"}
								color={"#61DAFB"}
								caption={"React"}
								key={2}
							></SkillsCard>
							<SkillsCard
								level={"90%"}
								color={"#E4E4E4"}
								caption={"Next.js"}
								key={3}
							></SkillsCard>
							<SkillsCard
								level={"70%"}
								color={"#8949FB"}
								caption={"Kotlin"}
								key={4}
							></SkillsCard>
							<SkillsCard
								level={"70%"}
								color={"#EC2025"}
								caption={"Java"}
								key={5}
							></SkillsCard>
						</div>
						<div className="skills-list-container">
							<h3>TOOLS</h3>
							<SkillsCard
								level={"75%"}
								color={"#8CC84B"}
								caption={"Express"}
								key={6}
							></SkillsCard>
							<SkillsCard
								level={"85%"}
								color={"#14A506"}
								caption={"MongoDB"}
								key={7}
							></SkillsCard>
							<SkillsCard
								level={"70%"}
								color={"#E38D1A"}
								caption={"MySQL"}
								key={8}
							></SkillsCard>
							<SkillsCard
								level={"75%"}
								color={"#FEBA00"}
								caption={"Firebase"}
								key={9}
							></SkillsCard>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Skills;

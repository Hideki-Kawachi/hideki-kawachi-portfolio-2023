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
							and <strong style={{ color: "#adadad" }}>Node.js</strong> along
							with databases like
							<strong style={{ color: "#14A506" }}> mongoDB</strong> ,{" "}
							<strong style={{ color: "#FEBA00" }}>Firebase</strong>,
							<strong style={{ color: "#E38D1A" }}> mySQL</strong>, and{" "}
							<strong style={{ color: "#14A506" }}> supabase </strong>
							for the backend. Additionally, I've also had experience doing
							small projects using{" "}
							<strong style={{ color: "#EC2025" }}>Java</strong>,{" "}
							<strong style={{ color: "#73B648" }}> Spring Boot.</strong> I've
							also developed mobile applications for Android using{" "}
							<strong style={{ color: "#8949FB" }}>Kotlin</strong>.<br></br>
							<br></br>
							I&rsquo;ve also had the opportunity to work with several teams
							developing and designing projects to solve issues that client
							companies face. In addition, I was also able to lead the
							development of some projects, most notably our capstone project
							which we were nominated for getting an excellence in capstone
							award.
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
								level={"90%"}
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
								level={"85%"}
								color={"#adadad"}
								caption={"Node.js"}
								key={4}
							></SkillsCard>
							<SkillsCard
								level={"75%"}
								color={"#8CC84B"}
								caption={"Express"}
								key={5}
							></SkillsCard>
							<SkillsCard
								level={"50%"}
								color={"#8949FB"}
								caption={"Kotlin"}
								key={6}
							></SkillsCard>
							<SkillsCard
								level={"65%"}
								color={"#EC2025"}
								caption={"Java"}
								key={7}
							></SkillsCard>
							<SkillsCard
								level={"65%"}
								color={"#73B648"}
								caption={"Spring Boot"}
								key={8}
							></SkillsCard>
						</div>
						<div className="skills-list-container">
							<h3>TOOLS</h3>
							<SkillsCard
								level={"85%"}
								color={"#14A506"}
								caption={"MongoDB"}
								key={8}
							></SkillsCard>
							<SkillsCard
								level={"83%"}
								color={"#14A506"}
								caption={"supabase"}
								key={9}
							></SkillsCard>
							<SkillsCard
								level={"80%"}
								color={"#E38D1A"}
								caption={"MySQL"}
								key={10}
							></SkillsCard>
							<SkillsCard
								level={"75%"}
								color={"#FEBA00"}
								caption={"Firebase"}
								key={11}
							></SkillsCard>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Skills;

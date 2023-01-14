import Image from "next/image";
import React from "react";

function Skills() {
	return (
		<section id="skills-container" className="main-container">
			<div className="content-area">
				<div className="main-text-container">
					<h2>Skills</h2>
					<hr></hr>
					<p>
						I&rsquo;m primarily focused on full-stack web development using
						<strong style={{ color: "#F0DB4F" }}> Javascript </strong>
						frameworks such as
						<strong style={{ color: "#61DAFB" }}> React </strong>
						and
						<strong style={{ color: "#E4E4E4" }}> Next.js </strong>
						while using <strong style={{ color: "#8CC84B" }}>Express </strong>
						along with
						<strong style={{ color: "#14A506" }}> mongoDB</strong> or{" "}
						<strong style={{ color: "#E38D1A" }}>mySQL</strong> for the backend.
						I&rsquo;m comfortable with and have prior experience in working with
						teams adopting <strong style={{ color: "#FF76AF" }}>agile</strong>{" "}
						methodologies such as scrum.
					</p>
				</div>

				<div className="main-image-container">
					<div className="image-border">
						<div className="image-container">
							<Image src="/javascript.png" alt="javascript" fill></Image>
						</div>
						<span>Javascript</span>
					</div>
					<div className="image-border">
						<div className="image-container">
							<Image src="/react.png" alt="react" fill></Image>
						</div>
						<span>React</span>
					</div>
					<div className="image-border">
						<div className="image-container">
							<Image src="/nextjs.png" alt="next.js" fill></Image>
						</div>
						<span>Next.js</span>
					</div>
					<div className="image-border">
						<div className="image-container">
							<Image src="/express.png" alt="express js" fill></Image>
						</div>
						<span>Express</span>
					</div>
					<div className="image-border">
						<div className="image-container">
							<Image src="/mongodb.png" alt="mongoDB" fill></Image>
						</div>
						<span>mongoDB</span>
					</div>
					<div className="image-border">
						<div className="image-container">
							<Image src="/mysql.png" alt="mySQL" fill></Image>
						</div>
						<span>mySQL</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;

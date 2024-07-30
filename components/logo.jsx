import React, { useEffect } from "react";

function Logo() {
	function animateWave() {
		let delayOffset = 1.5;
		// for each set of "waves", give a specific delay function
		// total waves will be 15 diagonals
		// the sequence will look like this with each one respresenting a wave
		// 8-1
		// 7-1 8-2
		// 6-1 7-2 8-3
		// 5-1 6-2 7-3 8-4

		// for each wave, the number of cells included in the wave is also represented by the waveNum
		for (let waveNum = 1; waveNum <= 8; waveNum++) {
			let startRowNumber = 9 - waveNum;
			// get each cell based on the waveNum
			for (let colNumber = 1; colNumber <= waveNum; colNumber++) {
				let rowNumber = startRowNumber + colNumber - 1;
				let currElement = document.getElementById(
					`logo-${rowNumber}-${colNumber}`
				);
				if (currElement) {
					currElement.style.animationDelay = `${delayOffset}s`;
				}
			}
			delayOffset += 0.05;
		}

		for (let waveNum = 7; waveNum >= 1; waveNum--) {
			let startRowNumber = waveNum;
			let rowOffset = 0;
			// get each cell based on the waveNum
			for (let colNumber = 8; colNumber >= 9 - waveNum; colNumber--) {
				let rowNumber = startRowNumber - rowOffset;
				let currElement = document.getElementById(
					`logo-${rowNumber}-${colNumber}`
				);

				if (currElement) {
					currElement.style.animationDelay = `${delayOffset}s`;
				}
				rowOffset++;
			}
			delayOffset += 0.05;
		}
	}

	useEffect(() => {
		window.addEventListener("resize", animateWave);
		animateWave();
		return () => window.removeEventListener("resize", animateWave);
	}, []);

	return (
		<div id="logo-container">
			{/* 1st row */}
			<div>
				<span id="logo-1-1" className="invisible-small-dot "></span>
				<span id="logo-1-2" className="invisible-medium-dot"></span>
				<span id="logo-1-3" className="large-dot "></span>
				<span id="logo-1-4" className="large-dot"></span>
				<span id="logo-1-5" className="invisible-large-dot"></span>
				<span id="logo-1-6" className="invisible-large-dot"></span>
				<span id="logo-1-7" className="large-dot"></span>
				<span id="logo-1-8" className="large-dot"></span>
			</div>
			{/* 2nd row */}
			<div>
				<span id="logo-2-1" className="invisible-small-dot"></span>
				<span id="logo-2-2" className="medium-dot"></span>
				<span id="logo-2-3" className="large-dot"></span>
				<span id="logo-2-4" className="large-dot"></span>
				<span id="logo-2-5" className="invisible-large-dot"></span>
				<span id="logo-2-6" className="invisible-large-dot"></span>
				<span id="logo-2-7" className="large-dot"></span>
				<span id="logo-2-8" className="large-dot"></span>
			</div>
			{/* 3rd row */}
			<div>
				<span id="logo-3-1" className="small-dot"></span>
				<span id="logo-3-2" className="medium-dot"></span>
				<span id="logo-3-3" className="large-dot"></span>
				<span id="logo-3-4" className="large-dot"></span>
				<span id="logo-3-5" className="invisible-large-dot"></span>
				<span id="logo-3-6" className="invisible-large-dot"></span>
				<span id="logo-3-7" className="large-dot"></span>
				<span id="logo-3-8" className="large-dot"></span>
			</div>
			{/* 4th row */}
			<div>
				<span id="logo-4-1" className="small-dot"></span>
				<span id="logo-4-2" className="medium-dot"></span>
				<span id="logo-4-3" className="large-dot"></span>
				<span id="logo-4-4" className="large-dot"></span>
				<span id="logo-4-5" className="large-dot"></span>
				<span id="logo-4-6" className="large-dot"></span>
				<span id="logo-4-7" className="large-dot"></span>
				<span id="logo-4-8" className="large-dot"></span>
			</div>
			{/* 5th row */}
			<div>
				<span id="logo-5-1" className="small-dot"></span>
				<span id="logo-5-2" className="medium-dot"></span>
				<span id="logo-5-3" className="large-dot"></span>
				<span id="logo-5-4" className="large-dot"></span>
				<span id="logo-5-5" className="large-dot"></span>
				<span id="logo-5-6" className="large-dot"></span>
				<span id="logo-5-7" className="large-dot"></span>
				<span id="logo-5-8" className="large-dot"></span>
			</div>
			{/* 6th row */}
			<div>
				<span id="logo-6-1" className="small-dot"></span>
				<span id="logo-6-2" className="medium-dot"></span>
				<span id="logo-6-3" className="large-dot"></span>
				<span id="logo-6-4" className="large-dot"></span>
				<span id="logo-6-5" className="invisible-large-dot"></span>
				<span id="logo-6-6" className="invisible-large-dot"></span>
				<span id="logo-6-7" className="large-dot"></span>
				<span id="logo-6-8" className="large-dot"></span>
			</div>
			{/* 7th row */}
			<div className="flex items-center">
				<span id="logo-7-1" className="small-dot"></span>
				<span id="logo-7-2" className="medium-dot"></span>
				<span id="logo-7-3" className="large-dot"></span>
				<span id="logo-7-4" className="large-dot"></span>
				<span id="logo-7-5" className="invisible-large-dot"></span>
				<span id="logo-7-6" className="invisible-large-dot"></span>
				<span id="logo-7-7" className="large-dot"></span>
				<span id="logo-7-8" className="large-dot"></span>
			</div>
			{/* 8th row */}
			<div className="flex items-center">
				<span id="logo-8-1" className="small-dot"></span>
				<span id="logo-8-2" className="medium-dot"></span>
				<span id="logo-8-3" className="large-dot"></span>
				<span id="logo-8-4" className="large-dot"></span>
				<span id="logo-8-5" className="invisible-large-dot"></span>
				<span id="logo-8-6" className="invisible-large-dot"></span>
				<span id="logo-8-7" className="large-dot"></span>
				<span id="logo-8-8" className="large-dot"></span>
			</div>
		</div>
	);
}

export default Logo;

import { useThree } from "@react-three/fiber";
import React, { useMemo } from "react";
import { randFloat } from "three/src/math/MathUtils";

function Points() {
	const { viewport } = useThree();
	const points = useRef();
	const count = 50;

	const pointsPosition = useMemo(() => {
		const positions = new Float32Array(Math.pow(count * 3, 2));
		let index = 0;

		for (let i = -(count / 2); i < count / 2; i++) {
			// Generate random values for x, y, and z on every loop
			let posX = (viewport.width / count) * i;
			for (let j = -(count / 2); j < count / 2; j++, index++) {
				let posY = (viewport.height / count) * j;
				//console.log("POS X:", posX, " POS Y:", posY);
				let x = randFloat(posX - 0.5, posX + 0.5);
				let y = randFloat(posY - 0.5, posY + 0.5);
				let z = 0;
				//console.log(index);
				// We add the 3 values to the attribute array for every loop
				positions.set([x, y, z], index * 3);
			}
		}

		return positions;
	}, []);
	return (
		<points ref={points}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={pointsPosition.length / 3}
					array={pointsPosition}
					itemSize={3}
				></bufferAttribute>
			</bufferGeometry>
			<pointsMaterial color="black" size={0.03} sizeAttenuation />
		</points>
	);
}

export default Points;

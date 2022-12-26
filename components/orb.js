import { useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial);

function Orb({ isMobile }) {
	const sphere = useRef();
	const { pointer } = useThree();
	const pointerDistance = [];
	const inside = useRef();
	const main = useRef();
	const dirLight = useRef();
	const [hovered, setHovered] = useState(false);
	const [pressed, setPressed] = useState(false);

	useEffect(() => {
		document.body.style.cursor = hovered ? "pointer" : "auto";
		return () => (document.body.style.cursor = "auto");
	}, [hovered]);

	useFrame(() => {
		if (!isMobile) {
			main.current.position.x = pointer.x / 4;
			main.current.position.y = pointer.y / 4 - 0.2;
		}
		pointerDistance[0] = 1 - Math.abs(pointer.x);
		pointerDistance[1] = 1 - Math.abs(pointer.y);

		let speed = ((pointerDistance[0] + pointerDistance[1]) / 500) * 10;
		sphere.current.rotation.x += 0.003 + speed;
		sphere.current.rotation.y += 0.003 + speed;
		sphere.current.rotation.z += 0.002 + speed;

		inside.current.rotation.x -= 0.004 - speed;
		inside.current.rotation.y -= 0.004 - speed;
		inside.current.rotation.z -= 0.004 - speed;

		//console.log("POINTER IS:", pointer);
	});

	useEffect(() => {
		if (pressed) {
			setTimeout(() => {
				setPressed(false);
				const element = document.querySelector("#about-me-container");
				// smooth scroll to element and align it at the bottom
				element?.scrollIntoView({ behavior: "smooth", block: "start" });
			}, 500);
		}
	}, [pressed]);

	function orbColor(isPressed, isHovered) {
		if (isPressed) {
			return "#F068A1";
		} else if (isHovered) {
			return "#485D70";
		} else {
			return "#A3A3A3";
		}
	}

	const springs = useSpring({
		color: orbColor(pressed, hovered),
	});

	return (
		<>
			<ambientLight intensity={0.5}></ambientLight>
			<directionalLight
				ref={dirLight}
				position={[2, 2, 5]}
				intensity={5}
				castShadow
			/>
			<group
				ref={main}
				onPointerOver={() => setHovered(true)}
				onPointerOut={() => setHovered(false)}
				onClick={() => setPressed(true)}
			>
				<mesh ref={sphere} castShadow>
					<sphereGeometry args={[1.2, 8, 4]} />
					<meshStandardMaterial wireframe />
				</mesh>
				<mesh ref={inside} castShadow>
					<icosahedronGeometry args={[0.9, 0]}></icosahedronGeometry>
					<AnimatedMeshDistortMaterial
						color={springs.color}
						speed={5}
						distort={0.5}
					/>
				</mesh>
			</group>
			{/* <mesh position={[0, 0, -2]} receiveShadow>
				<planeGeometry
					args={[viewport.width * 1.4, viewport.height * 1.4]}
				></planeGeometry>
				<meshStandardMaterial color="red" />
			</mesh> */}
		</>
	);
}

export default Orb;

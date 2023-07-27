import React, { useEffect, useRef, Suspense, useCallback, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Loader from "./Loader";

interface ModelProps {
	gltf: any;
}

function Model({ gltf }: ModelProps) {
	const modelRef = useRef<any>();

	useEffect(() => {
		const model = gltf.scene;
		model.scale.set(2, 2, 2);
		model.position.set(0, -1, 0);

		// Add the model to the scene
		modelRef.current.add(model);

		return () => {
			// Clean up when the component is unmounted
			modelRef.current.remove(model);
		};
	}, [gltf]);

	useFrame(() => {
		// Rotate the model
		if (modelRef.current) {
			modelRef.current.rotation.y += 0.001;
		}
	});

	return <group ref={modelRef} />;
}

const LazyModel = ({ gltf }: ModelProps) => useMemo(() => <Model gltf={gltf} />, [gltf]);

export default function Computer() {
	const gltf = useLoader(GLTFLoader, "/assets/source/computer.glb");

	// Memoized event handler to avoid unnecessary re-creations
	const handleKeyDown = useCallback((event: KeyboardEvent) => {
		// Your keyboard event handling logic here
	}, []);

	// Add event listener outside useEffect to avoid adding/removing on each render
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleKeyDown]);

	return (
		<>
			<Canvas className="z-10 h-52 w-52">
				<ambientLight />
				<Suspense fallback={<Loader />}>
					<LazyModel gltf={gltf} />
				</Suspense>
			</Canvas>
		</>
	);
}

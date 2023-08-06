import React, { useEffect, useRef, Suspense, useMemo, useCallback } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Loader from "./Loader";
import { IModelProps } from "../../interfaces/IModel";

function Model({ gltf }: IModelProps) {
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

	const lastUpdateTimeRef = useRef<number>(0);
	const updateRotation = useCallback(() => {
		const currentTime = performance.now();
		if (currentTime - lastUpdateTimeRef.current > 16) {
			// Rotate the model
			modelRef.current.rotation.y += 0.001;
			lastUpdateTimeRef.current = currentTime;
		}
	}, []);

	useFrame(updateRotation);

	return <group ref={modelRef} />;
}

export default function Computer() {
	const gltf = useLoader(GLTFLoader, "/assets/source/computer.glb");

	return (
		<>
			<Canvas className="z-10 h-52 w-52">
				<ambientLight />
				<Suspense fallback={<Loader />}>
					<Model gltf={gltf} />
				</Suspense>
			</Canvas>
		</>
	);
}

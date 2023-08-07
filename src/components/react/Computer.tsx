import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { IModelProps } from "../../interfaces/IModel";

// Create a Loader component
function Loader() {
	return (
		<mesh>
			<boxGeometry args={[1, 1, 1]} />
			<meshBasicMaterial color="gray" wireframe />
		</mesh>
	);
}

function Model({ gltf }: IModelProps) {
	const modelRef = useRef();

	useFrame(({ clock }) => {
		if (modelRef.current) {
			modelRef.current.scale.set(1.8, 1.8, 1.8);
			modelRef.current.rotation.y = clock.elapsedTime * 0.1;
		}
	});

	return <primitive object={gltf.scene.clone()} ref={modelRef} />;
}

export default function Computer() {
	const gltf = useLoader(GLTFLoader, "/assets/source/computer.glb");

	return (
		<Canvas className="z-10 h-56 w-52">
			<ambientLight />
			<Suspense fallback={<Loader />}>
				<Model gltf={gltf} />
			</Suspense>
		</Canvas>
	);
}

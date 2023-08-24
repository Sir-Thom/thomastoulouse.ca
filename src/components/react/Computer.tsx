import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { IModelProps } from "../../interfaces/IModel";
import Loader from "./Loader";

// Create a simple placeholder mesh for suspense fallback
function PlaceholderMesh() {
	return (
		<mesh>
			<boxGeometry args={[1, 1, 1]} />
			<meshBasicMaterial color="gray" wireframe />
		</mesh>
	);
}

// The model component that will be animated
function ModelComponent({ gltf }: IModelProps) {
	const modelRef = useRef();

	useFrame(({ clock }) => {
		if (modelRef.current) {
			modelRef.current.scale.set(1.8, 1.8, 1.8);
			modelRef.current.rotation = clock.elapsedTime * 0.1;
		}
	});

	return <primitive object={gltf.scene.clone()} ref={modelRef} />;
}

export default function Computer() {
	const gltf = useLoader(GLTFLoader, "/assets/source/computer.glb");

	return (
		<Suspense fallback={<Loader />}>
			<Canvas className="z-10 h-56 w-52">
				<ambientLight />
				<Suspense fallback={<PlaceholderMesh />}>
					<ModelComponent gltf={gltf} />
				</Suspense>
			</Canvas>
		</Suspense>
	);
}

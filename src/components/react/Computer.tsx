import * as THREE from "three";
import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		PC: THREE.Mesh;
		Monitor: THREE.Mesh;
		Mouse: THREE.Mesh;
		Keyboard: THREE.Mesh;
	};
	materials: {
		TextureGrid: THREE.MeshStandardMaterial;
	};
};

const context = createContext(null);
export function Instances({ children, ...props }: any) {
	const { nodes } = useGLTF("/assets/source/computer.glb") as GLTFResult;
	const instances = useMemo(
		() => ({
			PC: nodes.PC,
			Monitor: nodes.Monitor,
			Mouse: nodes.Mouse,
			Keyboard: nodes.Keyboard
		}),
		[nodes]
	);
	return (
		<Merged meshes={instances} {...props}>
			{(instances: unknown) => <context.Provider value={instances as any} children={children} />}
		</Merged>
	);
}

export function Model(props: JSX.IntrinsicElements["group"]) {
	const instances: any | null = useContext(context);
	return (
		<group {...props} dispose={null}>
			<instances.PC name="PC" position={[0, 0, -0.031]} rotation={[0.087, 0, 0]} />
			<instances.Monitor name="Monitor" position={[0, 0.5, 0.031]} rotation={[0.087, 0, 0]} />
			<instances.Mouse name="Mouse" position={[0.875, 0.063, 0.75]} rotation={[0.087, 0, 0]} />
			<instances.Keyboard name="Keyboard" position={[0, 0.062, 0.813]} rotation={[0.087, 0, 0]} />
		</group>
	);
}

useGLTF.preload("/assets/source/computer.glb");

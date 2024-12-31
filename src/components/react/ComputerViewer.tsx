import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Instances, Model } from "./Computer";
export default function Viewer() {
	const ref: any | undefined = useRef();
	return (
		<Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
			<Suspense fallback={null}>
				<Instances>
					<Model />
				</Instances>
			</Suspense>
			<OrbitControls ref={ref} autoRotate enableZoom={false} />
		</Canvas>
	);
}

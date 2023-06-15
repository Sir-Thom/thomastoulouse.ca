import { useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface ModelProps {
  gltf: any;
}

function Model({ gltf }: ModelProps) {
  const modelRef = useRef<any>();

  useEffect(() => {
    const model = gltf.scene;
    // Optional: Scale, position, or manipulate the loaded model as needed
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
    modelRef.current.rotation.y += 0.001;
  });

  return <group ref={modelRef} />;
}

export default function Computer() {
  const gltf = useLoader(GLTFLoader, "/assets/source/computer.glb");

  return (
    <Canvas className=" z-10 h-52 w-52">
      <Suspense fallback={null}>
        <ambientLight />
        <Model gltf={gltf} />
      </Suspense>
    </Canvas>
  );
}

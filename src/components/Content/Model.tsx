import React from 'react';
import {useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "@react-three/drei";
import {ICameraSettings} from "./Animation";

interface IModelProps {
  cameraSettings: ICameraSettings
}

const Model = (props: IModelProps): React.ReactElement<IModelProps> => {

  const easeOutCircle = (x: number) => Math.sqrt(1 - Math.pow(x - 1, 4))

  const urlModelPath = process.env.PUBLIC_URL + "/models/cat.gltf"
  const {scene} = useLoader(GLTFLoader, urlModelPath)
  scene.translateZ(-250)
  const initialCameraPosition = props.cameraSettings.position

  useThree(({camera}) => {
    let frame = 0
    const animationRotateTarget = () => {
      requestAnimationFrame(animationRotateTarget)
      frame = frame <= 100 ? frame + 1 : frame
      if (frame <= 100) {
        const rotationSpeed = -easeOutCircle(frame / 120) * Math.PI * 20
        camera.position.y = props.cameraSettings.position.y
        camera.position.x = initialCameraPosition.x * Math.cos(rotationSpeed) + initialCameraPosition.z * Math.sin(rotationSpeed)
        camera.position.z = initialCameraPosition.z * Math.cos(rotationSpeed) - initialCameraPosition.x * Math.sin(rotationSpeed)
      }
    }
    animationRotateTarget()
  });
  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate={true}
      />
      <primitive
        object={scene}
        castShadow={true}
        receiveShadow={true}
      />
    </>
  );
};

export default Model;
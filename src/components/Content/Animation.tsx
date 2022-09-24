import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import Model from "./Model";
import {Vector3} from "three";

export interface ICameraSettings {
  position: Vector3,
  far: number // How far can the camera be from the scene
}

const Animation = () => {

  const cameraSettings: ICameraSettings = {
    position: new Vector3(
      -1000,
      700,
      0
    ),
    far: 100000
  }

  return (
    <Canvas
      className="content__animation"
      camera={{
        position: cameraSettings.position,
        far: cameraSettings.far
      }}
      shadows={true}
    >
      <ambientLight
        intensity={0.3}
      />
      <directionalLight
        intensity={0.5}
        castShadow={true}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />
      <Suspense fallback={"loading ..."}>
        <Model
          cameraSettings={cameraSettings}
        />
      </Suspense>
    </Canvas>
  );
};

export default Animation;
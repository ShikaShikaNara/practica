import React,{useRef} from 'react';
import {PerspectiveCamera,RenderTexture,Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
        

const Cube = () => {
  const textRef = useRef()
  useFrame(state=> 
    (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2));

  return (
    <mesh>
    <boxGeometry args={[1,1,1]}/>
    <meshStandardMaterial >
        <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0,0,2]}/>
            <color attach={"background"} args={["pink"]}/>
            <Text ref={textRef} fontSize={1} color="#000">
                hello
            </Text>

        </RenderTexture>



    </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
import {useRef} from 'react'
import { extend, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import robotoSlab from '../assets/Roboto Slab_Regular.json'

extend({ TextGeometry });

const Text = (props) => {
    const type = props.type;
    const text = props.text;
    const ref = useRef();
    const font = new FontLoader().parse(robotoSlab);
    useFrame((state, delta) => {
      if (type === "plus") {
        ref.current.rotation.x += delta;
      } else {
        ref.current.rotation.x -= delta;
      }
    });
    return (
      <mesh {...props} ref={ref}>
        <textGeometry
          args={[
            text,
            {
              font,
              size: 8,
              height: 1,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 1,
              bevelSize: 1,
              bevelOffset: 0,
              bevelSegments: 1,
            },
          ]}
        />
        <meshLambertMaterial attach="material" color={"gold"} />
      </mesh>
    );
};

export default Text;

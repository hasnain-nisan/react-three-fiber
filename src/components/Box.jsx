import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber';

const Box = (props) => {
    const type = props.type;
    const ref = useRef()
    useFrame((state, delta) => {
        if(type === 'plus'){
            ref.current.rotation.x += delta;
        } else {
            ref.current.rotation.x -= delta;
        }
    });
    return (
        <mesh
            {...props}
            ref={ref}
        >
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial color={"pink"}/>
        </mesh>
    )
}

export default Box
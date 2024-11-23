import { Canvas, useLoader } from '@react-three/fiber'
import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { motion } from 'framer-motion-3d';

export default function Earth() {

    const scene = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scene,
        offset: ['start end', 'end start']
    })

    const [color, normal, aoMap] = useLoader(TextureLoader, [
        '/img/color.jpg',
        '/img/normal.png',
        '/img/occlusion.jpg',
        // '/img/earth/earth-1.jpg',
        // '/img/earth/earth-2.jpg',
        // '/img/earth/earth-3.jpg',
    ])

    return (
        <Canvas ref={scene}>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={3.5} position={[1, 0, -.25]} />
            <motion.mesh scale={3} rotation-y={scrollYProgress}>
                <sphereGeometry args={[1, 54, 54]}/>
                <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap}/>
            </motion.mesh>
        </Canvas>
    )
}
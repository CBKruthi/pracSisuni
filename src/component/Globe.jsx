import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Globe() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current; // ✅ stable reference

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(550, 500);
    mountNode.appendChild(renderer.domElement);

    // Globe (Earth)
    const globeGeometry = new THREE.SphereGeometry(2, 64, 64);
    const globeMaterial = new THREE.MeshStandardMaterial({
      map: new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/earth_atmos_2048.jpg"
      ),
      bumpMap: new THREE.TextureLoader().load(
        "https://threejs.org/examples/textures/earth_bump_2048.jpg"
      ),
      bumpScale: 0.05,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // Network effect
    const networkGeometry = new THREE.BufferGeometry();
    const positions = [];
    for (let i = 0; i < 2000; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const radius = 2.2;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions.push(x, y, z);
    }
    networkGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    const networkMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.015,
    });
    const network = new THREE.Points(networkGeometry, networkMaterial);
    scene.add(network);

    // Glow effect
    const atmosphereGeometry = new THREE.SphereGeometry(2.3, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.1,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Lights
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 3, 5).normalize();
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x333333));

    // Camera
    camera.position.z = 6;

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.002;
      network.rotation.y += 0.002;
      atmosphere.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup ✅ (uses stable mountNode)
    return () => {
      if (mountNode && renderer.domElement) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      globe.geometry.dispose();
      globe.material.dispose();
      network.geometry.dispose();
      network.material.dispose();
      atmosphere.geometry.dispose();
      atmosphere.material.dispose();
    };
  }, []);

  return <div ref={mountRef} />;
}
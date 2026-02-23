import React, {useRef, useEffect} from "react";
import * as THREE from "three";
import "./Scene3D.scss";

export default function Scene3D({isDark = false, className = ""}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const ambientColor = isDark ? 0x4a5568 : 0x9ca3af;
    const meshColor = isDark ? 0x6366f1 : 0x55198b;
    const ambientLight = new THREE.AmbientLight(ambientColor, 0.6);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const geometry = new THREE.TorusKnotGeometry(0.6, 0.2, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: meshColor,
      shininess: 80,
      specular: 0x444444,
      transparent: true,
      opacity: 0.85
    });
    const knot = new THREE.Mesh(geometry, material);
    knot.position.set(0, 0, 0);
    scene.add(knot);

    const secondGeometry = new THREE.TorusGeometry(1.2, 0.05, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: isDark ? 0x818cf8 : 0x8c43ce,
      transparent: true,
      opacity: 0.4
    });
    const ring = new THREE.Mesh(secondGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    function animate() {
      animationRef.current = requestAnimationFrame(animate);
      const t = Date.now() * 0.0005;
      knot.rotation.x = t * 0.3;
      knot.rotation.y = t * 0.5;
      ring.rotation.z = t * 0.2;
      renderer.render(scene, camera);
    }
    animate();

    function onResize() {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      renderer.dispose();
      geometry.dispose();
      secondGeometry.dispose();
      material.dispose();
      ringMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDark]);

  return <div ref={containerRef} className={`scene3d ${className}`} aria-hidden="true" />;
}

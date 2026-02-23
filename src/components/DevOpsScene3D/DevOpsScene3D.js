import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import "./DevOpsScene3D.scss";

const DOCKER_BLUE = 0x0db7ed;
const K8S_BLUE = 0x326ce5;
const CLOUD_WHITE = 0xe2e8f0;
const CONTAINER_PURPLE = 0x6366f1;

export default function DevOpsScene3D({ isDark = false, className = "" }) {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const meshesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0.8, 5.5);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(isDark ? 0x334155 : 0x94a3b8, 0.7);
    scene.add(ambient);
    const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
    keyLight.position.set(4, 6, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);
    const fillLight = new THREE.PointLight(0xffffff, 0.4);
    fillLight.position.set(-3, 2, 3);
    scene.add(fillLight);

    const meshes = [];

    // ---- Containers (Docker-style boxes) ----
    const containerGeos = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.BoxGeometry(0.45, 0.45, 0.45),
      new THREE.BoxGeometry(0.4, 0.4, 0.4),
    ];
    const containerMat = new THREE.MeshPhongMaterial({
      color: DOCKER_BLUE,
      shininess: 60,
      specular: 0x333333,
    });
    containerGeos.forEach((geo, i) => {
      const box = new THREE.Mesh(geo, containerMat);
      box.position.set(-0.9 + i * 0.35, -0.3 + i * 0.08, -0.2 - i * 0.1);
      box.rotation.y = 0.2 + i * 0.15;
      box.castShadow = true;
      box.receiveShadow = true;
      scene.add(box);
      meshes.push({ mesh: box, type: "container", index: i });
    });

    // ---- Kubernetes-style hexagon wheel ----
    const hexShape = new THREE.Shape();
    const r = 0.5;
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) hexShape.moveTo(x, y);
      else hexShape.lineTo(x, y);
    }
    hexShape.closePath();
    const hexGeo = new THREE.ExtrudeGeometry(hexShape, {
      depth: 0.08,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 2,
    });
    const hexMat = new THREE.MeshPhongMaterial({
      color: K8S_BLUE,
      shininess: 80,
      specular: 0x444444,
    });
    const hex = new THREE.Mesh(hexGeo, hexMat);
    hex.position.set(0.5, 0.15, 0);
    hex.rotation.x = -Math.PI / 2;
    hex.rotation.z = Math.PI / 6;
    scene.add(hex);
    meshes.push({ mesh: hex, type: "hex" });

    // ---- Cloud (deploy target) ----
    const cloudMat = new THREE.MeshPhongMaterial({
      color: isDark ? 0x475569 : CLOUD_WHITE,
      shininess: 20,
      specular: 0x222222,
    });
    const cloudSpheres = [
      { x: 0.9, y: 0.35, z: 0.1, r: 0.32 },
      { x: 1.05, y: 0.2, z: 0.05, r: 0.25 },
      { x: 0.75, y: 0.25, z: 0.05, r: 0.28 },
      { x: 0.92, y: 0.1, z: 0, r: 0.22 },
    ];
    cloudSpheres.forEach(({ x, y, z, r }) => {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(r, 16, 12),
        cloudMat
      );
      sphere.position.set(x, y, z);
      scene.add(sphere);
      meshes.push({ mesh: sphere, type: "cloud" });
    });

    // ---- Small "deploy" arrow / pod between containers and cloud ----
    const arrowMat = new THREE.MeshPhongMaterial({
      color: isDark ? CONTAINER_PURPLE : 0x55198b,
      shininess: 50,
    });
    const podGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.25, 12);
    const pod = new THREE.Mesh(podGeo, arrowMat);
    pod.position.set(0.15, 0.1, 0.2);
    pod.rotation.z = -Math.PI / 2;
    scene.add(pod);
    meshes.push({ mesh: pod, type: "pod" });

    meshesRef.current = meshes;

    function animate() {
      animationRef.current = requestAnimationFrame(animate);
      const t = Date.now() * 0.001;

      meshesRef.current.forEach(({ mesh, type, index }) => {
        if (type === "container") {
          mesh.rotation.y += 0.008 + index * 0.002;
        } else if (type === "hex") {
          mesh.rotation.z = Math.PI / 6 + Math.sin(t * 0.5) * 0.05;
        } else if (type === "cloud") {
          mesh.position.y += Math.sin(t + mesh.position.x * 10) * 0.0008;
        } else if (type === "pod") {
          mesh.rotation.z = -Math.PI / 2 + Math.sin(t * 0.7) * 0.03;
        }
      });

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
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) {
          if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
          else o.material.dispose();
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDark]);

  return (
    <div
      ref={containerRef}
      className={`devops-scene3d ${className}`}
      aria-hidden="true"
    />
  );
}

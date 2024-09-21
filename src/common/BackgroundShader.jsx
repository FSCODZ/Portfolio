import React, { useEffect } from 'react';
import * as THREE from 'three';

function BackgroundShader() {
  useEffect(() => {
    let container;
    let camera, scene, renderer;
    let uniforms;

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("anonymous");
    loader.load(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/982762/noise.png',
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.minFilter = THREE.LinearFilter;
        init(texture);
        animate();
      }
    );

    function init(texture) {
      container = document.body; // Use body to cover entire page

      camera = new THREE.Camera();
      camera.position.z = 1;

      scene = new THREE.Scene();

      const geometry = new THREE.PlaneBufferGeometry(2, 2);

      uniforms = {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        u_noise: { type: "t", value: texture },
        u_mouse: { type: "v2", value: new THREE.Vector2() }
      };

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);

      // Make renderer cover the entire page
      renderer.setSize(window.innerWidth, document.body.scrollHeight);
      container.appendChild(renderer.domElement);

      onWindowResize();
      window.addEventListener('resize', onWindowResize, false);

      document.addEventListener('pointermove', (e) => {
        let ratio = window.innerHeight / window.innerWidth;
        uniforms.u_mouse.value.x = (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
        uniforms.u_mouse.value.y = (e.pageY - window.innerHeight / 2) / window.innerHeight * -1;

        e.preventDefault();
      });
    }

    function onWindowResize() {
      renderer.setSize(window.innerWidth, document.body.scrollHeight); // Full height of the page
      uniforms.u_resolution.value.x = renderer.domElement.width;
      uniforms.u_resolution.value.y = renderer.domElement.height;
    }

    function animate(delta) {
      requestAnimationFrame(animate);
      render(delta);
    }

    function render(delta) {
      uniforms.u_time.value = -10000 + delta * 0.0005;
      renderer.render(scene, camera);
    }
  }, []);

  return null; // No need for a div or container, as the canvas covers the body
}

export default BackgroundShader;

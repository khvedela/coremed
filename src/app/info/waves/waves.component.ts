import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {fromEvent} from "rxjs";
import {TweenMax} from 'gsap';

@Component({
  selector: 'app-waves',
  templateUrl: './waves.component.html',
  styleUrls: ['./waves.component.scss']
})
export class WavesComponent implements AfterViewInit {

  renderer: any;
  scene: any;
  camera: any;
  composer: any;
  circle: any;
  skelet: any;
  particle: any;

  mouseX: any;
  mouseY: any;

  clock = new THREE.Clock();

  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  @ViewChild('engine-wrapper')
  private engineWrapperRef!: ElementRef

  public get canvas() {
    return this.canvasRef.nativeElement;
  }

  public get engineWrapper() {
    return this.engineWrapperRef.nativeElement;
  }

  public constructor() {
  }

  public ngAfterViewInit(): void {
    this.init();
    this.animateParticles();

    const cursorPositionHandler = (e: any) => {
      let decimalX = e.clientX / window.innerWidth - 0.5;
      let decimalY = e.clientY / window.innerHeight - 0.5;
      TweenMax.to(this.engineWrapper, 0.5, { rotationY: 10 * decimalX, rotationX: 10 * decimalY, ease: 'Quad.easeOut', transformPerspective: 700, transformOrigin: "center" });
    }

    this.engineWrapper.body.addEventListener('mousemove', cursorPositionHandler);
  }

  public init() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.autoClear = false;
    this.renderer.setClearColor(0x111111, 1);
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.z = 400;
    this.scene.add(this.camera);

    this.circle = new THREE.Object3D();
    this.skelet = new THREE.Object3D();
    this.particle = new THREE.Object3D();

    this.scene.add(this.circle);
    this.scene.add(this.skelet);
    this.scene.add(this.particle);

    const geometry = new THREE.TetrahedronGeometry(2, 0);
    const geom = new THREE.IcosahedronGeometry(7, 1);
    const geom2 = new THREE.IcosahedronGeometry(15, 1);

    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      // shading: THREE.FlatShading
    });

    for (let i = 0; i < 1000; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      mesh.position.multiplyScalar(90 + (Math.random() * 700));
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
      this.particle.add(mesh);
    }

    const mat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      // shading: THREE.FlatShading
    });

    const mat2 = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      wireframe: true,
      side: THREE.DoubleSide

    });

    const planet = new THREE.Mesh(geom, mat);
    planet.scale.x = planet.scale.y = planet.scale.z = 16;
    this.circle.add(planet);

    const planet2 = new THREE.Mesh(geom2, mat2);
    planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
    this.skelet.add(planet2);

    const ambientLight = new THREE.AmbientLight(0x999999 );
    this.scene.add(ambientLight);

    let lights = [];
    lights[0] = new THREE.DirectionalLight( 0xffffff, 1 );
    lights[0].position.set( 1, 0, 0 );
    lights[1] = new THREE.DirectionalLight( 0x11E8BB, 1 );
    lights[1].position.set( 0.75, 1, 0.5 );
    lights[2] = new THREE.DirectionalLight( 0x8200C9, 1 );
    lights[2].position.set( -0.75, -1, 0.5 );
    this.scene.add( lights[0] );
    this.scene.add( lights[1] );
    this.scene.add( lights[2] );

    const animate = () => {
      requestAnimationFrame(animate);

      // const elapsedTime = this.clock.getElapsedTime()
      const elapsedTime = 10

      this.circle.rotation.x -= 0.0020;
      this.circle.rotation.y -= 0.0030;

      this.skelet.rotation.x -= 0.0010;
      this.skelet.rotation.y += 0.0020;

      this.particle.rotation.x -= 0.0010;
      this.particle.rotation.y += 0.0020;

      fromEvent(document.body, 'mousemove').subscribe((e: any) => {
        this.particle.rotation.x = -this.mouseY * (elapsedTime * 0.00004);
        this.particle.rotation.y = -this.mouseX * (elapsedTime * 0.00004);

        this.circle.rotation.x = this.mouseY * (elapsedTime * 0.00004);
        this.circle.rotation.y = this.mouseX * (elapsedTime * 0.00004);

        this.skelet.rotation.x = this.mouseY * (elapsedTime * 0.00008);
        this.skelet.rotation.y = this.mouseX * (elapsedTime * 0.00008);
      });

      this.renderer.clear();

      this.renderer.render( this.scene, this.camera )
    }

    animate();


    window.addEventListener('resize', this.onWindowResize, false);

  };

  animateParticles() {
    fromEvent(document.body, 'mousemove').subscribe((e: any) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });
  }

  public onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

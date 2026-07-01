import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ScreenFrame from "./ScreenFrame";
import { ScreenHeader, ScreenFooter } from "./ScreenHeaderFooter";
import Divider from "./Divider";

const LOCATIONS = [
  { name: "Hamburg", lat: 53.55, lng: 10.0, note: "IB Diploma — ISH" },
  {
    name: "Gothenburg",
    lat: 57.7,
    lng: 11.97,
    note: "BSc Software Engineering",
  },
  {
    name: "Linköping",
    lat: 58.41,
    lng: 15.62,
    note: "Swedish Language Studies",
  },
  { name: "Växjö", lat: 56.88, lng: 14.81, note: "Linnaeus Universitet" },
  { name: "Stockholm", lat: 59.33, lng: 18.07, note: "Visited" },
  { name: "Mumbai", lat: 19.13, lng: 72.86, note: "Visited" },
  { name: "Stockholm", lat: 59.33, lng: 18.07, note: "Visited" },
  { name: "Mumbai", lat: 19.08, lng: 72.88, note: "Visited" },
  { name: "München", lat: 48.14, lng: 11.58, note: "Visited" },
  { name: "San Francisco", lat: 37.77, lng: -122.42, note: "Visited" },
  { name: "Seattle", lat: 47.61, lng: -122.33, note: "Visited" },
  { name: "Lillehammer", lat: 61.11, lng: 10.47, note: "Visited" },
  { name: "Stavanger", lat: 58.97, lng: 5.73, note: "Visited" },
  { name: "Delhi", lat: 28.61, lng: 77.21, note: "Visited" },
  { name: "Pune", lat: 18.52, lng: 73.86, note: "Visited" },
  { name: "Panaji", lat: 15.49, lng: 73.83, note: "Visited" },
  { name: "Loliem", lat: 15.02, lng: 74.02, note: "Visited" },
  { name: "Kolkata", lat: 22.57, lng: 88.36, note: "Visited" },
  { name: "Frankfurt", lat: 50.11, lng: 8.68, note: "Visited" },
  { name: "Dresden", lat: 51.05, lng: 13.74, note: "Visited" },
  { name: "Doha", lat: 25.29, lng: 51.53, note: "Visited" },
  { name: "Athens", lat: 37.98, lng: 23.73, note: "Visited" },
  { name: "Sydney", lat: -33.87, lng: 151.21, note: "Visited" },
  { name: "Cairns", lat: -16.92, lng: 145.77, note: "Visited" },
  { name: "Helsinki", lat: 60.17, lng: 24.94, note: "Visited" },
  { name: "Rovaniemi", lat: 66.5, lng: 25.73, note: "Visited" },
  { name: "Berlin", lat: 52.52, lng: 13.4, note: "Visited" },
  { name: "Yosemite", lat: 37.87, lng: -119.54, note: "Visited" },
  { name: "New York", lat: 40.71, lng: -74.01, note: "Visited" },
  { name: "Kuala Lumpur", lat: 3.14, lng: 101.69, note: "Visited" },
  { name: "Singapore", lat: 1.35, lng: 103.82, note: "Visited" },
  { name: "Jakarta", lat: -6.21, lng: 106.85, note: "Visited" },
  { name: "Geneva", lat: 46.2, lng: 6.15, note: "Visited" },
  { name: "Stuttgart", lat: 48.78, lng: 9.18, note: "Visited" },
  { name: "Copenhagen", lat: 55.68, lng: 12.57, note: "Visited" },
  { name: "Tallinn", lat: 59.44, lng: 24.75, note: "Visited" },
  { name: "St. Petersburg", lat: 59.93, lng: 30.36, note: "Visited" },
  { name: "Jaipur", lat: 26.91, lng: 75.79, note: "Visited" },
  { name: "Amritsar", lat: 31.63, lng: 74.87, note: "Visited" },
  { name: "Vrindavan", lat: 27.58, lng: 77.7, note: "Visited" },
  { name: "Gokarna", lat: 14.55, lng: 74.32, note: "Visited" },
  { name: "Tirupati", lat: 13.63, lng: 79.42, note: "Visited" },
  { name: "Jönköping", lat: 57.78, lng: 14.16, note: "Visited" },
];

const LOCATION_WISHLIST = [
  { name: "Derby", lat: 52.9225, lng: -1.4746, note: "Pending" },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503, note: "Pending" },
  { name: "Beijing", lat: 39.9042, lng: 116.4074, note: "Pending" },
  { name: "Svalbard", lat: 78.2232, lng: 15.6267, note: "Pending" },
  { name: "Cape Town", lat: -33.92, lng: 18.42, note: "Pending" },
];

const GEOJSON_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_land.geojson";

function latLngToVec3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function buildLandLines(
  geojson: any,
  radius: number,
  mat: THREE.LineBasicMaterial
): THREE.Group {
  const group = new THREE.Group();

  const processRing = (coords: [number, number][]) => {
    const points: THREE.Vector3[] = coords.map(([lng, lat]) =>
      latLngToVec3(lat, lng, radius)
    );
    if (points.length < 2) return;
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    group.add(new THREE.Line(geo, mat));
  };

  for (const feature of geojson.features) {
    const { type, coordinates } = feature.geometry;
    if (type === "Polygon") {
      for (const ring of coordinates) processRing(ring);
    } else if (type === "MultiPolygon") {
      for (const polygon of coordinates)
        for (const ring of polygon) processRing(ring);
    }
  }

  return group;
}

export default function TravelGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<(typeof LOCATIONS)[0] | null>(null);
  const [tooltip, setTooltip] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const W = el.clientWidth;
    const H = el.clientHeight;
    const RADIUS = 1;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Scene / camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
    camera.position.z = 2.8;

    // Solid inner sphere
    const solidMat = new THREE.MeshBasicMaterial({
      color: 0x000d00,
      transparent: true,
      opacity: 0.92,
    });
    scene.add(
      new THREE.Mesh(new THREE.SphereGeometry(RADIUS * 0.995, 48, 48), solidMat)
    );

    // Atmosphere glow
    const atmosMat = new THREE.MeshBasicMaterial({
      color: 0x00ff41,
      transparent: true,
      opacity: 0.045,
      side: THREE.BackSide,
    });
    const atmosMesh = new THREE.Mesh(
      new THREE.SphereGeometry(RADIUS * 1.1, 48, 48),
      atmosMat
    );
    scene.add(atmosMesh);

    // Sparse lat/lng grid
    const gridGroup = new THREE.Group();
    const gridMat = new THREE.LineBasicMaterial({
      color: 0x00cc33,
      transparent: true,
      opacity: 0.1,
    });
    for (let lat = -75; lat <= 75; lat += 15) {
      const pts: THREE.Vector3[] = [];
      for (let lng = 0; lng <= 360; lng += 3)
        pts.push(latLngToVec3(lat, lng - 180, RADIUS * 1.001));
      gridGroup.add(
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat)
      );
    }
    for (let lng = 0; lng < 360; lng += 15) {
      const pts: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 3)
        pts.push(latLngToVec3(lat, lng, RADIUS * 1.001));
      gridGroup.add(
        new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), gridMat)
      );
    }
    scene.add(gridGroup);

    // Equator + prime meridian
    const accentMat = new THREE.LineBasicMaterial({
      color: 0x00ff41,
      transparent: true,
      opacity: 0.3,
    });
    const eqPts: THREE.Vector3[] = [];
    for (let lng = 0; lng <= 360; lng++)
      eqPts.push(latLngToVec3(0, lng - 180, RADIUS * 1.002));
    scene.add(
      new THREE.Line(new THREE.BufferGeometry().setFromPoints(eqPts), accentMat)
    );
    const pmPts: THREE.Vector3[] = [];
    for (let lat = -90; lat <= 90; lat++)
      pmPts.push(latLngToVec3(lat, 0, RADIUS * 1.002));
    scene.add(
      new THREE.Line(new THREE.BufferGeometry().setFromPoints(pmPts), accentMat)
    );

    // Land group placeholder — filled after fetch
    const landGroup = new THREE.Group();
    scene.add(landGroup);

    // Markers
    const markerGroup = new THREE.Group();
    const markerMeshes: {
      mesh: THREE.Mesh;
      ring: THREE.Mesh;
      location: (typeof LOCATIONS)[0];
    }[] = [];

    // replace the LOCATIONS.forEach block with this:

    const buildMarkers = (
      locations: typeof LOCATIONS,
      color: number,
      isWishlist: boolean
    ) => {
      locations.forEach((loc) => {
        const pos = latLngToVec3(loc.lat, loc.lng, RADIUS * 1.018);

        const ringMat = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.6,
          side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(0.028, 0.042, 20),
          ringMat
        );
        ring.position.copy(pos);
        ring.lookAt(pos.clone().multiplyScalar(2));
        markerGroup.add(ring);

        const ring2Mat = new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.2,
          side: THREE.DoubleSide,
        });
        const ring2 = new THREE.Mesh(
          new THREE.RingGeometry(0.05, 0.058, 20),
          ring2Mat
        );
        ring2.position.copy(pos);
        ring2.lookAt(pos.clone().multiplyScalar(2));
        markerGroup.add(ring2);

        // wishlist markers get a dashed/hollow look — no filled dot, just rings
        if (!isWishlist) {
          const dotMat = new THREE.MeshBasicMaterial({
            color,
            side: THREE.DoubleSide,
          });
          const dot = new THREE.Mesh(
            new THREE.CircleGeometry(0.016, 12),
            dotMat
          );
          dot.position.copy(pos);
          dot.lookAt(pos.clone().multiplyScalar(2));
          markerGroup.add(dot);
        }

        const spikeGeo = new THREE.BufferGeometry().setFromPoints([
          pos.clone(),
          pos.clone().multiplyScalar(1.045),
        ]);
        markerGroup.add(
          new THREE.Line(
            spikeGeo,
            new THREE.LineBasicMaterial({
              color,
              transparent: true,
              opacity: 0.85,
            })
          )
        );

        const dotForRaycasting = new THREE.Mesh(
          new THREE.CircleGeometry(0.016, 12),
          new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide,
          })
        );
        dotForRaycasting.position.copy(pos);
        dotForRaycasting.lookAt(pos.clone().multiplyScalar(2));
        markerGroup.add(dotForRaycasting);

        markerMeshes.push({ mesh: dotForRaycasting, ring, location: loc });
      });
    };

    buildMarkers(LOCATIONS, 0x00ff41, false); // green — visited
    buildMarkers(LOCATION_WISHLIST, 0xffa500, true); // amber — wishlist

    scene.add(markerGroup);

    // Globe group — tilt like a real globe
    const globeGroup = new THREE.Group();
    globeGroup.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(RADIUS * 0.995, 48, 48),
        solidMat
      ),
      gridGroup,
      landGroup,
      markerGroup
    );
    globeGroup.rotation.z = THREE.MathUtils.degToRad(15);

    // Re-add everything under globeGroup for unified rotation
    scene.clear();
    globeGroup.add(
      new THREE.Mesh(
        new THREE.SphereGeometry(RADIUS * 0.995, 48, 48),
        solidMat
      ),
      atmosMesh,
      gridGroup,
      landGroup,
      markerGroup
    );
    // Equator/PM need to be in the group too
    const eqLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(eqPts),
      accentMat
    );
    const pmLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(pmPts),
      accentMat
    );
    globeGroup.add(eqLine, pmLine);
    scene.add(globeGroup);

    // Fetch GeoJSON land
    const landMat = new THREE.LineBasicMaterial({
      color: 0x00ff41,
      transparent: true,
      opacity: 0.55,
    });

    fetch(GEOJSON_URL)
      .then((r) => r.json())
      .then((geo) => {
        const lines = buildLandLines(geo, RADIUS * 1.002, landMat);
        landGroup.add(...lines.children);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Drag / hover
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let velX = 0;
    let velY = 0;
    let autoRotate = true;
    let autoTimer: ReturnType<typeof setTimeout>;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      autoRotate = false;
      clearTimeout(autoTimer);
      prevMouse = { x: e.clientX, y: e.clientY };
      velX = 0;
      velY = 0;
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      if (!isDragging) {
        const mouse = new THREE.Vector2(
          ((e.clientX - rect.left) / W) * 2 - 1,
          -((e.clientY - rect.top) / H) * 2 + 1
        );
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(
          markerMeshes.map((m) => m.mesh)
        );
        if (hits.length > 0) {
          const hit = markerMeshes.find((m) => m.mesh === hits[0].object);
          if (hit) {
            setHovered(hit.location);
            setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            el.style.cursor = "pointer";
          }
        } else {
          setHovered(null);
          el.style.cursor = "grab";
        }
        return;
      }

      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      velX = dx * 0.005;
      velY = dy * 0.005;
      globeGroup.rotation.y += velX;
      globeGroup.rotation.x = Math.max(
        -Math.PI / 2.5,
        Math.min(Math.PI / 2.5, globeGroup.rotation.x + velY)
      );
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      autoTimer = setTimeout(() => {
        autoRotate = true;
      }, 3000);
    };

    el.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    el.style.cursor = "grab";

    // Scroll to zoom
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(
        1.6,
        Math.min(5, camera.position.z + e.deltaY * 0.005)
      );
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    // Animate
    let frameId: number;
    let t = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.035;

      if (autoRotate && !isDragging) {
        globeGroup.rotation.y += 0.0018;
      } else if (!isDragging) {
        velX *= 0.93;
        velY *= 0.93;
        globeGroup.rotation.y += velX;
        globeGroup.rotation.x = Math.max(
          -Math.PI / 2.5,
          Math.min(Math.PI / 2.5, globeGroup.rotation.x + velY)
        );
      }

      // Pulse rings
      markerMeshes.forEach(({ ring }, i) => {
        const s = 1 + 0.45 * Math.sin(t + i * 1.3);
        ring.scale.setScalar(s);
        (ring.material as THREE.MeshBasicMaterial).opacity =
          0.25 + 0.35 * Math.sin(t + i * 1.3);
      });

      // Atmosphere flicker
      atmosMat.opacity = 0.035 + 0.015 * Math.sin(t * 0.6);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nW = el.clientWidth;
      const nH = el.clientHeight;
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
      renderer.setSize(nW, nH);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(autoTimer);
      el.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <ScreenFrame minHeight="min-h-0">
      <ScreenHeader title="Planetary Survey — Theatres of Operation" />

      <div className="text-green-500 text-[11px] font-mono uppercase">
        // holographic cartograph active — {LOCATIONS.length} sectors logged —
        drag to rotate · scroll to zoom
      </div>

      <Divider />

      <div
        className="relative w-full border border-green-900/40"
        style={{ height: 520 }}
      >
        {/* corner brackets */}
        {[
          "top-0 left-0 border-t border-l",
          "top-0 right-0 border-t border-r",
          "bottom-0 left-0 border-b border-l",
          "bottom-0 right-0 border-b border-r",
        ].map((cls) => (
          <span
            key={cls}
            className={`absolute w-6 h-6 ${cls} border-green-700/60 z-10 pointer-events-none`}
          />
        ))}

        {/* scanlines */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 3px)",
          }}
        />

        {/* loading overlay */}
        {loading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 font-mono text-green-500 text-[11px] uppercase space-y-2">
            <span className="animate-pulse">
              // fetching cartographic data from Omnissiah vaults...
            </span>
            <span className="text-green-800 animate-pulse text-[9px]">
              ne_50m_land.geojson — stand by
            </span>
          </div>
        )}

        <div ref={mountRef} className="w-full h-full" />

        {/* Tooltip */}
        {hovered && (
          <div
            className="absolute z-20 pointer-events-none font-mono uppercase border border-green-700 bg-black/95 px-3 py-2 text-[11px] shadow-[0_0_14px_rgba(34,197,94,0.35)]"
            style={{ left: tooltip.x + 16, top: tooltip.y - 36 }}
          >
            <p className="text-green-300 tracking-wide">{hovered.name}</p>
            <p className="text-green-700 normal-case">{hovered.note}</p>
          </div>
        )}

        {/* HUD */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none font-mono text-[9px] text-green-800 uppercase space-y-0.5">
          <p>Holo-projector: online</p>
          <p>Mechadendrite uplink: stable</p>
          <p>Cartograph resolution: 50m</p>
          <p>Data source: natural earth</p>
        </div>
        <div className="absolute bottom-3 right-3 z-10 pointer-events-none font-mono text-[9px] text-green-800 uppercase text-right space-y-0.5">
          <p>Adeptus Mechanicus</p>
          <p>Cartographic Division</p>
          <p>Theatrum Imperialis</p>
        </div>
      </div>

      <Divider />

      <Divider />

      {/* Visited legend */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
        <p className="text-green-600 text-[10px] font-mono uppercase tracking-widest">
          // sectors visited
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
        {LOCATIONS.map((loc) => (
          <div
            key={loc.name}
            className="border border-green-900/50 px-3 py-2 flex items-start gap-2"
          >
            <span className="text-green-400 mt-0.5 shrink-0 animate-pulse">
              ✠
            </span>
            <div>
              <p className="text-green-300 text-[11px] uppercase tracking-wide font-mono">
                {loc.name}
              </p>
              <p className="text-green-700 text-[10px] normal-case font-mono">
                {loc.note}
              </p>
              <p className="text-green-900 text-[9px] font-mono">
                {loc.lat.toFixed(2)}°N {loc.lng.toFixed(2)}°E
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Wishlist legend */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
        <p className="text-amber-600 text-[10px] font-mono uppercase tracking-widest">
          // target sectors — pending deployment
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {LOCATION_WISHLIST.map((loc) => (
          <div
            key={loc.name}
            className="border border-amber-900/30 px-3 py-2 flex items-start gap-2"
          >
            <span className="text-amber-600 mt-0.5 shrink-0 animate-pulse">
              ◎
            </span>
            <div>
              <p className="text-amber-400 text-[11px] uppercase tracking-wide font-mono">
                {loc.name}
              </p>
              <p className="text-amber-700 text-[10px] normal-case font-mono">
                {loc.note}
              </p>
              <p className="text-amber-900 text-[9px] font-mono">
                {loc.lat.toFixed(2)}°N {loc.lng.toFixed(2)}°E
              </p>
            </div>
          </div>
        ))}
      </div>

      <ScreenFooter>Terra Incognita — Sectors Pending Exploration</ScreenFooter>
    </ScreenFrame>
  );
}

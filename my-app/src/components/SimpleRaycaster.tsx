import React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense

interface ComponentProps {
  showControls: boolean;
}

const SimpleRaycasterComponent: React.FC<ComponentProps> = (
  props: ComponentProps
) => {
  const maparr = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
	0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
	0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0,
	0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,
	0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1,
	1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1,
  ];

  const mapX = 16;
  const mapY = 16;
  const mapS = 32;

  const player_speed = 10;

  const PRAY = 60;

  const PLAYER_WIDTH = 5;
  const PLAYER_HEIGHT = 5;
  const WINDOW_HEIGHT = 640;
  const WINDOW_WIDTH = 480;
  const RAYCOUNT = 60;
  const DOF = 12;

  let px = 100;
  let py = WINDOW_HEIGHT / 2;
  let pdx = 0;
  let pdy = 0;
  let pa = 45;

  const degToRad = (angle: number) => {
	return angle * (Math.PI / 180);
  };

  const radToDeg = (angle: number) => {
	return angle * (180 / Math.PI);
  };

  const fixAngle = (angle: number) => {
	if (angle > 359) {
	  angle -= 360;
	}
	if (angle < 0) {
	  angle += 360;
	}
	return angle;
  };

  const drawRays = (p5: p5Types) => {
	let ra, xo, yo, ax, ay, dof, vx, vy, hx, hy, disV, disH, rx, ry;

	p5.fill(0, 0, 255);

	vx = 0;
	vy = 0;
	hx = 0;
	hy = 0;
	rx = 0;
	ry = 0;
	disV = 0;
	disH = 0;

	// ra = pa-30;
	dof = 0;
	ra = fixAngle(pa + 30);
	let rayCount = 0;

	for (let i = 0; i < RAYCOUNT; i++) {
	  //---Vertical---
	  dof = 0;
	  disV = 100000;
	  let Tan = Math.tan(degToRad(ra));

	  if (Math.cos(degToRad(ra)) > 0.001) {
		rx = ((px >> 5) << 5) + mapS;
		ry = (px - rx) * Tan + py;
		xo = mapS;
		yo = -xo * Tan;
	  } //looking left
	  else if (Math.cos(degToRad(ra)) < -0.001) {
		rx = ((px >> 5) << 5) - 0.0001;
		ry = (px - rx) * Tan + py;
		xo = -mapS;
		yo = -xo * Tan;
	  } //looking right
	  else {
		rx = px;
		ry = py;
		dof = DOF;
		xo = 0;
		yo = 0;
	  } //looking up or down. no hit

	  while (dof < DOF) {
		let mx = rx >> 5;
		let my = ry >> 5;
		let mp = my * mapX + mx;
		if (mp > 0 && mp < mapX * mapY && maparr[mp] == 1) {
		  dof = DOF;
		  disV =
			Math.cos(degToRad(ra)) * (rx - px) -
			Math.sin(degToRad(ra)) * (ry - py);
		} //hit
		else {
		  rx += xo;
		  ry += yo;
		  dof += 1;
		} //check next horizontal
	  }
	  vx = rx;
	  vy = ry;

	  //---Horizontal---
	  dof = 0;
	  disH = 100000;
	  Tan = 1.0 / Tan;

	  if (Math.sin(degToRad(ra)) > 0.001) {
		ry = ((py >> 5) << 5) - 0.0001;
		rx = (py - ry) * Tan + px;
		yo = -mapS;
		xo = -yo * Tan;
	  } //looking up
	  else if (Math.sin(degToRad(ra)) < -0.001) {
		ry = ((py >> 5) << 5) + mapS;
		rx = (py - ry) * Tan + px;
		yo = mapS;
		xo = -yo * Tan;
	  } //looking down
	  else {
		rx = px;
		ry = py;
		dof = DOF;
		xo = 0;
		yo = 0;
	  } //looking straight left or right

	  while (dof < DOF) {
		let mx = rx >> 5;
		let my = ry >> 5;
		let mp = my * mapX + mx;
		if (mp > 0 && mp < mapX * mapY && maparr[mp] == 1) {
		  dof = DOF;
		  disH =
			Math.cos(degToRad(ra)) * (rx - px) -
			Math.sin(degToRad(ra)) * (ry - py);
		} //hit
		else {
		  rx += xo;
		  ry += yo;
		  dof += 1;
		} //check next horizontal
	  }

	  let pixelX;
	  let textureSize = 16;
	  let wallCol = [0, 200, 0, 255];

	  if (disV < disH) {
		// Looking at Vertical
		rx = vx;
		ry = vy;
		disH = disV;

		pixelX = ry % 64;
	  } //horizontal hit first
	  else {
		pixelX = rx % 64;
	  }

	  let normalizedPixelX = pixelX / 64;
	  p5.strokeWeight(1);
	  if (rx < WINDOW_WIDTH && ry < WINDOW_HEIGHT) p5.line(px, py, rx, ry); //draw 2D ray

	  let ca = fixAngle(pa - ra);
	  disH = disH * Math.cos(degToRad(ca)); //fix fisheye
	  let lineH = (mapS * WINDOW_HEIGHT) / disH;
	  if (lineH > WINDOW_HEIGHT) {
		lineH = WINDOW_HEIGHT;
	  } //line height and limit
	  let lineOff = WINDOW_HEIGHT / 2 - (lineH >> 1); //line offset

	  for (let y = 0.0; y <= lineH + 1; y += lineH / textureSize) {
		let brightness = y;
		if (brightness > 255) brightness = 255;
		p5.fill(wallCol[0], brightness, wallCol[2]);
		if (normalizedPixelX < 0.1) {
		  p5.fill(0, 25 * (brightness / 255), 0);
		}
		if (y > lineH - lineH / textureSize) {
		  p5.fill(0, 0, 0);
		}
		p5.strokeWeight(0);
		p5.rect(
		  WINDOW_WIDTH + rayCount * ((WINDOW_WIDTH * 2) / RAYCOUNT),
		  lineOff + y + (player_speed - 1) * 2,
		  (WINDOW_WIDTH * 2) / RAYCOUNT,
		  lineH / textureSize + 1
		);
	  }
	  rayCount++;
	  ra = fixAngle(ra - 60.0 / RAYCOUNT); //go to next ray
	}
  };

  const drawPlayer = (p5: p5Types) => {
	p5.fill(0, 255, 0);
	p5.rect(
	  px - PLAYER_WIDTH / 2,
	  py - PLAYER_WIDTH / 2,
	  PLAYER_WIDTH,
	  PLAYER_WIDTH
	);

	p5.line(
	  px,
	  py,
	  px + PRAY * Math.cos(degToRad(pa)),
	  py - PRAY * Math.sin(degToRad(pa))
	);
  };

  const drawMap = (p5: p5Types) => {
	for (let y = 0; y < mapY; y++) {
	  for (let x = 0; x < mapX; x++) {
		if (maparr[y * mapX + x] == 1) {
		  p5.fill(p5.color(255, 0, 0));
		} else {
		  p5.fill(p5.color(0, 255, 0));
		}

		let xo = x * (WINDOW_WIDTH / mapX);
		let yo = y * (WINDOW_WIDTH / mapY);

		p5.rect(xo + 1, yo + 1, WINDOW_WIDTH / mapX, WINDOW_HEIGHT / mapY);
	  }
	}
  };

  const turnLeft = () => {
	pa += 5;
	pa = fixAngle(pa);
	pa += 2;
	pa = fixAngle(pa);
	pdx = Math.cos(degToRad(pa));
	pdy = -Math.sin(degToRad(pa));
	pa -= 2;
	pa = fixAngle(pa);
	pdx = Math.cos(degToRad(pa));
	pdy = -Math.sin(degToRad(pa));
  };

  const turnRight = () => {
	pa -= 5;
	pa = fixAngle(pa);
	pa += 2;
	pa = fixAngle(pa);
	pdx = Math.cos(degToRad(pa));
	pdy = -Math.sin(degToRad(pa));
	pa -= 2;
	pa = fixAngle(pa);
	pdx = Math.cos(degToRad(pa));
	pdy = -Math.sin(degToRad(pa));
  };

  const moveForward = () => {
	px += pdx * player_speed;
	py += pdy * player_speed;
  };

  const moveBackward = () => {
	px -= pdx * player_speed;
	py -= pdy * player_speed;
  };

  document.addEventListener("keydown", function (event) {
	if (event.key == "w" || event.key == "ArrowUp" || event.key == "W") {
	  moveForward();
	}
	if (event.key == "s" || event.key == "ArrowDown" || event.key == "S") {
	  moveBackward();
	}
	if (event.key == "a" || event.key == "ArrowLeft" || event.key == "A") {
	  turnLeft();
	}
	if (event.key == "d" || event.key == "ArrowRight" || event.key == "D") {
	  turnRight();
	}
  });

  const setup = (p5: p5Types, canvasParentRef: Element) => {
	p5.createCanvas(WINDOW_WIDTH * 3, WINDOW_HEIGHT).parent(canvasParentRef);
	turnLeft();
	turnRight();
  };

  const draw = (p5: p5Types) => {
	p5.background(220);
	p5.rect(
	  WINDOW_WIDTH,
	  WINDOW_HEIGHT / 2,
	  WINDOW_WIDTH * 2,
	  WINDOW_HEIGHT / 2
	);
	p5.fill(0, 0, 100);
	p5.rect(WINDOW_WIDTH, 0, WINDOW_WIDTH * 2, WINDOW_HEIGHT / 2);
	p5.fill(50, 0, 0);
	p5.rect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
	p5.strokeWeight(1);
	drawMap(p5);
	drawPlayer(p5);
	drawRays(p5);
  };

  if (props.showControls) {
	return (
	  <div>
		<Sketch setup={setup} draw={draw} />

		<div className="row">
		  <div className="col">
			<div className="keypad">
			  <span></span>
			  <button className="nes-btn" onClick={moveForward}>
				^
			  </button>
			  <span></span>
			  <button className="nes-btn" onClick={turnLeft}>
				&lt;
			  </button>
			  <span></span>
			  <button className="nes-btn" onClick={turnRight}>
				&gt;
			  </button>
			  <span></span>
			  <button className="nes-btn" onClick={moveBackward}>
				v
			  </button>
			</div>
		  </div>
		</div>
	  </div>
	);
  }

  return <Sketch setup={setup} draw={draw} />;
};

export default SimpleRaycasterComponent;

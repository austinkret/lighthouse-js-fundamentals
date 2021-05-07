// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function(radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(radius, height) {
  return PI * Math.pow(radius, 2) * (height / 3);
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(height, width, depth) {
  return width * depth * height;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  let volume = 0;
  for (shape of solids) {
    switch (shape) {
    case largeSphere:
      volume += sphereVolume(largeSphere.radius);
      break;
    case smallSphere:
      volume += sphereVolume(smallSphere.radius);
      break;
    case cone:
      volume += coneVolume(cone.radius, cone.height);
      break;
    case prism:
      volume += prismVolume(prism.height, prism.depth, prism.width);
      break;
    }
  }
  return volume;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

let w = window.innerWidth;
let h = window.innerHeight;

function setup() {
  canvas = createCanvas(w, h);
}

let pressOnce = false;

function mousePressed() {

if(pressOnce==false){

  // To process the sound
  const filter = new Tone.Filter().toDestination();
  filter.set({
    frequency: map(Math.random(), 0, 1, 1000, 20000 ),
    type: "lowpass",
  });

  // A grain player
  const py1 = new Tone.Player(
    "https://surfingrio.github.io/snd/rt.mp3"
  ).connect(filter);

  const py2 = new Tone.Player(
    "https://surfingrio.github.io/snd/a1.mp3"
  ).connect(filter);

  const py3 = new Tone.Player(
    "https://surfingrio.github.io/snd/a2.mp3"
  ).connect(filter);

  const py4 = new Tone.Player(
    "https://surfingrio.github.io/snd/a3.mp3"
  ).connect(filter);

  const py5 = new Tone.Player(
    "https://surfingrio.github.io/snd/a4.mp3"
  ).connect(filter);

  const py6 = new Tone.Player(
    "https://surfingrio.github.io/snd/mcuts.mp3"
  ).connect(filter);

  py1.playbackRate = map(Math.random(), 0, 1, 0.2, 1);
  py1.grainSize = map(Math.random(), 0, 1, 0.01, 0.8);
  py1.loop = true;
  py1.autostart = true;

  py2.playbackRate = map(Math.random(), 0, 1, 0.2, 1);
  py2.grainSize = map(Math.random(), 0, 1, 0.01, 0.8);
  py2.loop = true;
  py2.autostart = true;

  py3.playbackRate = map(Math.random(), 0, 1, 0.2, 1);
  py3.grainSize = map(Math.random(), 0, 1, 0.01, 0.8);
  py3.loop = true;
  py3.autostart = true;

  py4.playbackRate = map(Math.random(), 0, 1, 0.2, 1);
  py4.grainSize = map(Math.random(), 0, 1, 0.01, 0.8);
  py4.loop = true;
  py4.autostart = true;

  py5.playbackRate = map(Math.random(), 0, 1, 0.2, 1);
  py5.grainSize = map(Math.random(), 0, 1, 0.01, 0.8);
  py5.loop = true;
  py5.autostart = true;

  py6.playbackRate = map(Math.random(), 0, 1, 0.2, 1);
  py6.grainSize = map(Math.random(), 0, 1, 0.01, 0.8);
  py6.loop = true;
  py6.autostart = true;

  let pressOnce=true;
}}

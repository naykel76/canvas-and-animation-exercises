import { Canvas } from './canvas-exercise/canvas';
import { handleKeyPress } from './canvas-exercise/controls';
import { SetupConfig } from './canvas-exercise/setup';
import { Config } from './defs';
import './styles.scss'

// ==========================================================================

// Create an instance of the SetupConfig with initial settings
const setup = new SetupConfig({ width: 400, height: 400, scale: 20 });

// Direct access to the setup config
const config: Config = setup.config;

// Get the canvas rendering context using the getCanvasContext method
const ctx: CanvasRenderingContext2D = setup.getCanvasContext();

// initialise the canvas and pass in the context
let canvas: Canvas = new Canvas(ctx);

// ==========================================================================

document.addEventListener('keydown', (event) => handleKeyPress(event, config, canvas));

// ==========================================================================

document.querySelector('.start-interval')?.addEventListener('click', () => startInterval());
document.querySelector('.stop-interval')?.addEventListener('click', () => stopInterval());

let stepInterval: number | undefined; // Declare variable for reference

function startInterval(time: number = 500) {
    let piece = canvas.piece;
    // prevents interval from compounding
    if (!stepInterval) {
        stepInterval = setInterval(() => {
            console.log(piece.getCurrentPosition());
            piece.move({ x: 1, y: 0 })
        }, time)
    }
}

function stopInterval() {
    if (stepInterval) {
        clearInterval(stepInterval);
        stepInterval = undefined; // Reset the interval ID
    }
}

// ==========================================================================

document.querySelector('.start-animation')?.addEventListener('click', () => startAnimation());
document.querySelector('.stop-animation')?.addEventListener('click', () => stopAnimation());

let animateId: number; // Declare variable for reference
let speed = 1 / 60;
let animationRunning = false; // Track whether animation is already running

function startAnimation() {
    if (!animationRunning) {
        animationRunning = true; // Set animation as running
        animate();
    }
}

function animate() {
    let piece = canvas.piece;
    piece.move({ x: speed, y: 0 })
    // Use requestAnimationFrame for the next frame
    animateId = requestAnimationFrame(animate);
}

function stopAnimation() {
    cancelAnimationFrame(animateId);
    animationRunning = false; // Reset animation status
}

// ==========================================================================

import { Canvas } from './canvas-exercise/canvas';
import { handleKeyPress } from './canvas-exercise/controls';
import { setup } from './canvas-exercise/setup';
import './styles.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container flex ha-c gg-2 py-5">
    <canvas id="canvas" class="bdr-red bdr-3"></canvas>
</div>
`

// ==========================================================================

// initialise the setup and make ctx available globally
let ctx: CanvasRenderingContext2D = setup();

// initialise the canvas and pass in the context
let canvas: Canvas = new Canvas(ctx);

// ==========================================================================

document.addEventListener('keydown', (event) => handleKeyPress(event, ctx, canvas));

// ==========================================================================

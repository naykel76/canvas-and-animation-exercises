import { config } from './setup';
import { KEYS } from '../defs.d';
import { Canvas } from './canvas';

export function handleKeyPress(event: KeyboardEvent, ctx: CanvasRenderingContext2D, canvas: Canvas): void {

    const key: string = event.key;

    if (KEYS.hasOwnProperty(key)) {

        event.preventDefault();

        let piece = canvas.piece;

        /**
         * Position before moving
         */
        const position = piece.getCurrentPosition();

        if (event.key == 'ArrowLeft' && piece.x > 0) {
            piece.move({ x: -1, y: 0 });
        } else if (event.key == 'ArrowRight' && position.x < ctx.canvas.width / config.scale - 1) {
            piece.move({ x: 1, y: 0 });
        } else if (event.key == 'ArrowUp' && position.y > 0) {
            piece.move({ x: 0, y: -1 });
        } else if (event.key == 'ArrowDown' && position.y < ctx.canvas.height / config.scale - 1) {
            piece.move({ x: 0, y: 1 });
        }
    }
}

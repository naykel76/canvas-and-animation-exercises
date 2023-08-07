import { KEYS } from '../defs.d';
import { Canvas } from './canvas';

export function handleKeyPress(event: KeyboardEvent, ctx: CanvasRenderingContext2D, canvas: Canvas): void {

    const key: string = event.key;

    if (KEYS.hasOwnProperty(key)) {

        event.preventDefault();

        let piece = canvas.piece;

        if (event.key == 'ArrowLeft') {
            piece.move({ x: -1, y: 0 });
        } else if (event.key == 'ArrowRight') {
            piece.move({ x: 1, y: 0 });
        } else if (event.key == 'ArrowUp') {
            piece.move({ x: 0, y: -1 });
        } else if (event.key == 'ArrowDown') {
            piece.move({ x: 0, y: 1 });
        }
    }
}

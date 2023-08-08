import { Config, KEYS } from '../defs.d';
import { Canvas } from './canvas';

export function handleKeyPress(event: KeyboardEvent, config: Config, canvas: Canvas): void {

    const key: string = event.key;

    if (KEYS.hasOwnProperty(key)) {

        event.preventDefault();

        let piece = canvas.piece;

        /**
         * Position before moving
         */
        const pos = piece.getCurrentPosition();

        if (event.key == 'ArrowLeft' && piece.x > 0) {
            piece.move({ x: -1, y: 0 });
        } else if (event.key == 'ArrowRight' && pos.x < config.width / config.scale - 1) {
            piece.move({ x: 1, y: 0 });
        } else if (event.key == 'ArrowUp' && pos.y > 0) {
            piece.move({ x: 0, y: -1 });
        } else if (event.key == 'ArrowDown' && pos.y < config.height / config.scale - 1) {
            piece.move({ x: 0, y: 1 });
        }
    }
}

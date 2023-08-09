import { Position } from "../defs";

export class Piece {

    constructor(
        private ctx: CanvasRenderingContext2D,
        public x: number = 1,
        public y: number = 1,
        private color: string = 'orange',
        private shape = [
            [0, 0, 1, 0, 1, 0, 0],
            [1, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1],
            [0, 1, 0, 0, 0, 1, 0],
            [0, 0, 1, 1, 1, 0, 0]
        ]
    ) {
        this.render();
    }

    /**
     * Move the piece, clear the canvas and render in the new position
     * @param {Position} piece - The position by which to move the piece
     */
    move(piece: Position) {
        this.x = this.x + piece.x;
        this.y = this.y + piece.y;
        this.clear();
        this.render();
    }

    /**
     * Get the current position of the piece
     * @returns {Position} The x & y position of the piece
     */
    getCurrentPosition(): Position {
        return { x: this.x, y: this.y };
    }

    /**
     * Clear the entire canvas
     */
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    /**
     * Render the piece on the canvas
     */
    render() {
        this.ctx.fillStyle = this.color;
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value > 0) {
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }
}

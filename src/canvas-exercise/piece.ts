export class Piece {

    constructor(
        private ctx: CanvasRenderingContext2D,
        private x: number = 1,
        private y: number = 1,
        private color: string = 'orange',
        private scale: number = 1,
    ) {
        this.render();
    }

    /**
     * Render the piece on the canvas
     */
    render() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
    }
}

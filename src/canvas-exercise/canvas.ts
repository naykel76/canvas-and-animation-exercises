import { Piece } from "./piece";

export class Canvas {

    piece: Piece;

    constructor(private ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.piece = new Piece(this.ctx);
    }
}

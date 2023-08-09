import { Piece } from "./Piece";

export class Board {

    piece: Piece;

    constructor(private ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.piece = new Piece(this.ctx);
    }
}

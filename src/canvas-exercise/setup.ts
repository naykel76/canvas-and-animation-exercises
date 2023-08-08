import { Config } from "../defs";

export class SetupConfig {

    private ctx: CanvasRenderingContext2D | null = null;

    constructor(public config: Config) {
        this.setupCanvas();
    }

    /**
     * Sets up the canvas element and its rendering context.
     */
    setupCanvas(): void {
        // Find the canvas element
        const canvas = document.querySelector<HTMLCanvasElement>('#canvas');

        // Check if the canvas element exists
        if (!canvas) {
            throw new Error("Canvas element not found.");
        }

        // Get the 2D rendering context of the canvas
        this.ctx = canvas.getContext('2d');

        // If the context is available, configure the canvas properties
        if (this.ctx) {
            this.ctx.canvas.width = this.config.width;
            this.ctx.canvas.height = this.config.height;
            this.ctx.scale(this.config.scale, this.config.scale);
        } else {
            throw new Error("There is something wrong with the Canvas class.");
        }
    }

    /**
     * Getter method to access the canvas rendering context
     * @returns CanvasRenderingContext2D
     */
    getCanvasContext(): CanvasRenderingContext2D {
        if (!this.ctx) {
            throw new Error("Canvas rendering context is not available.");
        }
        return this.ctx;
    }
}


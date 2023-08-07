import { Config } from "../defs";

export const config: Config = {
    width: 400,
    height: 200,
    scale: 20
};

/**
 * Sets up the canvas and returns the rendering context.
 * @returns The 2D rendering context of the canvas or null if not available.
 */
export function setup(): CanvasRenderingContext2D {

    // Find the canvas element
    const canvas = document.querySelector<HTMLCanvasElement>('#canvas');

    // Check if the canvas element exists
    if (!canvas) {
        throw new Error("Canvas element not found.");
    }

    // Get the 2D rendering context of the canvas
    const ctx = canvas.getContext('2d');

    // If the context is available, configure the canvas properties
    if (ctx) {
        ctx.canvas.width = config.width;
        ctx.canvas.height = config.height;
        ctx.scale(config.scale, config.scale);

        // Return the context to make it available
        return ctx;
    }

    throw new Error("There is something wrong with the Canvas class.");

}



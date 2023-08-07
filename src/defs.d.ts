/**
 * Configuration settings for a graphical element.
 */
export interface Config {
    width: number;
    height: number;
    scale: number;
}

/**
 * { [key: string]: number }
 *
 * index signature to indicate that keys in your KEYS object are valid keys.
 */
export const KEYS: { [key: string]: number } = {
    ArrowLeft: 37,
    ArrowRight: 39,
    ArrowUp: 38,
    ArrowDown: 40
};

/**
 * 2D position in a coordinate system.
 */
export interface Position {
    x: number,
    y: number
}

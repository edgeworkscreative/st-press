interface HTMLAttributes {
    'onPress'?: (event: CustomEvent<void>) => void;
}
declare class PressEvents {
    private time;
    private threshold;
    private hasStarted;
    private startX;
    private startY;
    private moveX;
    private moveY;
    constructor(time?: number, threshold?: number);
    onStart(ev: MouseEvent | TouchEvent): void;
    onEnd(): void;
    onMove(ev: MouseEvent | TouchEvent): void;
}

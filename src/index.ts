interface HTMLAttributes {
	'onPress'?: (event: CustomEvent<void>) => void;
}

class PressEvents {
	private time: any;
	private threshold: any;
	private hasStarted: boolean;
	private startX: number;
	private startY: number;
	private moveX: number;
	private moveY: number;
	
	constructor(time: number = 251, threshold: number = 9) {
		this.time      = time;
		this.threshold = threshold;
		document.addEventListener('touchstart', this.onStart.bind(this), true);
		document.addEventListener('mousedown', this.onStart.bind(this), true);
		document.addEventListener('touchend', this.onEnd.bind(this), true);
		document.addEventListener('mouseup', this.onEnd.bind(this), true);
		document.addEventListener('touchmove', this.onMove.bind(this), true);
		document.addEventListener('mousemove', this.onMove.bind(this), true);
	}
	
	onStart(ev: MouseEvent | TouchEvent) {
		if (!this.hasStarted) {
			this.moveX = this.startX = (ev instanceof MouseEvent) ? ev.pageX : ev.touches[0].pageX;
			this.moveY = this.startY = (ev instanceof MouseEvent) ? ev.pageY : ev.touches[0].pageY;
			setTimeout(() => {
				if (this.hasStarted && Math.abs(this.startX - this.moveX) <= this.threshold && Math.abs(this.startY - this.moveY) <= this.threshold) {
					const path = (ev as any).path;
					for (let i = 0; i < path.length - 2; i++) {
						const el    = path[i];
						const event = new CustomEvent('press', {
							bubbles: false,
							detail:  el
						});
						el.dispatchEvent(event);
					}
					this.hasStarted = false;
				}
			}, this.time);
			this.hasStarted = true;
		}
	}
	
	onEnd() {
		this.hasStarted = false;
	}
	
	onMove(ev: MouseEvent | TouchEvent) {
		this.moveX = (ev instanceof MouseEvent) ? ev.pageX : ev.changedTouches[0].pageX;
		this.moveY = (ev instanceof MouseEvent) ? ev.pageY : ev.changedTouches[0].pageY;
	}
	
}

new PressEvents();
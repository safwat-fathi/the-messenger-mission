// SVGManager.ts
export class SVGManager {
	#svg: SVGSVGElement | null = null;

	constructor(svgElement: SVGSVGElement) {
		this.#svg = svgElement;
	}

	// Method to check if an element exists by ID
	elementExists(id: string): boolean {
		// Ensure we're constructing the selector as a string with a `#` prefix
		return this.#svg?.querySelector(id) !== null;
	}

	// Method to add elements (e.g., circles)
	addCircle(
		id: string,
		cx: number,
		cy: number,
		r: number,
		style: Partial<CSSStyleDeclaration> = {}
	) {
		if (!this.#svg) return;

		const element = this.#svg?.querySelector(`#${id}`);

		if (element) return;

		const circle = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"circle"
		);
		circle.setAttribute("id", id);
		circle.setAttribute("cx", cx.toString());
		circle.setAttribute("cy", cy.toString());
		circle.setAttribute("r", r.toString());
		this.applyStyles(circle, style);

		this.#svg.appendChild(circle);
	}

	drawPin(
		id: string,
		x: number,
		y: number,
		radius: number = 5,
		style: Partial<CSSStyleDeclaration> = {}
	) {
		if (!this.#svg) return;

		// Use the SVG namespace
		const svgNS = "http://www.w3.org/2000/svg";
		const pin = document.createElementNS(svgNS, "circle");
		pin.setAttribute("id", id);
		pin.setAttribute("cx", x.toString());
		pin.setAttribute("cy", y.toString());
		pin.setAttribute("r", radius.toString());

		// Apply styles
		this.applyStyles(pin, style);

		this.#svg.appendChild(pin);
	}

	getElement(id: string) {
		return this.#svg?.querySelector(id) as SVGSVGElement;
	}

	// Method to set the position of an existing element by ID
	setLocation(id: string, x: number, y: number) {
		const element = this.#svg?.querySelector<SVGElement>(id);

		if (element) {
			// Update the position based on the element type
			if (element instanceof SVGCircleElement) {
				element.setAttribute("cx", x.toString());
				element.setAttribute("cy", y.toString());
			} else if (element instanceof SVGRectElement) {
				element.setAttribute("x", x.toString());
				element.setAttribute("y", y.toString());
			} else {
				// For generic SVG elements (e.g., paths), you may need to set a transform attribute
				element.setAttribute("transform", `translate(${x}, ${y})`);
			}
		}
	}

	// Method to hide an element by ID
	hideElement(id: string) {
		const element = this.#svg?.querySelector(`#${id}`);
		if (element) {
			element.setAttribute("visibility", "hidden");
		}
	}

	// Method to show an element by ID
	showElement(id: string) {
		const element = this.#svg?.querySelector(`#${id}`);
		if (element) {
			element.setAttribute("visibility", "visible");
		}
	}

	hideAll(id: string) {
		this.#svg?.querySelectorAll(id).forEach(element => {
			element.setAttribute("visibility", "hidden");
		});
	}

	showAll(id: string) {
		this.#svg?.querySelectorAll(id).forEach(element => {
			element.setAttribute("visibility", "visible");
		});
	}

	// Method to apply styles to an element by ID
	applyStyles(element: SVGElement, styles: Partial<CSSStyleDeclaration>) {
		for (const [key, value] of Object.entries(styles)) {
			if (typeof value === "string") {
				element.style[key as any] = value;
			}
		}
	}
}

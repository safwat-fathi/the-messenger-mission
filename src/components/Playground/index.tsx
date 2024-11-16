import { useEffect, useRef } from "react";
import { SVGManager } from "../utils/svg";

const Playground = () => {
	const svgRef = useRef<SVGSVGElement>(null);
	const managerRef = useRef<SVGManager | null>(null);

	useEffect(() => {
		if (!svgRef.current) return;
		managerRef.current = new SVGManager(svgRef.current);

		return () => {
			if (managerRef.current) managerRef.current = null;
		};
	}, [svgRef]);

	const handleAddCircle = () => {
		managerRef.current?.addCircle("myCircle", 100, 100, 50, {
			stroke: "red",
			fill: "green",
		});
	};

	const handleHide = () => {
		managerRef.current?.hideElement("myCircle");
	};

	const handleShow = () => {
		managerRef.current?.showElement("myCircle");
	};

	return (
		<div>
			<svg ref={svgRef} width="200" height="200" />
			<button onClick={handleHide}>Hide Circle</button>
			<button onClick={handleShow}>Show Circle</button>
			<button onClick={handleAddCircle}>Add Circle</button>
		</div>
	);
};

export default Playground;

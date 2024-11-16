import data from "../../data";
import { useMapContext } from "../../contexts/map.context";

const MapController = () => {
	const { currentYear, handlePrevYear, handleNextYear } = useMapContext();

	// const handleAddCircle = () => {
	// 	svgManager.current?.addCircle("myCircle", 100, 100, 50, {
	// 		stroke: "red",
	// 		fill: "green",
	// 	});
	// };

	// const handleHide = () => {
	// 	svgManager.current?.hideElement("myCircle");
	// };

	// const handleShow = () => {
	// 	svgManager.current?.showElement("myCircle");
	// };

	// const hideTribes = () => {
	// 	svgManager.current?.hideAll(".tribe");
	// };

	// const showTribes = () => {
	// 	svgManager.current?.showAll(".tribe");
	// };

	// const changePinColor = (id: string, styles: Partial<CSSStyleDeclaration>) => {
	// 	// const element = svgRef.current?.querySelector(id) as SVGSVGElement;
	// 	const element = svgManager.current?.getElement(id);

	// 	if (!element) return;

	// 	svgManager.current?.applyStyles(element, styles);
	// };

	return (
		<div className="flex items-center justify-center gap-2">
			{/* <button className="btn btn-neutral" onClick={hideTribes}>
				Hide Tribes
			</button>
			<button className="btn btn-neutral" onClick={showTribes}>
				Show Tribes
			</button> */}
			<button
				className="btn btn-neutral"
				disabled={currentYear === "1"}
				onClick={handlePrevYear}
			>
				العام السابق
			</button>
			<button
				className="btn btn-neutral"
				disabled={currentYear === "2"}
				onClick={handleNextYear}
			>
				العام التالي
			</button>
			{/* <button
				className="btn btn-primary"
				onClick={() =>
					changePinColor("#pin", {
						stroke: "cyan",
						fill: "orange",
						// strokeWidth: "2px",
					})
				}
			>
				Change Pin Color
			</button> */}
			{/* <button className="btn btn-neutral" onClick={handleZoomIn}>
				Zoom In
			</button>
			<button className="btn btn-neutral" onClick={handleZoomOut}>
				Zoom Out
			</button> */}
		</div>
	);
};

export default MapController;

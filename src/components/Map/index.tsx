import { useRef } from "react";
import { MapProvider } from "../../contexts/map.context";
import MapController from "../MapController";
// import SVGMap from "../SVGMap";
import DisplayInfo from "../DisplayInfo";

const Map = () => {
	const svgRef = useRef<SVGSVGElement>(null);

	return (
		<MapProvider SVGRef={svgRef}>
			<div className="flex flex-col gap-4 w-full">
				{/* <SVGMap ref={svgRef} /> */}
				<DisplayInfo />
				<MapController />
			</div>
		</MapProvider>
	);
};

export default Map;

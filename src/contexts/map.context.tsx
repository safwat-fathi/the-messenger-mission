import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
	RefObject,
	useRef,
	MutableRefObject,
	Dispatch,
	SetStateAction,
	useMemo,
} from "react";
import CONSTANTS from "../constants";
import { SVGManager } from "../components/utils/svg";
import { Year } from "../../types";

type ViewBox = {
	x: number;
	y: number;
	width: number;
	height: number;
};

type MapContextProps = {
	viewBox: ViewBox;
	handleZoomIn: () => void;
	handleZoomOut: () => void;
	handleMouseDown: (e: React.MouseEvent<SVGElement, MouseEvent>) => void;
	handleTouchStart: (e: React.TouchEvent<SVGElement>) => void;
	handlePrevYear: () => void;
	handleNextYear: () => void;
	currentYear: Year;
	setCurrentYear: Dispatch<SetStateAction<Year>>;
	isZoomedIn: boolean;
	isSpacePressed: boolean;
	isDragging: boolean;
	svgManager: MutableRefObject<SVGManager | null>;
};

const MapContext = createContext<MapContextProps | undefined>(undefined);

// Custom hook to use MapContext
export const useMapContext = () => {
	const context = useContext(MapContext);
	if (!context) {
		throw new Error("useMapContext must be used within a MapProvider");
	}
	return context;
};

type MapProviderProps = {
	SVGRef: RefObject<SVGSVGElement>;
	children: ReactNode;
};

const defaultViewBox: ViewBox = CONSTANTS.DEFAULT_VIEWBOX;

// MapProvider component
export const MapProvider = ({ SVGRef, children }: MapProviderProps) => {
	const svgManagerRef = useRef<SVGManager | null>(null);

	const [currentYear, setCurrentYear] = useState<Year>("1");
	const [viewBox, setViewBox] = useState<ViewBox>(defaultViewBox);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [dragStart, setDragStart] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const [panStart, setPanStart] = useState<{ x: number; y: number }>({
		x: 0,
		y: 0,
	});
	const [zoomLevel, setZoomLevel] = useState<number>(1);
	const [isSpacePressed, setIsSpacePressed] = useState<boolean>(false);

	// Check if the SVG is zoomed in (smaller viewBox than default)
	const isZoomedIn: boolean =
		viewBox.width < defaultViewBox.width ||
		viewBox.height < defaultViewBox.height;

	// Clamp values within the allowed range
	const clamp = (value: number, min: number, max: number): number =>
		Math.max(min, Math.min(max, value));

	// Zoom In
	const handleZoomIn = () => {
		if (!isSpacePressed && zoomLevel < CONSTANTS.MAX_ZOOM_LEVEL) {
			const newZoomLevel = zoomLevel + 1;
			setZoomLevel(newZoomLevel);

			setViewBox(prev => {
				const newWidth = prev.width * 0.9;
				const newHeight = prev.height * 0.9;
				return {
					...prev,
					width: clamp(newWidth, 100, defaultViewBox.width),
					height: clamp(newHeight, 100, defaultViewBox.height),
				};
			});
		}
	};

	// Zoom Out
	const handleZoomOut = () => {
		if (!isSpacePressed && zoomLevel > CONSTANTS.MIN_ZOOM_LEVEL) {
			const newZoomLevel = zoomLevel - 1;
			setZoomLevel(newZoomLevel);

			setViewBox(prev => {
				// Calculate the zoom factor based on the new zoom level
				const zoomFactor = Math.pow(0.9, newZoomLevel - 1); // Adjust the base (0.9) as needed

				const newWidth = defaultViewBox.width * zoomFactor;
				const newHeight = defaultViewBox.height * zoomFactor;

				// Center the viewBox
				const centerX = prev.x + prev.width / 2;
				const centerY = prev.y + prev.height / 2;

				const newX = centerX - newWidth / 2;
				const newY = centerY - newHeight / 2;

				return {
					x: clamp(newX, 0, defaultViewBox.width - newWidth),
					y: clamp(newY, 0, defaultViewBox.height - newHeight),
					width: clamp(newWidth, 100, defaultViewBox.width),
					height: clamp(newHeight, 100, defaultViewBox.height),
				};
			});
		}
	};

	// Handle keydown for spacebar press
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.code === "Space") {
			e.preventDefault();
			setIsSpacePressed(true);
		}
	};

	// Handle keyup for spacebar release
	const handleKeyUp = (e: KeyboardEvent) => {
		if (e.code === "Space") {
			setIsSpacePressed(false);
		}
	};

	// Handle mousedown to start drag
	const handleMouseDown = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
		if (isSpacePressed && isZoomedIn) {
			setIsDragging(true);
			setDragStart({ x: e.clientX, y: e.clientY });
			setPanStart({ x: viewBox.x, y: viewBox.y });
		}
	};

	const handleTouchStart = (e: React.TouchEvent<SVGElement>) => {
		if (isZoomedIn) {
			setIsDragging(true);
			const touch = e.touches[0];
			setDragStart({ x: touch.clientX, y: touch.clientY });
			setPanStart({ x: viewBox.x, y: viewBox.y });
		}
	};

	// Handle mousemove to pan
	const handleMouseMove = (e: MouseEvent) => {
		if (isDragging) {
			const dx = e.clientX - dragStart.x;
			const dy = e.clientY - dragStart.y;

			setViewBox(prev => ({
				...prev,
				x: clamp(
					panStart.x - (dx * prev.width) / 500,
					0,
					defaultViewBox.width - prev.width
				),
				y: clamp(
					panStart.y - (dy * prev.height) / 500,
					0,
					defaultViewBox.height - prev.height
				),
			}));
		}
	};

	// **Handle touchmove to pan**
	const handleTouchMove = (e: TouchEvent) => {
		if (isDragging) {
			e.preventDefault(); // Prevent default scrolling behavior
			const touch = e.touches[0];
			const dx = touch.clientX - dragStart.x;
			const dy = touch.clientY - dragStart.y;

			setViewBox(prev => ({
				...prev,
				x: clamp(
					panStart.x - (dx * prev.width) / 500,
					0,
					defaultViewBox.width - prev.width
				),
				y: clamp(
					panStart.y - (dy * prev.height) / 500,
					0,
					defaultViewBox.height - prev.height
				),
			}));
		}
	};

	// Handle mouseup to stop drag
	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
	};

	// const movePin = (year: keyof typeof data) => {
	// 	const { x, y } = data[year].pin_location;
	// 	svgManagerRef.current?.setLocation("#pin", x, y);
	// };

	const handlePrevYear = () => {
		if (currentYear === "1") return;

		const prevYear = +currentYear - 1;

		// if (data[prevYear]) {
		setCurrentYear(prevYear.toString() as Year);
		// }
	};

	const handleNextYear = () => {
		if ((currentYear as Year) === "23") return;

		const nextYear = +currentYear + 1;

		// if (data[nextYear]) {
		setCurrentYear(nextYear.toString() as Year);
		// }
	};

	// Add event listeners for keyboard and mouse events
	// useEffect(() => {
	// 	document.addEventListener("keydown", handleKeyDown);
	// 	document.addEventListener("keyup", handleKeyUp);
	// 	document.addEventListener("mousemove", handleMouseMove);
	// 	document.addEventListener("mouseup", handleMouseUp);

	// 	return () => {
	// 		document.removeEventListener("keydown", handleKeyDown);
	// 		document.removeEventListener("keyup", handleKeyUp);
	// 		document.removeEventListener("mousemove", handleMouseMove);
	// 		document.removeEventListener("mouseup", handleMouseUp);
	// 	};
	// }, [isDragging, dragStart, viewBox, isSpacePressed]);

	useEffect(() => {
		// Keyboard events for spacebar
		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);

		// Mouse events for panning
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);

		// Touch events for panning
		document.addEventListener("touchmove", handleTouchMove, { passive: false });
		document.addEventListener("touchend", handleTouchEnd);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);

			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);

			document.removeEventListener("touchmove", handleTouchMove);
			document.removeEventListener("touchend", handleTouchEnd);
		};
	}, [isDragging, dragStart, viewBox, isSpacePressed]);

	useEffect(() => {
		if (!SVGRef.current) return;
		svgManagerRef.current = new SVGManager(SVGRef.current);

		return () => {
			if (svgManagerRef.current) svgManagerRef.current = null;
		};
	}, [SVGRef]);

	useEffect(() => {
		// movePin(currentYear);
	}, [currentYear]);

	const value = useMemo(
		() => ({
			viewBox,
			handleZoomIn,
			handleZoomOut,
			handleMouseDown,
			handleTouchStart,
			handlePrevYear,
			handleNextYear,
			isZoomedIn,
			isSpacePressed,
			isDragging,
			svgManager: svgManagerRef,
			currentYear,
			setCurrentYear,
		}),
		[
			viewBox,
			handleZoomIn,
			handleZoomOut,
			handleMouseDown,
			handleTouchStart,
			isZoomedIn,
			isSpacePressed,
			isDragging,
			svgManagerRef,
			currentYear,
			setCurrentYear,
		]
	);

	return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

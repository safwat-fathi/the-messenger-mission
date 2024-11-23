export type Year =
	| "1"
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "11"
	| "12"
	| "13"
	| "14"
	| "15"
	| "16"
	| "17"
	| "18"
	| "19"
	| "20"
	| "21"
	| "22"
	| "23";

export interface Data {
	readonly [year: string]: YearData;
}

export interface Companion {
	readonly name: string;
	readonly age: number;
	readonly date_of_death: {
		readonly hijri_year: number | string | null;
		readonly gregorian_year: number | string | null;
	};
}

export interface Wife {
	readonly name: string;
	readonly age: number;
	readonly date_of_death: string | null;
	readonly children: readonly Child[];
}
interface Concubine {
	readonly name: string;
	readonly age: number;
	readonly date_of_death: string | null;
	readonly children: readonly Child[];
}

interface Child {
	readonly name: string;
	readonly age: number | null;
	readonly date_of_death: {
		readonly hijri_year: number | string | null;
		readonly gregorian_year: number | string | null;
	};
}

interface YearData {
	readonly gregorian_year: number; // العام الميلادي بدون حرف "م"
	readonly hijri_year: number;
	readonly events: readonly Event[];
	readonly number_of_muslims: number;
	readonly prominent_companions: readonly Companion[];
	readonly wives: readonly Wife[];
	readonly concubines: readonly Concubine[];
}

// باقي التعريفات كما هي في السابق...

export type Event = {
	readonly title: string;
	readonly location: string;
	readonly pin_location: PinLocation;
	readonly prophet_location: ProphetLocation;
	readonly prophet_present: boolean;
	readonly event_type: EventType;
};

export type ProphetLocation = {
	readonly title: string;
	readonly pin_location: PinLocation;
};

export type PinLocation = {
	readonly x: number;
	readonly y: number;
};

export type EventType = "conquest" | "family" | "other";

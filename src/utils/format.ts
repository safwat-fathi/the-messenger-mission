export function formatYearsAppendedWord(years: number): string {
	// Input validation
	if (!Number.isInteger(years)) {
			throw new Error("The number of years must be an integer.");
	}
	if (years < 0) {
			throw new Error("The number of years cannot be negative.");
	}

	// Determine the correct Arabic word based on the number
	const word = years > 10 ? "عاما" : "أعوام";

	return `${years} ${word}`;
}
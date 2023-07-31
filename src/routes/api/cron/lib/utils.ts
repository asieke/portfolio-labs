export const generateDates = (d1: string, d2 = null) => {
	// Get the current date and 2008-07-01 in milliseconds

	const startDate = new Date(d1);
	const endDate = new Date(d2 || new Date().toISOString().slice(0, 10));

	// Calculate the number of days between the two dates
	const numberOfDays = Math.ceil((endDate.getTime() - startDate.getTime() + 1) / (1000 * 60 * 60 * 24));

	// Generate an array of dates
	return Array.from({ length: numberOfDays }, (_, i) => new Date(startDate.getTime() + i * (1000 * 60 * 60 * 24)).toISOString().slice(0, 10));
};

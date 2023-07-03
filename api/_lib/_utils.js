const generateDates = (START_DATE) => {
	// Get the current date and 2008-07-01 in milliseconds
	const currentDate = new Date();
	const startDate = new Date(START_DATE);

	// Calculate the number of days between the two dates
	const numberOfDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

	// Generate an array of dates
	return Array.from({ length: numberOfDays }, (_, i) =>
		new Date(startDate.getTime() + i * (1000 * 60 * 60 * 24)).toISOString().slice(0, 10)
	);
};

export { generateDates };

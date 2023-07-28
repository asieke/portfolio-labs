export const roundToSum = (numbers: number[]) => {
	const lower = numbers.map(Math.floor);
	const remainders = numbers.map((num, i) => num - lower[i]);

	let sumLower = lower.reduce((a, b) => a + b, 0);
	const remainderIndices = remainders.map((r, i) => ({ index: i, remainder: r })).sort((a, b) => b.remainder - a.remainder);

	while (sumLower < 100) {
		if (!remainderIndices.length) {
			console.warn('Insufficient total sum in input numbers. Cannot reach target sum.');
			break;
		}
		const indexObj = remainderIndices.shift();
		if (indexObj) {
			const { index } = indexObj;
			lower[index]++;
			sumLower++;
		}
	}

	return lower;
};

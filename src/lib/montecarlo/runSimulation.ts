type Props = {
	startingBalance: number;
	inflation: number;
	assetTargets: {
		name: string;
		value: number;
		color: string;
	}[];
	events: { event: string; when: number; amount: number }[];
	returns: Record<string, number[]>;
};

export const runSimulation = ({ startingBalance, assetTargets, events, returns, inflation }: Props) => {
	//create an array of 360 elements

	const balances = [];

	for (let sim = 0; sim < 100; sim++) {
		let runningBalance = startingBalance;
		for (let i = 0; i < 12 * 30; i++) {
			if (!balances[i]) balances[i] = [] as number[];

			//if there is an event.when that equals i*12 then add event.amount to runningBalance
			const event = events.find((e) => e.when * 12 === i);
			if (event) {
				runningBalance += event.amount;
			}

			let r = Math.floor(Math.random() * returns['Equity'].length);
			const equityReturn = Math.round((10000 * (returns['Equity'][r] * assetTargets[0].value)) / 100) / 10000;
			r = Math.floor(Math.random() * returns['RealEstate'].length);
			const realEstateReturn = Math.round((10000 * (returns['RealEstate'][r] * assetTargets[1].value)) / 100) / 10000;
			r = Math.floor(Math.random() * returns['FixedIncome'].length);
			const fixedIncomeReturn = Math.round((10000 * (returns['FixedIncome'][r] * assetTargets[2].value)) / 100) / 10000;
			r = Math.floor(Math.random() * returns['Treasuries'].length);
			const treasuriesReturn = Math.round((10000 * (returns['Treasuries'][r] * assetTargets[3].value)) / 100) / 10000;

			const total = 1 + Math.round(10000 * (equityReturn + realEstateReturn + fixedIncomeReturn + treasuriesReturn)) / 10000;
			runningBalance = runningBalance * total;
			runningBalance = runningBalance * (1 - inflation / 12 / 100);

			balances[i].push(runningBalance);
		}
	}

	const output = balances.map((b, i) => ({
		//add a date that is i * 12 months from now
		date: new Date(Date.now() + i * 30.4362825 * 24 * 60 * 60 * 1000),
		timestamp: new Date(Date.now() + i * 30.4362825 * 24 * 60 * 60 * 1000).getTime(),
		p5: getPercentile(b, 0.05),
		p10: getPercentile(b, 0.1),
		p25: getPercentile(b, 0.25),
		p50: getPercentile(b, 0.5),
		p75: getPercentile(b, 0.75),
		p90: getPercentile(b, 0.9),
		p95: getPercentile(b, 0.95)
	}));

	return output;
};

const getPercentile = (arr: number[], percentile: number) => {
	if (percentile < 0 || percentile > 1) {
		throw new Error('Percentile must be between 0 and 1, Einstein!');
	}
	const sortedArr = [...arr].sort((a, b) => a - b);
	const index = percentile * (sortedArr.length - 1);
	const lowerIndex = Math.floor(index);
	const upperIndex = Math.ceil(index);
	const weight = index - lowerIndex;
	return (1 - weight) * sortedArr[lowerIndex] + weight * sortedArr[upperIndex];
};

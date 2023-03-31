import fs from 'fs';

fs.readFile('src/lib/database.ts', 'utf8', (err, data) => {
	if (err) {
		console.error('Error reading file:', err);
		return;
	}

	const lines = data.split('\n');

	//if line contains Row: { then extract the next n lines until you encounter a }

	for (let i = 0; i < lines.length; i++) {
		if (lines[i].includes('Row: {')) {
			//name of table is on previous line, strip : and {
			let name = lines[i - 1].replace(':', '').replace('{', '').trim();
			let j = i + 1;
			console.log('export const ' + name + 'Default = {');
			while (!lines[j].includes('}')) {
				let line = lines[j].trim().split(':');
				let key = line[0].trim();
				let value = "''";
				if (line[1].includes('number')) {
					value = 'null';
				}
				if (line[1].includes('boolean')) {
					value = 'false';
				}
				if (line[1].includes('Json')) {
					value = '[]';
				}
				if (!(key === 'id' && line[1].includes('number'))) {
					console.log('\t' + key + ': ' + value + ',');
				}

				j++;
			}
			console.log('};');
		}
	}
});

export const valueToChunk = (value: Uint8Array | undefined) => {
	const temp = [];
	const result = new TextDecoder()
		.decode(value)
		.trim()
		.split('\n')
		.map((line) => parseJSON(line.replace('data: ', '')));
	for (let i = 0; i < result.length; i++) {
		const json = result[i];
		if (json && json.choices[0]?.delta?.content) {
			const chunk = json.choices[0].delta.content;
			temp.push(chunk);
		}
	}
	return temp.join('');
};

export const parseJSON = (str: string) => {
	try {
		const json = JSON.parse(str);
		return json;
	} catch (e) {
		return null;
	}
};

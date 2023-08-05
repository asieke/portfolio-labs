export const checkEmail = (email: { value: string; error: string }) => {
	const re = /\S+@\S+\.\S+/;
	const valid = re.test(email.value);

	if (!valid) {
		return { value: email.value, error: 'format must be email@domain.org', valid: false };
	}
	return { value: email.value, error: '', valid: true };
};

export const checkFullName = (name: { value: string; error: string }) => {
	if (name.value.length < 4) {
		return { value: name.value, error: 'Name must be >4 letters', valid: false };
	}
	return { value: name.value, error: '', valid: true };
};

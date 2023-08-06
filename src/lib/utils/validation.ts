export const checkEmail = (email: { value: string; error?: string; valid?: boolean }, throwError = true) => {
	const re = /\S+@\S+\.\S+/;
	const valid = re.test(email.value);

	if (!valid && throwError) {
		return { value: email.value, error: 'format must be email@domain.org', valid: false };
	} else if (!valid && !throwError) {
		return { value: email.value, error: '', valid: false };
	}
	return { value: email.value, error: '', valid: true };
};

export const checkFullName = (name: { value: string; error?: string; valid?: boolean }, throwError = true) => {
	const valid = name && name.value && name.value.length > 4;

	if (!valid && throwError) {
		return { value: name.value, error: 'must be >4 characters', valid: false };
	} else if (!valid && !throwError) {
		return { value: name.value, error: '', valid: false };
	}
	return { value: name.value, error: '', valid: true };
};

export const checkDOB = (dob: { value: Date; error?: string; valid?: boolean }, throwError = true) => {
	// Check if dob exists
	const valid = dob && dob.value;

	if (!valid) {
		if (throwError) {
			return { value: dob.value, error: 'must be a valid date', valid: false };
		} else {
			return { value: dob.value, error: '', valid: false };
		}
	}

	return { value: dob.value, error: '', valid: true };
};

export const checkAddress = (address: { value: string; error?: string; valid?: boolean }, throwError = true) => {
	// Check if address exists and is in valid format
	const valid = address && address.value && /\d/.test(address.value) && /\w/.test(address.value);

	if (!valid && throwError) {
		return { value: address.value, error: 'must contain at least one digit and one word character', valid: false };
	} else if (!valid && !throwError) {
		return { value: address.value, error: '', valid: false };
	}

	return { value: address.value, error: '', valid: true };
};

export const checkPhone = (phone: { value: string; error?: string; valid?: boolean }, throwError = true) => {
	// Check if phone exists and is in valid format
	// This regex checks for a 10 digit phone number
	const valid = phone && phone.value && /^\d{3}-\d{3}-\d{4}$/.test(phone.value);

	if (!valid && throwError) {
		return { value: phone.value, error: 'Phone number must be 10 digits', valid: false };
	} else if (!valid && !throwError) {
		return { value: phone.value, error: '', valid: false };
	}

	return { value: phone.value, error: '', valid: true };
};

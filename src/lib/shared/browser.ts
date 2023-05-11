export const toggleDarkMode = (set?: string | MouseEvent) => {
	if (typeof set === 'string') {
		document.documentElement.classList.toggle('dark', set === 'dark');
		localStorage.setItem('color-theme', set);
		return;
	} else {
		document.documentElement.classList.toggle('dark');
		localStorage.setItem(
			'color-theme',
			document.documentElement.classList.contains('dark') ? 'dark' : 'light'
		);
	}
};

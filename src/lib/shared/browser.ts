export const toggleDarkMode = () => {
	document.documentElement.classList.toggle('dark');
	localStorage.setItem(
		'color-theme',
		document.documentElement.classList.contains('dark') ? 'dark' : 'light'
	);
};

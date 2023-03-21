//get input from here:
// https://github.com/FortAwesome/Font-Awesome/blob/6.x/svgs/solid/sun.svg

const input = `

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>


`;

function transformSVG(input) {
	// Strip the comment
	let output =
		`<script lang="ts">let tempClass = 'w-5 h-5'; export { tempClass as class };</script>` +
		input.replace(/<!--.*?-->/s, '');
	// Add the script to the top

	// Add the class to the svg tag
	output = output.replace('<svg', '<svg class={tempClass} fill="currentColor"');
	// Output the result to the console
	console.log(output);
}

transformSVG(input);

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Rem 记忆体',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ShiningAI/remembrance-web' }],
		}),
	],
});

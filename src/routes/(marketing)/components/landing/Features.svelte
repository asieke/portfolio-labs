<script lang="ts">
	import { FeatureCard } from './';
</script>

<div class="mx-auto mb-12 flex max-w-xl flex-col items-center text-center">
	<h2 class="text-xl font-bold text-primary-500">Manage your finances</h2>
	<p class="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">A simple and complete approach to Investment Management</p>
	<p class="mt-6 text-lg leading-8 text-gray-600">
		100% coverage of your assets - guaranteed. Other investment management products fall short, what good is portfolio management if you can't see everything.
	</p>
</div>

<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
	<FeatureCard
		data={{
			title: 'Complete Portfolio Visualization',
			description: 'Visualize your performance across all accounts and portfolios - all time.  Compare your historical performance vs any benchmark. ',
			link: '/'
		}}
	/>
	<FeatureCard
		data={{ title: 'Asset Allocation', description: 'Understand your True Asset Allocation - Portfolio Labs parses ETFs and mutual funds to let you know what your actual risk profile is', link: '/' }}
	/>
	<FeatureCard data={{ title: 'Financial Planning', description: 'Make better asset allocation decisions going forward by modeling with data going back to 1973', link: '/' }} />
	<FeatureCard
		data={{
			title: 'Tax Planning',
			description: 'The only free money is investing in a tax efficient way.  Use our tax planning analysis to ensure that your portfolio is allocated efficiently.',
			link: '/'
		}}
	/>
</div>

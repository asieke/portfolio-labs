<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Container } from '../components';

	export let data: any;
	const { data: posts } = data;

	console.log(posts);

	let i = 0;

	const verbs = ['invest', 'track', 'manage', 'analyze', 'understand'];

	setInterval(() => {
		i = (i + 1) % 5;
	}, 3000);
</script>

<div class="bg-white -mt-24">
	<!-- Header -->

	<main class="isolate">
		<!-- Hero section -->
		<div class="relative isolate -z-10">
			<svg
				class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
				aria-hidden="true"
			>
				<defs>
					<pattern
						id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
						width="200"
						height="200"
						x="50%"
						y="-1"
						patternUnits="userSpaceOnUse"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y="-1" class="overflow-visible fill-gray-50">
					<path
						d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
						stroke-width="0"
					/>
				</svg>
				<rect
					width="100%"
					height="100%"
					stroke-width="0"
					fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
				/>
			</svg>
			<div
				class="absolute top-0 left-1/2 right-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
			>
				<svg viewBox="0 0 801 1036" aria-hidden="true" class="w-[50.0625rem]">
					<path
						fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)"
						fill-opacity=".3"
						d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z"
					/>
					<defs>
						<linearGradient
							id="70656b7e-db44-4b9b-b7d2-1f06791bed52"
							x1="508.179"
							x2="-28.677"
							y1="-116.221"
							y2="1091.63"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#9089FC" />
							<stop offset="1" stop-color="#FF80B5" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div class="overflow-hidden">
				<div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
					<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
						<div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
							<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								We’re changing the way people
								<div class="hero relative inline-block w-auto text-center text-primary-600">
									{#if i === 0}
										<div in:fly={{ duration: 250, y: '80%' }}>{verbs[0]}</div>{/if}
									{#if i === 1}
										<div in:fly={{ duration: 250, y: '80%' }}>{verbs[1]}</div>{/if}
									{#if i === 2}
										<div in:fly={{ duration: 250, y: '80%' }}>{verbs[2]}</div>{/if}
									{#if i === 3}
										<div in:fly={{ duration: 250, y: '80%' }}>{verbs[3]}</div>{/if}
									{#if i === 4}
										<div in:fly={{ duration: 250, y: '80%' }}>{verbs[4]}</div>{/if}
								</div>
								<br />
								their portfolios
							</h1>
							<p class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
								Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit
								aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation
								tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu
								voluptate tempor esse minim amet fugiat veniam occaecat aliqua.
							</p>
						</div>
						<div
							class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
						>
							<div
								class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
							>
								<div class="relative">
									<img
										src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
										class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
									/>
								</div>
							</div>
							<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
								<div class="relative">
									<img
										src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
										class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
									/>
								</div>
								<div class="relative">
									<img
										src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
										alt=""
										class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
									/>
								</div>
							</div>
							<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
								<div class="relative">
									<img
										src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
										alt=""
										class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
									/>
								</div>
								<div class="relative">
									<img
										src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
										alt=""
										class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
									/>
									<div
										class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Content section -->
		<div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
				<div class="mt-6 flex flex-col gap-y-20 gap-x-8 lg:flex-row">
					<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
						<p class="text-xl leading-8 text-gray-600">
							Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi,
							nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci
							at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
						</p>
						<div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
							<p>
								Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
								mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
								penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa
								rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
								vitae sed turpis id.
							</p>
							<p class="mt-10">
								Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id
								blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel.
								Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac
								tempor et ut. Ac lorem vel integer orci.
							</p>
						</div>
					</div>
					<div class="lg:flex lg:flex-auto lg:justify-center">
						<dl class="w-64 space-y-8 xl:w-80">
							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
								<dd class="text-5xl font-semibold tracking-tight text-gray-900">44 million</dd>
							</div>

							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
								<dd class="text-5xl font-semibold tracking-tight text-gray-900">$119 trillion</dd>
							</div>

							<div class="flex flex-col-reverse gap-y-4">
								<dt class="text-base leading-7 text-gray-600">New users annually</dt>
								<dd class="text-5xl font-semibold tracking-tight text-gray-900">46,000</dd>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</div>

		<!-- Image section -->
		<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
			<img
				src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
				alt=""
				class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
			/>
		</div>

		<!-- Values section -->
		<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate
					veritatis in accusamus quisquam.
				</p>
			</div>
			<dl
				class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				<div>
					<dt class="font-semibold text-gray-900">Be world-class</dt>
					<dd class="mt-1 text-gray-600">
						Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam
						exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro
						vero.
					</dd>
				</div>

				<div>
					<dt class="font-semibold text-gray-900">Share everything you know</dt>
					<dd class="mt-1 text-gray-600">
						Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id
						molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.
					</dd>
				</div>

				<div>
					<dt class="font-semibold text-gray-900">Always learning</dt>
					<dd class="mt-1 text-gray-600">
						Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore
						quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.
					</dd>
				</div>

				<div>
					<dt class="font-semibold text-gray-900">Be supportive</dt>
					<dd class="mt-1 text-gray-600">
						Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit
						veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt
						harum.
					</dd>
				</div>

				<div>
					<dt class="font-semibold text-gray-900">Take responsibility</dt>
					<dd class="mt-1 text-gray-600">
						Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure.
						Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.
					</dd>
				</div>

				<div>
					<dt class="font-semibold text-gray-900">Enjoy downtime</dt>
					<dd class="mt-1 text-gray-600">
						Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius.
						Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.
					</dd>
				</div>
			</dl>
		</div>

		<!-- Logo cloud -->
		<div class="relative isolate -z-10 mt-32 sm:mt-48">
			<div
				class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"
			>
				<svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
					<defs>
						<pattern
							id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
							width="200"
							height="200"
							x="50%"
							y="50%"
							patternUnits="userSpaceOnUse"
							patternTransform="translate(-100 0)"
						>
							<path d="M.5 200V.5H200" fill="none" />
						</pattern>
					</defs>
					<svg x="50%" y="50%" class="overflow-visible fill-gray-50">
						<path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
					</svg>
					<rect
						width="100%"
						height="100%"
						stroke-width="0"
						fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
					/>
				</svg>
			</div>
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
					Trusted by the world’s most innovative teams
				</h2>
				<div
					class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
				>
					<img
						class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
						alt="Transistor"
						width="158"
						height="48"
					/>
					<img
						class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
						alt="Reform"
						width="158"
						height="48"
					/>
					<img
						class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
						alt="Tuple"
						width="158"
						height="48"
					/>
					<img
						class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
						alt="SavvyCal"
						width="158"
						height="48"
					/>
					<img
						class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
						src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
						alt="Statamic"
						width="158"
						height="48"
					/>
				</div>
			</div>
		</div>

		<!-- Team section -->
		<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum.
					Nemo vel facere repellendus ut eos dolores similique.
				</p>
			</div>
			<ul
				class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
			>
				<li>
					<img
						class="mx-auto h-24 w-24 rounded-full"
						src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
						alt=""
					/>
					<h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
						Michael Foster
					</h3>
					<p class="text-sm leading-6 text-gray-600">Co-Founder / CTO</p>
				</li>

				<!-- More people... -->
			</ul>
		</div>

		<!-- Blog section -->
		<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-24">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
				<p class="mt-2 text-lg leading-8 text-gray-600">
					Vel dolorem qui facilis soluta sint aspernatur totam cumque.
				</p>
			</div>
			<div
				class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
			>
				{#each posts as post}
					<article
						class="hover:opacity-70 relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
					>
						<img
							src={post.hero_img}
							alt=""
							class="absolute inset-0 -z-10 h-full w-full object-cover"
						/>
						<div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
						<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

						<div
							class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
						>
							<time datetime="2020-03-16" class="mr-8">{post.readableDate}</time>
							<div class="-ml-4 flex items-center gap-x-4">
								<svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
									<circle cx="1" cy="1" r="1" />
								</svg>
								<div class="flex gap-x-2.5">
									<img
										src={post.author_img}
										alt=""
										class="h-6 w-6 flex-none rounded-full bg-white/10"
									/>
									{post.author}
								</div>
							</div>
						</div>
						<h3 class="mt-3 text-lg font-semibold leading-6 text-white">
							<a href={`blog/${post.url}`}>
								<span class="absolute inset-0" />
								{post.title}
							</a>
						</h3>
					</article>
				{/each}

				<!-- More posts... -->
			</div>
		</div>
	</main>
</div>

<style lang="postcss">
</style>

<script lang="ts">
</script>

<form class="space-y-8">
	<div class="space-y-8 sm:space-y-5">
		<div class="space-y-6 sm:space-y-5">
			<div>
				<h3 class="text-base font-semibold leading-6">Profile</h3>
				<p class="mt-1 max-w-2xl text-sm ">
					This information will be displayed publicly so be careful what you share.
				</p>
			</div>

			<div class="space-y-6 sm:space-y-5">
				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="username" class="block text-sm font-medium leading-6 sm:pt-1.5"
						>Username</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<div class="flex max-w-lg rounded-md shadow-sm">
							<input
								type="text"
								name="username"
								id="username"
								autocomplete="username"
								class="block w-full min-w-0 flex-1 rounded-md border-0 py-1.5 ring-1 ring-inset sm:text-sm sm:leading-6"
							/>
						</div>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="about" class="block text-sm font-medium leading-6 sm:pt-1.5">About</label>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<textarea
							id="about"
							name="about"
							rows="3"
							class="block w-full max-w-lg rounded-md border-0 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:py-1.5 sm:text-sm sm:leading-6"
						/>
						<p class="mt-2 text-sm ">Write a few sentences about yourself.</p>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:border-t sm:pt-5">
					<label for="photo" class="block text-sm font-medium leading-6">Photo</label>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<div class="flex items-center">
							<span class="h-12 w-12 overflow-hidden rounded-full ">
								<svg class="h-full w-full" fill="currentColor" viewBox="0 0 24 24">
									<path
										d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
							</span>
							<button
								type="button"
								class="ml-5 rounded-md py-1.5 px-2.5 text-sm font-semibold shadow-sm ring-1 ring-inset"
								>Change</button
							>
						</div>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="cover-photo" class="block text-sm font-medium leading-6 sm:pt-1.5"
						>Cover photo</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<div
							class="flex max-w-lg justify-center rounded-md border-2 border-dashed px-6 pt-5 pb-6"
						>
							<div class="space-y-1 text-center">
								<svg
									class="mx-auto h-12 w-12 text-gray-400"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 48 48"
									aria-hidden="true"
								>
									<path
										d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<div class="flex text-sm text-gray-600">
									<label
										for="file-upload"
										class="relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
									>
										<span>Upload a file</span>
										<input id="file-upload" name="file-upload" type="file" class="sr-only" />
									</label>
									<p class="pl-1">or drag and drop</p>
								</div>
								<p class="text-xs ">PNG, JPG, GIF up to 10MB</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
			<div>
				<h3 class="text-base font-semibold leading-6 ">Personal Information</h3>
				<p class="mt-1 max-w-2xl text-sm ">Use a permanent address where you can receive mail.</p>
			</div>
			<div class="space-y-6 sm:space-y-5">
				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="first-name" class="block text-sm font-medium leading-6 sm:pt-1.5"
						>First name</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autocomplete="given-name"
							class="block w-full max-w-lg rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="last-name" class="block text-sm font-medium leading-6 sm:pt-1.5"
						>Last name</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<input
							type="text"
							name="last-name"
							id="last-name"
							autocomplete="family-name"
							class="block w-full max-w-lg rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="email" class="block text-sm font-medium leading-6 sm:pt-1.5"
						>Email address</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							class="block w-full max-w-lg rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="country" class="block text-sm font-medium leading-6 sm:pt-1.5">Country</label>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<select
							id="country"
							name="country"
							autocomplete="country-name"
							class="block w-full max-w-lg rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
						>
							<option>United States</option>
							<option>Canada</option>
							<option>Mexico</option>
						</select>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="street-address" class="block text-sm font-medium leading-6 sm:pt-1.5"
						>Street address</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<input
							type="text"
							name="street-address"
							id="street-address"
							autocomplete="street-address"
							class="block w-full max-w-lg rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="city" class="block text-sm font-medium leading-6 sm:pt-1.5">City</label>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<input
							type="text"
							name="city"
							id="city"
							autocomplete="address-level2"
							class="block w-full max-w-lg rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="region" class="block text-sm font-medium leading-6 sm:pt-1.5"
						>State / Province</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<input
							type="text"
							name="region"
							id="region"
							autocomplete="address-level1"
							class="block w-full max-w-lg rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div class="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:pt-5">
					<label for="postal-code" class="block text-sm font-medium leading-6 sm:pt-1.5"
						>ZIP / Postal code</label
					>
					<div class="mt-2 sm:col-span-2 sm:mt-0">
						<input
							type="text"
							name="postal-code"
							id="postal-code"
							autocomplete="postal-code"
							class="block w-full max-w-lg rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
			<div>
				<h3 class="text-base font-semibold leading-6 ">Notifications</h3>
				<p class="mt-1 max-w-2xl text-sm ">
					We'll always let you know about important changes, but you pick what else you want to hear
					about.
				</p>
			</div>
			<div class="space-y-6 divide-y divide-gray-200 sm:space-y-5">
				<div class="pt-6 sm:pt-5">
					<div role="group" aria-labelledby="label-email">
						<div class="sm:grid sm:grid-cols-3 sm:gap-4">
							<div>
								<div class="text-sm font-semibold leading-6 " id="label-email">By Email</div>
							</div>
							<div class="mt-4 sm:col-span-2 sm:mt-0">
								<div class="max-w-lg space-y-4">
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input
												id="comments"
												name="comments"
												type="checkbox"
												class="h-4 w-4 rounded "
											/>
										</div>
										<div class="ml-3 text-sm leading-6">
											<label for="comments" class="font-medium ">Comments</label>
											<p class="">Get notified when someones posts a comment on a posting.</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input
												id="candidates"
												name="candidates"
												type="checkbox"
												class="h-4 w-4 rounded "
											/>
										</div>
										<div class="ml-3 text-sm leading-6">
											<label for="candidates" class="font-medium ">Candidates</label>
											<p class="">Get notified when a candidate applies for a job.</p>
										</div>
									</div>
									<div class="relative flex items-start">
										<div class="flex h-6 items-center">
											<input id="offers" name="offers" type="checkbox" class="h-4 w-4 rounded" />
										</div>
										<div class="ml-3 text-sm leading-6">
											<label for="offers" class="font-medium ">Offers</label>
											<p class="">Get notified when a candidate accepts or rejects an offer.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="pt-6 sm:pt-5">
					<div role="group" aria-labelledby="label-notifications">
						<div class="sm:grid sm:grid-cols-3 sm:items-baseline sm:gap-4">
							<div>
								<div class="text-sm font-semibold leading-6 " id="label-notifications">
									Push Notifications
								</div>
							</div>
							<div class="sm:col-span-2">
								<div class="max-w-lg">
									<p class="text-sm ">These are delivered via SMS to your mobile phone.</p>
									<div class="mt-4 space-y-4">
										<div class="flex items-center">
											<input
												id="push-everything"
												name="push-notifications"
												type="radio"
												class="h-4 w-4"
											/>
											<label for="push-everything" class="ml-3 block text-sm font-medium leading-6 "
												>Everything</label
											>
										</div>
										<div class="flex items-center">
											<input
												id="push-email"
												name="push-notifications"
												type="radio"
												class="h-4 w-4"
											/>
											<label for="push-email" class="ml-3 block text-sm font-medium leading-6 "
												>Same as email</label
											>
										</div>
										<div class="flex items-center">
											<input
												id="push-nothing"
												name="push-notifications"
												type="radio"
												class="h-4 w-4 "
											/>
											<label for="push-nothing" class="ml-3 block text-sm font-medium leading-6 "
												>No push notifications</label
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="pt-5">
		<div class="flex justify-end gap-x-3">
			<button
				type="button"
				class="rounded-md py-2 px-3 text-sm font-semibold shadow-sm ring-1 ring-inset "
				>Cancel</button
			>
			<button
				type="submit"
				class="inline-flex justify-center rounded-md py-2 px-3 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Save</button
			>
		</div>
	</div>
</form>

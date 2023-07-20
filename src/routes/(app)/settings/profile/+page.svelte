<script lang="ts">
	import { Container } from '$components/layout';
</script>

<h3>My Profile</h3>
<form>
	<div class="space-y-12">
		<div class="border-b border-gray-900/10 pb-12">
			<h2>Personal Information</h2>
			<p>Use a permanent address where you can receive mail.</p>

			<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
				<div class="sm:col-span-3">
					<label for="first-name">First name</label>
					<div class="mt-2">
						<input type="text" name="first-name" id="first-name" autocomplete="given-name" />
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="last-name">Last name</label>
					<div class="mt-2">
						<input type="text" name="last-name" id="last-name" autocomplete="family-name" />
					</div>
				</div>

				<div class="sm:col-span-4">
					<label for="email">Email address</label>
					<div class="mt-2">
						<input id="email" name="email" type="email" autocomplete="email" />
					</div>
				</div>

				<div class="sm:col-span-3">
					<label for="country">Country</label>
					<div class="mt-2">
						<select id="country" name="country" autocomplete="country-name">
							<option>United States</option>
							<option>Canada</option>
							<option>Mexico</option>
						</select>
					</div>
				</div>

				<div class="col-span-full">
					<label for="street-address">Street address</label>
					<div class="mt-2">
						<input type="text" name="street-address" id="street-address" autocomplete="street-address" />
					</div>
				</div>

				<div class="sm:col-span-2 sm:col-start-1">
					<label for="city">City</label>
					<div class="mt-2">
						<input type="text" name="city" id="city" autocomplete="address-level2" />
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="region">State / Province</label>
					<div class="mt-2">
						<input type="text" name="region" id="region" autocomplete="address-level1" />
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="postal-code">ZIP / Postal code</label>
					<div class="mt-2">
						<input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" />
					</div>
				</div>
			</div>
		</div>

		<div class="border-b border-gray-900/10 pb-12">
			<h2>Notifications</h2>
			<p class="mt-1 text-sm leading-6 text-gray-600">
				We'll always let you know about important changes, but you pick what else you want to hear about.
			</p>

			<div class="mt-10 space-y-10">
				<fieldset>
					<legend>By Email</legend>
					<div class="mt-6 space-y-6">
						<div class="relative flex gap-x-3">
							<div class="flex h-6 items-center">
								<input id="comments" name="comments" type="checkbox" />
							</div>
							<div class="text-sm leading-6">
								<label for="comments">Comments</label>
								<p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
							</div>
						</div>
						<div class="relative flex gap-x-3">
							<div class="flex h-6 items-center">
								<input id="candidates" name="candidates" type="checkbox" />
							</div>
							<div class="text-sm leading-6">
								<label for="candidates">Candidates</label>
								<p class="text-gray-500">Get notified when a candidate applies for a job.</p>
							</div>
						</div>
						<div class="relative flex gap-x-3">
							<div class="flex h-6 items-center">
								<input id="offers" name="offers" type="checkbox" />
							</div>
							<div class="text-sm leading-6">
								<label for="offers">Offers</label>
								<p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
							</div>
						</div>
					</div>
				</fieldset>
				<fieldset>
					<legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
					<p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
					<div class="mt-6 space-y-6">
						<div class="flex items-center gap-x-3">
							<input id="push-everything" name="push-notifications" type="radio" />
							<label for="push-everything">Everything</label>
						</div>
						<div class="flex items-center gap-x-3">
							<input id="push-email" name="push-notifications" type="radio" />
							<label for="push-email">Same as email</label>
						</div>
						<div class="flex items-center gap-x-3">
							<input id="push-nothing" name="push-notifications" type="radio" />
							<label for="push-nothing">No push notifications</label>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	</div>

	<div class="mt-6 flex items-center justify-end gap-x-6">
		<button type="button" class="cancel">Cancel</button>
		<button type="submit" class="submit">Save</button>
	</div>
</form>

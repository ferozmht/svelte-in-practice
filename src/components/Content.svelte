<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	import { Edit2Icon, MessageCircleIcon, PlusCircleIcon, PocketIcon } from 'svelte-feather-icons';
    import { baskets } from './data.js';
	import { flip } from 'svelte/animate';

	let hoveringOverBasket: string | null = '';

	function dragStart(event: any, basketIndex: any, itemIndex: any) {
		// The data we want to make available when the element is dropped
		// is the index of the item being dragged and
		// the index of the basket from which it is leaving.
		const data = { basketIndex, itemIndex };
		event.dataTransfer.setData('text/plain', JSON.stringify(data));
	}

	function drop(event: any, basketIndex: any) {
		event.preventDefault();
		const json = event.dataTransfer.getData('text/plain');
		const data = JSON.parse(json);

		// Remove the item from one basket.
		// Splice returns an array of the deleted elements, just one in this case.
		const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1);

		// Add the item to the drop target basket.
		baskets[basketIndex].items.push(item);
		// baskets = baskets;

		hoveringOverBasket = null;
	}

	// const options = { delay: 0, duration: 0 };
</script>

<div class="bg-slate-200 bottom-20">
	<span
		class="chip variant-filled-secondary text-3xl align-top bg-slate-200 flex justify-between items-center"
	>
		<span
			class="chip variant-filled-secondary text-3xl align-top bg-slate-200 flex justify-between items-center"
		>
			<div class="flex items-center justify-between">
				<span>Studio Board</span>
				<div class="flex items-center">
					<PocketIcon size="24" />
					<Avatar
						src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
						width="w-10"
						class="rounded-full"
					/>
				</div>
			</div>
		</span>
	</span>

<div class="flex  space-x-40"  >
	{#each baskets as basket, basketIndex (basket)}
		<div
		   
			class="bg-white border border-gray-200 rounded-lg shadow-md w-80 mx-4"
			class:hovering={hoveringOverBasket === basket.name}
		>
			<div class="p-4 border-t-4 border-lime-500 w-full">
				<p class="text-gray-600"></p>
				<div class="card" 	
				>
					<header class="card-header text-cyan-700 text-2xl">{basket.name}</header>
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<section id="idd" 
						class="p-4" 
						on:dragenter={() => (hoveringOverBasket = basket.name)}
						on:dragleave={() => (hoveringOverBasket = null)}
						on:drop={(event) => drop(event, basketIndex)}
						on:dragover={(e) => e.preventDefault()}
						
					>
						{#each basket.items as item, itemIndex (item)}
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<div animate:flip={{ duration: 100 }}
								class="card border-2 rounded mb-4"
								class:hover={hoveringOverBasket === basket.name}
								aria-dropeffect="move"
								draggable={true}
								on:dragstart={(event) => dragStart(event, basketIndex, itemIndex)}
								
							>
								<header class="card-header">
									<span class="badge variant-filled-tertiary text-sm"
									class:bg-red-500={item.priority === 'high'}
									class:bg-yellow-500={item.priority === 'medium'}
									class:bg-green-500={item.priority === 'low'}
									
								>
									{item.priority}
								</span>
								</header>
								<section class="p-4">{item.title}</section>
								<section class="p-4">{item.describe}</section>
								<footer class="card-footer flex justify-between">
									<div class="flex">
										<Edit2Icon size="20" />
										<span class="mx-2"></span>
										<MessageCircleIcon size="20" />
									</div>
									<Avatar
										src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
										width="w-10"
										class="rounded-full"
									/>
								</footer>
							</div>
						{/each}
					</section>
					<footer class="card-footer flex items-center justify-center">
						<span class="mr-2">Add Task</span>
						<PlusCircleIcon size="40" class="fill-slate-700 text-white cursor-pointer" />
					</footer>
				</div>
			</div>
		</div>
	{/each}
</div>
</div>
<style>
	.hovering {
		border-color: orange;
	}
	.item {
		display: inline; /* required for flip to work */
	}
	li {
		background-color: lightgray;
		cursor: pointer;
		display: inline-block;
		margin-right: 10px;
		padding: 10px;
	}
	#idd div:hover {
		background: orange;
		color: white;
	}
	ul {
		border: solid lightgray 1px;
		display: flex; /* required for drag & drop to work when .item display is inline */
		height: 40px; /* needed when empty */
		padding: 10px;
	}
</style>

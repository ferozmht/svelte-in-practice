<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Edit2Icon, MessageCircleIcon, PlusCircleIcon, PocketIcon } from 'svelte-feather-icons';
	import { baskets } from './data.js';
	import { flip } from 'svelte/animate';

	let hoveringOverBasket: string | null = '';
	let draggingItem: { basketIndex: number, itemIndex: number } | null = null;

	function dragStart(event: DragEvent, basketIndex: number, itemIndex: number) {
		const data = { basketIndex, itemIndex };
		event.dataTransfer?.setData('application/json', JSON.stringify(data));
		draggingItem = data;
	}

	function dragEnd() {
		draggingItem = null;
	}

	function drop(event: DragEvent, basketIndex: number) {
		event.preventDefault();
		const json = event.dataTransfer?.getData('application/json');
		if (!json) return;

		const data = JSON.parse(json);

		// Remove the item from the original basket.
		const [item] = baskets[data.basketIndex].items.splice(data.itemIndex, 1);

		// Add the item to the drop target basket.
		baskets[basketIndex].items.push(item);

		hoveringOverBasket = null;
		draggingItem = null;
       }
        

		function getBorderColor(basketName: string): string {
        switch (basketName) {
            case 'To Do':
                return 'border-red-500';
            case 'In Progress':
                return 'border-blue-500';
            case 'Completed':
                return 'border-green-500';
			case 'Review':
                return 'border-green-500';
				 default:
                return 'border-gray-200';
        }
    }

	function toggleDarkMode() {
        document.documentElement.classList.toggle('dark');
    }


	const options = { duration: 100 };
</script>

<div class="bg-slate-200 bottom-20 dark:bg-black dark:text-white" >
	<span class="chip variant-filled-secondary text-3xl align-top bg-slate-200 flex justify-between items-center">
		<span class="chip variant-filled-secondary text-3xl align-top bg-slate-200 flex justify-between items-center">
			<div class="flex items-center justify-between">
				<span>Studio Board</span>
				<div class="flex items-center ml-8">
					<PocketIcon size="24" />
					
					<div class="flex items-center fixed right-0">
					<button on:click={toggleDarkMode} class="toggle-button ml-4 top-10 bottom-10 resize-y">
						Toggle Dark Mode
					</button>
					
				</div>
				
				</div>
			</div>
		</span>
	</span>
</div>

<div class="flex justify-center mt-8 mb-8">
	{#each baskets as basket, basketIndex (basket)}
		<div
			animate:flip={options}
			class="bg-white border border-gray-200 h-fit rounded-lg shadow-md w-80 mx-4  dark:text-white  dark:bg-black"
			class:hovering={hoveringOverBasket === basket.name}
			
		>
			<div class="p-4 border-t-4 border-amber-900 dark:text-white dark:bg-black">
		
				<p class="text-gray-600"></p>
				<div class="card">
					<header class="card-header text-cyan-700 text-2xl  dark:text-white" >{basket.name}</header>
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
							<div animate:flip={{ duration: 150 }}
								class="card border-2 rounded mb-4 "
								class:hover={hoveringOverBasket === basket.name}
								
							
								class:transparent={draggingItem && draggingItem.basketIndex === basketIndex && draggingItem.itemIndex === itemIndex}
								aria-dropeffect="move"
								draggable={true}
								on:dragstart={(event) => dragStart(event, basketIndex, itemIndex)}
								on:dragend={() => dragEnd()}
							>
								<header class="card-header dark:text-white" >
									<span class="badge variant-filled-tertiary text-sm"
										class:bg-red-500={item.priority === 'high'}
										class:bg-yellow-500={item.priority === 'medium'}
										class:bg-green-500={item.priority === 'low'}
									>
										{item.priority}
									</span>
								</header>
								<section class="p-4  dark:text-white">{item.title}</section>
								<section class="p-4  dark:text-white ">{item.title}</section>
								<section class="p-4  dark:text-white">{item.describe}</section>
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

<style>
	.hovering {
		border-color: orange;
	}
	.transparent {
		opacity: 0.5;
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
    background:lightgreen;
    color: white;
}

	ul {
		border: solid lightgray 1px;
		display: flex; /* required for drag & drop to work when .item display is inline */
		height: 40px; /* needed when empty */
		padding: 10px;
	}

	.toggle-button {
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        background: linear-gradient(45deg, #6B46C1, #3182CE);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        outline: none;
        margin-left: 1rem; 
    }

    .toggle-button:hover {
        background: linear-gradient(45deg, #3182CE, #6B46C1);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    .toggle-button:active {
        transform: translateY(0);
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    }
</style>

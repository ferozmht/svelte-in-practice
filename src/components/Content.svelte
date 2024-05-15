<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Edit2Icon, MessageCircleIcon, PlusCircleIcon, PocketIcon } from 'svelte-feather-icons';

	import { flip } from 'svelte/animate';

	function allowDrop(event: DragEvent) {
		event.preventDefault();
	}

	function dragStart(event: DragEvent) {
		console.log('dragging');
		event.preventDefault();
		event.dataTransfer!.setData('text/plain', (event.target as HTMLElement).id);
	}

	function drop(event: DragEvent) {
		console.log('dropping');
		event.preventDefault();
		const data = event.dataTransfer!.getData('text/plain');
		// Append the dragged element to the drop target
		(event.target as HTMLElement).appendChild(document.getElementById(data)!);
	}

	var cards = document.querySelectorAll('.card');

	cards.forEach(function (card) {
		card.addEventListener('dragstart', dragStart);
		card.addEventListener('dragover', allowDrop);
		card.addEventListener('drop', drop);
	});
</script>

<div class="bg-slate-200">
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
</div>

<div class="flex justify-center content-500 bg-slate-200">
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="w-1/4 p-4"
		on:drop={(event) => drop(event)}
		on:dragover={(event) => drop(event)}
		aria-dropeffect="move"
	>
		<div class="bg-white border border-gray-200 rounded-lg shadow-md">
			<div class="p-4 border-t-4 border-indigo-500 ..." aria-dropeffect="move">
				<header class="card-header text-cyan-700 text-2xl">Backlog</header>
				<div id="1" class="card" draggable="true"  aria-dropeffect="move">
					<header class="card-header">
						<span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white"
							>Low Priority</span
						>
					</header>
					<section class="p-4">Company Website redesign</section>
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
				<div
					id="2"
					class="card"
					draggable="true"
					on:drop={(event) => drop(event)}
					on:dragover={(event) => drop(event)}
					aria-dropeffect="move"
				>
					<header class="card-header">
						<span class="badge variant-filled-tertiary text-xl bg-teal-500 text-white"
							>Med Priority</span
						>
					</header>
					<section class="p-4">Mobile app login process prototype</section>
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
				<div id="3" class="card" draggable="true" on:drop={(event) => drop(event)}
          on:dragover={(event) => drop(event)}
          aria-dropeffect="move">
					<header class="card-header">
						<span class="badge variant-filled-tertiary text-xl bg-red-500 text-white"
							>High Priority</span
						>
					</header>
					<section class="p-4">Company Website redesign</section>
					<footer class="card-footer">Footer</footer>
				</div>
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
		</div>
	</div>

	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="w-1/4 p-4"
		on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move"
	>
		<div class="bg-white border border-gray-200 rounded-lg shadow-md">
			<div class="p-4 border-t-4 border-orange-300 ...">
				<p class="text-gray-600"></p>
				<div class="card">
					<header class="card-header text-cyan-700 text-2xl">In progress</header>
					<section class="p-4">
						<div
							id="4"
							class="card"
							draggable="true"
							on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move"
						>
							<header class="card-header">
								<span class="badge variant-filled-tertiary text-xl bg-red-500 text-white"
									>High Priority</span
								>
							</header>
							<section class="p-4">Company Website redesign</section>
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
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							id="5"
							class="card"
							draggable="true"
							on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move"
						>
							<header class="card-header">
								<span class="badge variant-filled-tertiary text-xl bg-teal-500 text-white"
									>Med Priority</span
								>
							</header>
							<section class="p-4">Mobile app login process prototype</section>
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
						<div
							id="6"
							class="card"
							draggable="true"
							on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move"
						>
							<header class="card-header">
								<span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white"
									>Low Priority</span
								>
							</header>
							<section class="p-4">Company Website redesign</section>
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
					</section>
					<footer class="card-footer flex items-center justify-center">
						<span class="mr-2">Add Task</span>
						<PlusCircleIcon size="40" class="fill-slate-700 text-white cursor-pointer" />
					</footer>
				</div>
			</div>
		</div>
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="w-1/4 p-4"
		on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move"
	>
		<div class="bg-white border border-gray-200 rounded-lg shadow-md">
			<div class="p-4 border-t-4 border-indigo-500 ...">
				<p class="text-gray-600"></p>
				<div class="card">
					<header class="card-header text-cyan-700 text-2xl">Review</header>
					<section class="p-4">
						<div
							class="card"
							draggable="true"
              on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move"
						>
							<header class="card-header">
								<span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white"
									>Low Priority</span
								>
							</header>
							<section class="p-4">Company Website redesign</section>
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
						<div class="card" draggable="true" on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move">
							<header class="card-header">
								<span class="badge variant-filled-tertiary text-xl bg-red-500 text-white"
									>High Priority</span
								>
							</header>
							<section class="p-4">Mobile app login process prototype</section>
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
							<div class="card" draggable="true"on:drop={(event) => drop(event)}
                on:dragover={(event) => drop(event)}
                aria-dropeffect="move">
								<header class="card-header">
									<span class="badge variant-filled-tertiary text-xl bg-teal-500 text-white"
										>Med Priority</span
									>
								</header>
								<section class="p-4">Shopping cart and product catalog</section>
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
								<div class="card" draggable="true" on:drop={(event) => drop(event)}
                  on:dragover={(event) => drop(event)}
                  aria-dropeffect="move">
									<header class="card-header">
										<span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white"
											>low Priority</span
										>
									</header>
									<section class="p-4">Company Website redesign</section>
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
							</div>
						</div>
					</section>
					<footer class="card-footer flex items-center justify-center">
						<span class="mr-2">Add Task</span>
						<PlusCircleIcon size="40" class="fill-slate-700 text-white cursor-pointer" />
					</footer>
				</div>
			</div>
		</div>
	</div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="w-1/4 p-4"
    on:drop={(event) => drop(event)}
    on:dragover={(event) => drop(event)}
    aria-dropeffect="move"
	>
		<div class="bg-white border border-gray-200 rounded-lg shadow-md">
			<div class="p-4 border-t-4 border-lime-500 ...">
				<p class="text-gray-600"></p>
				<div class="card">
					<header class="card-header text-cyan-700 text-2xl">Complete</header>
					<section class="p-4">
						<div
							class="card"
							draggable="true"
							on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move"
						>
							<header class="card-header">
								<span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white"
									>Low Priority</span
								>
							</header>
							<section class="p-4">Company Website redesign</section>
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
						<div
							class="card"
							draggable="true"
              on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move"
						>
							<header class="card-header">
								<span class="badge variant-filled-tertiary text-xl bg-teal-500 text-white"
									>Med Priority</span
								>
							</header>
							<section class="p-4">Mobile app login process prototype</section>
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
						<div
							class="card"
							draggable="true"
              on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move"
						>
							<header class="card-header">
								<span class="badge variant-filled-tertiary text-xl bg-indigo-400 text-white"
									>Low Priority</span
								>
							</header>
							<section class="p-4">User profile prototypes</section>
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
						<div
							class="card"
							draggable="true"
							on:drop={(event) => drop(event)}
					    on:dragover={(event) => drop(event)}
              aria-dropeffect="move"
						>
							<header class="card-header">
								<span class="badge variant-filled-tertiary text-xl bg-red-500 text-white"
									>High Priority</span
								>
							</header>
							<section class="p-4">Company Website redesign</section>
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
					</section>
					<footer class="card-footer flex items-center justify-center">
						<span class="mr-2">Add Task</span>
						<PlusCircleIcon size="40" class="fill-slate-700 text-white cursor-pointer" />
					</footer>
				</div>
			</div>
		</div>
	</div>
</div>

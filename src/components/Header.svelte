

<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import { Avatar } from '@skeletonlabs/skeleton';
   

    let currentTile: number = 0;
</script>
<header >
<AppBar class="app-bar h-10 p-0" padding="px-4" gridColumns="grid-cols-3" background="bg-blue-400 " slotDefault="place-self-center" slotTrail="place-content-end justify-self-end" slotLead="place-content-start justify-self-end">
    <svelte:fragment slot="lead">
        <input class="input border-none" title="Input (text)" type="text" placeholder="Search for tasks" />
    </svelte:fragment>
    
    <svelte:fragment slot="trail">
        <span class="text-sm text-white">Darshan R</span> 
        <div><Avatar class="w-8 text-white" initials="DR" background="bg-red-500"  rounded="rounded-full" /></div>
    </svelte:fragment>
</AppBar>
</header>

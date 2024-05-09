

<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import { Avatar } from '@skeletonlabs/skeleton';
    import {SearchIcon , BellIcon , MailIcon} from 'svelte-feather-icons';

    let currentTile: number = 0;
</script>
<header >
<AppBar class="app-bar h-10 p-0 md:p=14 lg:p=16 xl:p=20" padding="px-4"  gridColumns="grid-cols-3" background="bg-blue-400 " slotDefault="place-self-center" slotTrail="place-content-end justify-self-end" slotLead="place-content-start justify-self-end">
    <svelte:fragment slot="lead">
        <SearchIcon size="15" class="text-white" />
        <input class="input border-none placeholder-white text-white" title="Input (text)" type="text" placeholder="Search for tasks"/>
    </svelte:fragment>
    
    <svelte:fragment slot="trail">
        
    <MailIcon size="15" class="text-white"/>
    <div class="h-8 border-l border-white mx-4"></div> 
    <BellIcon size="15" class="text-white" />
    <div class="h-8 border-l border-white mx-4"></div> 
        <span class="text-sm text-white">Darshan R</span> 
        <div><Avatar class="w-8 text-white" initials="DR" background="bg-red-500"  rounded="rounded-full" /></div>
    </svelte:fragment>
</AppBar>
</header>

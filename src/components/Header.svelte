

<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';
    import { Avatar } from '@skeletonlabs/skeleton';
    import {SearchIcon , BellIcon , MailIcon, LogInIcon, LogOutIcon} from 'svelte-feather-icons';
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    let currentTile: number = 0;



    const popupFeatured: PopupSettings = {
	// Represents the type of event that opens/closed the popup
	event: 'click',
	// Matches the data-popup value on your popup element
	target: 'popupFeatured',
	// Defines which side of your trigger the popup will appear
	placement: 'bottom',
};
									
</script>
<header >
    
    

							

<AppBar class="app-bar h-10 p-0 md:p=14 lg:p=16 xl:p=20 ml-30" background="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" padding="px-4"  gridColumns="grid-cols-3"  slotDefault="place-self-center" slotTrail="place-content-end justify-self-end" slotLead="place-content-start justify-self-end" style="background: linear-gradient(to right, #6B46C1, #3182CE);">
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
        <div>
            <div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
                <div class="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center space-y-4">
                    <p class="text-2xl text-gray-800">Profile</p>
                   
                    <p class="text-2xl text-gray-800">Log Out</p>
                </div>
                
                <div class="arrow bg-surface-100-800-token"></div>
            </div>    
            <div>
                <div class="card p-4 w-72 shadow-xl" data-popup="popupFeatured">
                    <div><p>Hello </p></div>
                    <div class="arrow bg-surface-100-800-token"></div>
                </div>    
                <div use:popup={popupFeatured}>
                    <Avatar class="w-8 text-white" initials="DR" background="bg-red-500" rounded="rounded-full" />
                </div>
            </div>
            
        </div>
        
        
    </svelte:fragment>
</AppBar>

</header>

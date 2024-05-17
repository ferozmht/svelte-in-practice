<script lang="ts">
	import { goto, onNavigate } from "$app/navigation";
    import { AppRail, AppRailAnchor, AppRailTile } from "@skeletonlabs/skeleton";
    import { AirplayIcon, AtSignIcon , UserIcon , FileIcon , ServerIcon , CalendarIcon ,SettingsIcon} from 'svelte-feather-icons'
    let currentTile: number = 1;

     const gotoManager = () => {
        goto('/manager');
    
     }
     const gotoBoards = () => {
        goto('/boards');
    
     }
     const gotoSchedule = () => {
        goto('/schedule');
    
     }
      
     const gotoReports = () => {
        goto('/reports');
    
     }
         
     const gotoSettings = () => {
        goto('/settings');
    
     }


</script>
<div style="position: absolute; top: 0; left: 0; bottom:0" class="w-0 dark:bg-black dark:text-white"> 
<AppRail class="app-bar h-10 p-0 w-0" background="bg-white h-full dark:bg-black dark:text-white">
    <svelte:fragment slot="lead">
        <AppRailAnchor href="/">Todo</AppRailAnchor>
    </svelte:fragment>
    <!-- --- -->
   
    <AppRailTile  on:click={gotoManager} bind:group={currentTile} name="tile-1" value={0} title="tile-1" class=" text-white-200 " >
        <svelte:fragment slot="lead"><UserIcon size="27"  class="mx-auto"/></svelte:fragment>
        <div dir="ltr">
            <div class="border-s-indigo-500 " >
            <span>Manager</span>
        </div>
    </div>
    </AppRailTile>
    <AppRailTile  on:click={gotoBoards} bind:group={currentTile} name="tile-2" value={1} title="tile-2" class=" text-white-200">
        <svelte:fragment slot="lead" ><ServerIcon size="27" class="mx-auto"  /></svelte:fragment>
        <span>Boards</span>
    </AppRailTile>
    <AppRailTile on:click={gotoSchedule} bind:group={currentTile} name="tile-3" value={2} title="tile-3"class=" text-white-200 ">
        <svelte:fragment slot="lead"><CalendarIcon size="27" class="mx-auto"/></svelte:fragment>
       <span>Schedule</span>
    </AppRailTile>
    <AppRailTile   on:click={gotoReports} bind:group={currentTile} name="tile-4" value={3} title="tile-3"class=" text-white-200 ">
        <svelte:fragment slot="lead"><FileIcon size="27"  class="mx-auto"/></svelte:fragment>
       <span>Reports</span>
    </AppRailTile>
    <svelte:fragment slot="trail">
        <AppRailAnchor  on:click={gotoSettings} href="/" target="_blank" title="Account"><SettingsIcon size="27"  class="mx-auto"/></AppRailAnchor>
    </svelte:fragment>
</AppRail>
</div>
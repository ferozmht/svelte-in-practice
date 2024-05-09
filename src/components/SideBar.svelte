<script lang="ts">
    import { AppRail, AppRailAnchor, AppRailTile } from "@skeletonlabs/skeleton";
    import { AirplayIcon, AtSignIcon , UserIcon , FileIcon , ServerIcon , CalendarIcon ,SettingsIcon} from 'svelte-feather-icons'
    let currentTile: number = 1;
</script>
<div style="position: absolute; top: 0; left: 0; bottom:0"> 
<AppRail class="app-bar h-10 p-0" background="bg-blue-100 h-full">
    <svelte:fragment slot="lead">
        <AppRailAnchor href="/">Todo</AppRailAnchor>
    </svelte:fragment>
    <!-- --- -->
    <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1" class=" text-white-200 hover:bg-blue-300">
        <svelte:fragment slot="lead"><UserIcon size="27"  class="mx-auto hover:bg-sky-300"/></svelte:fragment>
        <span>Manager</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2" class=" text-white-200 hover:bg-blue-300">
        <svelte:fragment slot="lead" ><ServerIcon size="27" class="mx-auto"  /></svelte:fragment>
        <span>Boards</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3"class=" text-white-200 hover:bg-blue-300">
        <svelte:fragment slot="lead"><CalendarIcon size="27" class="mx-auto  hover:bg-sky-300"/></svelte:fragment>
        <span>Schedule</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3"class=" text-white-200 hover:bg-blue-300">
        <svelte:fragment slot="lead"><FileIcon size="27"  class="mx-auto  hover:bg-sky-300"/></svelte:fragment>
        <span>Reports</span>
    </AppRailTile>
    <svelte:fragment slot="trail">
        <AppRailAnchor href="/" target="_blank" title="Account"><SettingsIcon size="27"  class="mx-auto"/></AppRailAnchor>
    </svelte:fragment>
</AppRail>
</div>
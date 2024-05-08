<script lang="ts">
    import { AppRail, AppRailAnchor, AppRailTile } from "@skeletonlabs/skeleton";
    import { AirplayIcon, AtSignIcon , UserIcon , FileIcon , ServerIcon , CalendarIcon} from 'svelte-feather-icons'
    let currentTile: number = 1;
</script>
<div style="position: absolute; top: 0; left: 0; right: 0; bottom:0"> 
<AppRail class="app-bar h-10 p-0" background="bg-blue-100 h-full">
    <svelte:fragment slot="lead">
        <AppRailAnchor href="/">Todo</AppRailAnchor>
    </svelte:fragment>
    <!-- --- -->
    <AppRailTile bind:group={currentTile} name="tile-1" value={0} title="tile-1">
        <svelte:fragment slot="lead"><UserIcon size="27" /></svelte:fragment>
        <span>manage</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-2" value={1} title="tile-2">
        <svelte:fragment slot="lead"><CalendarIcon size="27" /></svelte:fragment>
        <span>Boards</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
        <svelte:fragment slot="lead"><ServerIcon size="27"/></svelte:fragment>
        <span>Scheduler</span>
    </AppRailTile>
    <AppRailTile bind:group={currentTile} name="tile-3" value={2} title="tile-3">
        <svelte:fragment slot="lead"><FileIcon size="27" /></svelte:fragment>
        <span>Reports</span>
    </AppRailTile>
    <svelte:fragment slot="trail">
        <AppRailAnchor href="/" target="_blank" title="Account">(icon)</AppRailAnchor>
    </svelte:fragment>
</AppRail>
</div>
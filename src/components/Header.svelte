<script>
import { AppBar } from '@skeletonlabs/skeleton';
</script>
<div style="background-color: pink;">
<AppBar class="app-bar" gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <div>Hassle</div>
    </svelte:fragment>
    <div style="grid-column: span 3;">search for tasks</div>
    <svelte:fragment slot="trail">
        <div style="margin-right: 20px;">name</div>   
        <div style="margin-right: 20px;">contact</div>
    </svelte:fragment>
</AppBar>
</div>


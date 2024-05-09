<script lang="ts">
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import SideBar from "../components/SideBar.svelte";

</script>

<div class="wrapper">
    <Header />


    <SideBar />
    
</div>

<Footer />

<style lang="postcss">
    :global(html) {
        background-color: themergb(200, 204, 210)9;
        height: 100%;
    }
    
   
</style>

<script lang="ts">
    import Header from "../components/Header.svelte";
    // import Footer from "../components/Footer.svelte";
    import SideBar from "../components/SideBar.svelte";
	
</script>

<div class="wrapper">
    <Header />


    <SideBar />
    
</div>

<!-- <Footer /> -->

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
        height: 100%;
    }
    
    body {
        margin: 0;
        display: flex;
        flex-direction: column;
    }
    
    .wrapper {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    
    Footer {
        margin-top: auto;
    }
</style>

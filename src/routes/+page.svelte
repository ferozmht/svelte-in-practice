<script lang="ts">
	import Footer from "../components/Footer.svelte";
import Header from "../components/Header.svelte";


</script>

<Header />
<h1 class="text-3xl font-bold underline" >
    To-Do App
</h1>

<Footer />
<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
}
</style>

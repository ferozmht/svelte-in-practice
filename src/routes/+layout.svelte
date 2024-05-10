<script>
  import "../app.css";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import SideBar from "../components/SideBar.svelte";
  import '../theme.postcss';

</script>  
<div class="wrapper">
  <Header />
  <SideBar />
  <div class="ml-24">
  <slot />
</div>
</div>
<Footer />



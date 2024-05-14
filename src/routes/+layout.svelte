<script>
  import "../app.css";
	import Content from "../components/Content.svelte";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import SideBar from "../components/SideBar.svelte";
  import '../theme.postcss';
  
</script>  
<div class="wrapper">
  <Header />
  <SideBar />
  <div class="ml-24">
 
</div>
  <div class="ml-20">
  <slot />
  <Content />
</div>
</div>
<Footer />



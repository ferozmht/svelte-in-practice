<script>
  import "../app.css";
	import Content from "../components/Content.svelte";
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import SideBar from "../components/SideBar.svelte";
  import '../theme.postcss';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';

import { storePopup } from '@skeletonlabs/skeleton';
storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
			
</script>  
<div class="wrapper dark:bg-black" >
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



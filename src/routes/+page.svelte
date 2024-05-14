<script lang="ts">
// Get the slide toggle element
const slideToggle: HTMLElement | null = document.querySelector('SlideToggle');

// Add event listener to toggle dark mode when the slide toggle changes
if (slideToggle) {
    slideToggle.addEventListener('change', () => {
        // Toggle dark mode class on the root HTML element
        document.documentElement.classList.toggle('dark');
    });
}

</script>



<style lang="postcss">
    :global(html) {
        background-color: themergb(200, 204, 210)9;
        height: 100%;
    }
    
   
</style>

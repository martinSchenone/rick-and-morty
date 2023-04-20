
<script>
	import '../app.css';
	import Footer from '../lib/components/Footer.svelte';
	import Nav from '../lib/components/Nav.svelte';
</script>
<div class="cont bg-base-200">
<Nav />
<slot />
<Footer/>
</div>



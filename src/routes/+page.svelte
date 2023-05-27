<script>
    import Home from "./Home.svelte";
    import Login from "./Login.svelte";
</script>

<style global>
    
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
    @import '../hamburgers.css';
    * {font-family: 'Josefin Sans', sans-serif;}

    /* CSS Reset, taken from https://www.joshwcomeau.com/css/custom-css-reset/ */
    *, *::before, *::after {box-sizing: border-box;margin: 0;padding: 0;
    } * {margin: 0;
    } body, main { min-height: 100vh;
    } body {line-height: 1.5;-webkit-font-smoothing: antialiased;
    } img, picture, video, canvas, svg {display: block;max-width: 100%;
    } input, button, textarea, select {font: inherit;
    } p, h1, h2, h3, h4, h5, h6 {overflow-wrap: break-word;}

</style>

<main>
    
    <Home/>
    <!-- <Login/> -->
</main>



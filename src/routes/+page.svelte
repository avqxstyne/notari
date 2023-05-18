<script>
    import Home from "./Home.svelte";
    import Login from "./Login.svelte";
</script>

<style global>
    /* CSS Reset, taken from https://www.joshwcomeau.com/css/custom-css-reset/ */
    *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    } * {
    margin: 0;
    } body, main { min-height: 100vh;} 
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    } img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    } input, button, textarea, select {
        font: inherit;
    } p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }


    main  {
        background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('../images/pexels-photo-450055.jpeg');
    
  background-size: contain;
        -webkit-animation: slidein 50s;
        animation: slidein 50s;

        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;

        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;

        -webkit-animation-direction: alternate;
        animation-direction: alternate;              
}

@-webkit-keyframes slidein {
from {background-position: top; background-size:3000px; }
to {background-position: -100px 0px;background-size:2750px;}
}

@keyframes slidein {
from {background-position: top;background-size:3000px; }
to {background-position: -100px 0px;background-size:2750px;}

}

    

</style>

<main>
    <!-- <h1>Hello there!</h1>
    <Home/> -->
    <Login/>
</main>



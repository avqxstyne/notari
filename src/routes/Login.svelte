<style lang="scss">
	@-webkit-keyframes slidein {
		from {background-position: top; background-size:3000px; }
		to {background-position: -100px 0px;background-size:2750px;}
	}

	@keyframes slidein {
		from {background-position: top;background-size:3000px; }
		to {background-position: -100px 0px;background-size:2750px;}
	}

    $color: rgb(171, 49, 49);
    $bg1: #1f2933;
    
	// Full-screen container element to center content
    .login-main {
        height: 100%;
		min-height: 100vh;
        display: flex; align-items: center; justify-content: center;

		
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

		// Visible and designed area with content in it
        form {
            background-color: $bg1;
            box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
            transition: 0.3s ease-in-out;
            padding: 4rem;
            display: flex; justify-content: center; flex-direction: column;
            gap: 1.5rem;

			// Welcome to Notari title colors
            h1 {color: white; span {color: $color;}}

            button {
                border: none; outline: none;
                color: rgb(255, 255, 255);
                background-color: $color;
                font-size: 1.25rem;
                padding: 0.75rem 1.75rem;
                transition: 0.3s ease;
                border-radius: 9999px;
                margin-top: 1rem;
                max-width: fit-content;
                outline: 3px solid $color;

                &:hover {background-color: $bg1; }
                &:active {transform: translateY(-5px);}
            }
        }
	}
    

// ========================================================================================= //
// INPUT SECTION 	(NOT HOMEMADE)  	(DO NOT EDIT)										 //    
// ========================================================================================= //
$bg-color: #2e2e2e;
$hl-color: $color;
$muted-color: mix(white, $bg-color, 70%);
$trans-time: 300ms;
$width: 100%; .group {position: relative;}
textarea {resize: none;}input, textarea {background: none;color: $muted-color;font-size: 18px;
padding: 10px 10px 10px 5px;display: block;width: $width;border: none;border-radius: 0;border-bottom: 1px solid $muted-color;
&:focus {outline: none;}&:focus ~ label,&:valid ~ label {top: -14px;font-size: 12px;color: $hl-color;}&:focus ~ .bar:before {
width: $width;}}input[type="password"] {letter-spacing: 0.3em;}label {color: $muted-color;font-size: 16px;font-weight: normal;
position: absolute;pointer-events: none;left: 5px;top: 10px;transition: $trans-time ease all;}.bar {position: relative;
display: block;width: $width;&:before {content: '';height: 2px;width: 0;bottom: 0px;position: absolute;background: $hl-color;
transition: $trans-time ease all;left: 0%;}}
// ========================================================================================= //
// INPUT SECTION 	(NOT HOMEMADE)  	(DO NOT EDIT)										 //    
// ========================================================================================= //
</style>


<script lang="ts">
	// For testing purposes
    // import { onMount } from "svelte";
	
    const endpoint = "http://localhost:5171/login";

    async function loginSubmitToBackend() {

		// Inputs from login form
		const emailInput = document.getElementById("email-input") as HTMLInputElement;
		const passwordInput = document.getElementById("password-input") as HTMLInputElement;
		let emailValue = emailInput.value;
		let passwordValue = passwordInput.value;
		
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 
				email: emailValue,
				password: passwordValue
			})
		});
		// const data = await response.text();
		// console.log(data);
	};

</script>


<div class="login-main">
    <form>

		<!-- HEADER TEXT -->
        <h1>Welcome, <br> to <span>Notari</span></h1> 
        
		<!-- EMAIL INPUT -->
        <div class="group">
            <input type="email" required name="email" autocomplete="off" id="email-input"/>
            <span class="highlight"></span>
            <span class="bar"></span>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Email</label>    
        </div>

		<!-- PASSWORD INPUT -->
        <div class="group">
            <input id="password-input" type="password" required name="password" autocomplete="off"/>
            <span class="highlight"></span>
            <span class="bar"></span>
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label>Password</label>
        </div>  

		<!-- SUBMIT BUTTON -->
        <button type="submit" on:click={loginSubmitToBackend}>Submit</button>

    </form>
</div>
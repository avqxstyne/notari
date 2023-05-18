
<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

    * {
      font-family: 'Josefin Sans', sans-serif;
    }

    $color: rgb(171, 49, 49);
    $bg1: #1f2933;
    
    .login-main {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        
        $padding: 4rem;
        form {
            background-color: $bg1;
            box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
            transition: 0.3s ease-in-out;
            padding: calc($padding * 1);
            display: flex;
            justify-content: center;
            flex-direction: column;
            
            gap: 1.5rem;
            // &:hover{
            //     box-shadow: 0px 7.5px 15px 5px rgba(0, 0, 0, 0.5);
            //     transform: translateY(-5px);
            // }

            h1 {
              color: white;
              span {
                color: $color;
              }
            }
            button {
                border: none;
                outline: none;
                color: rgb(255, 255, 255);
                background-color: $color;
                font-size: 1.25rem;
                padding: 0.75rem 1.75rem;
                transition: 0.3s ease;
                border-radius: 9999px;
                margin-top: 1rem;
                max-width: fit-content;
                outline: 3px solid $color;

                &:hover {
                    background-color: $bg1;
                    
                    
                }

                &:active {
                    transform: translateY(-5px);
                   
                }
            }
        }
    }

// ============================== //
// INPUT SECTION (NOT HOMEMADE)//    
// ============================== //
$bg-color: #2e2e2e;
$hl-color: $color;
$muted-color: mix(white, $bg-color, 70%);
$trans-time: 300ms;
$width: 100%; .group {position: relative;}
textarea {resize: none;}
input, textarea {
  background: none;
  color: $muted-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: $width;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $muted-color;
  &:focus {
    outline: none;
  }&:focus ~ label,&:valid ~ label {
    top: -14px;
    font-size: 12px;
    color: $hl-color;
  }&:focus ~ .bar:before {
    width: $width;
  }
}input[type="password"] {
  letter-spacing: 0.3em;
}label {
  color: $muted-color;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: $trans-time ease all;
}.bar {
  position: relative;
  display: block;
  width: $width;
  &:before {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: $hl-color;
    transition: $trans-time ease all;
    left: 0%;
  }
}

</style>


<div class="login-main">
    <form>
        <h1>Welcome</h1> 
        <!-- , <br> to <span>Notari</span> -->
        <!-- TODO
            Styling of whole login page
            Style differences and animations for incorrect password, unformatted email.
            Submit form to a database and send back a response
        -->
        <div class="group">
            <input type="text" required />
            
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Email</label>
            
        </div>
        <div class="group">
            <input type="password" required/><span class="highlight"></span><span class="bar"></span>
            <label>Password</label>
        </div>        
        <button type="submit">
            Submit
        </button>
    </form>
</div>
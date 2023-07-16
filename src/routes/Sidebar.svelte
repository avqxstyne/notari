<style lang="scss">
    // LIGHT MODE
    $red-1: #601f1f;
    $white-0: #FFFFFF;
    $white-1: #eeeeee;
    $white-2: #bfbfbf;
    $middle: grey;
    $text-color: black;

    // DARK MODE

    // $red-1: #9b2e2e;
    // $white-0: #000000;
    // $white-1: #111111;
    // $white-2: #404040; 
    // $middle: rgb(50, 48, 48);
    // $text-color: white;

    .sidebar {
        max-width: 234.6px;
        background-color: $white-1;
        box-shadow: 10px 0 10px 0px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        color: $text-color;
        transition: 0.4s ease;flex: 0 1 auto;
        position: fixed;
        top: 0;
        height: 100%; min-height: 100vh;
        
        
        .header-container {
            display: flex;
            gap: 2rem;
            align-items: center;
            padding-inline: 2rem;

            .header {position: relative;
                &::after {
                    content: "";
                    width: 100%; height: 4px;
                    background-color: $red-1;
                    position: absolute;
                    bottom: -8px; left: 0px;
                }
            }
        }
        .sidebar-links {
            transition: 0.3s ease;
            padding: 0.5rem 2rem;
            background-color: $white-1;
            &:hover {background-color: rgba($color: $white-2, $alpha: 0.3);}

            button {
                width: 100%;
                max-width: 100%;
                text-align: left;

                appearance: none;
                border: none;
                background-color: transparent;
                outline: none;
                display: block;
                font-family: inherit;
                font-size: inherit;
                color: $text-color;
                text-overflow: ellipsis;

                /* Needed to make it work */
                overflow: hidden;
                white-space: nowrap;
            }
        }
    }
</style>



<script>
    import { loadSidebarLinks, loadNoteFromMongo } from "../functions/functions";    
    import { onMount } from "svelte";

    
    /**
	 * @type {any[][]}
	 */
    let sidebarArray = [];
    Promise.resolve(loadSidebarLinks()).then((value) => {
        sidebarArray = value;
    })

    // HAMBURGER
    onMount(() => {
        var hamburger = document.querySelector(".hamburger");
        var sidebar = document.querySelector(".sidebar")
        // @ts-ignore
        hamburger.addEventListener("click", function() {
            // @ts-ignore
            hamburger.classList.toggle("is-active");            
            // @ts-ignore
            if (hamburger.classList.contains("is-active")) {
                // @ts-ignore
                sidebar.style.transform = 'translateX(0)';
                // @ts-ignore
                for (const child of sidebar.children) {
                    // @ts-ignore
                    child.style.opacity = 1;
                }
            }
            // @ts-ignore
            if (!hamburger.classList.contains("is-active")) {
                // @ts-ignore
                sidebar.style.transform = 'translateX(calc(-100% + 4rem + 40px))';
                // @ts-ignore
                for (const child of sidebar.children) {
                    if (child.classList.contains("hamburger") || child.classList.contains("header-container") ) {
                        // @ts-ignore
                        child.style.opacity = 1;
                    } else {
                        // @ts-ignore
                        child.style.opacity = 0;
                    }   
                }     
            }
        });
    });
</script>


<div class="sidebar">

    <div class="header-container">
        <h1 class="header">Notari</h1>
        <div class="hamburger hamburger--collapse is-active">
            <div class="hamburger-box">
                <div class="hamburger-inner"></div>
            </div>
        </div>
    </div>

    <!-- SIDEBAR -->
    <!-- A svelte loop lays out each html element by seeing how many elements are in the data
    base and representing them (promise is the result of getthesidebar() function).
    When each link is clicked it loads the corresponding note -->
    {#await sidebarArray then res}
        {#each res as el}
            <div class="sidebar-links note-not-loaded">
                <button on:click={() => {loadNoteFromMongo(el[1])}}>
                    {el[1]}
                </button>
            </div>
        {/each}
    {/await}
    <!-- SIDEBAR -->
    
</div>  
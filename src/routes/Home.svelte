<style lang="scss">

    $bg-color: #121212;
    $color-1000: #10171e;
    $color-900: #1F2933;
    $color-800: #323F4B;
    $color: rgb(171, 49, 49);
    

    .home-main {
        height: 100%;
		min-height: 100vh;
        display: flex; align-items: center; 

        background-color: $color-1000;
        overflow-x: hidden;

        .sidebar, .primary-area {
            height: 100%; min-height: 100vh;
            
        } .sidebar {
            width: fit-content;
            background-color: $color-900;
            box-shadow: 10px 0 10px 0px rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            color: white;
            transition: 0.4s ease;flex: 0 1 auto;
            
            .header-container {
                display: flex;
                gap: 2rem;
                align-items: center;
                padding-inline: 2rem;

                .header {position: relative;
                    &::after {
                        content: "";
                        width: 100%; height: 4px;
                        background-color: $color;
                        position: absolute;
                        bottom: -8px; left: 0px;
                    }
                }
            }
            .sidebar-links {
                transition: 0.5s ease;
                padding: 0.5rem 2rem;
                &:hover {background-color: rgba($color: #FFFFFF, $alpha: 0.3);}
            }
        }

        .primary-area {
            flex: 1 1 auto;
            .textarea {
                resize: none;
                border: none;
                outline: none;
                margin: 5%;
                width: 90%;

                
            }
        }

        
    }
</style>


<script >
    import { onMount } from "svelte";
	
    const endpoint = "http://localhost:5171/getsidebar";

    async function loginSubmitToBackend() {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json'}
			}
		);
		const data = await response.json();
        // const data2 = data.text();
        var result = [];

        for(var i in data)
            result.push([i, data [i]]);
		
        return result;
	};

    let promise = loginSubmitToBackend();

    // HAMBURGER
    onMount(() => {
        var hamburger = document.querySelector(".hamburger");
        var sidebar = document.querySelector(".sidebar")
        // @ts-ignore
        hamburger.addEventListener("click", function() {
            // @ts-ignore
            hamburger.classList.toggle("is-active");
            // @ts-ignore
            // sidebar.classList.toggle("sidebar--is-compressed");
            
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


<div class="home-main">
    <div class="sidebar">

        <div class="header-container">
            <h1 class="header">Notari</h1>
            <div class="hamburger hamburger--collapse is-active">
                <div class="hamburger-box">
                    <div class="hamburger-inner"></div>
                </div>
            </div>
              
        </div>

        {#await promise then res}
            {#each res as el}
                <div class="sidebar-links">{el[1]}</div>
            {/each}
        {/await}
        
    </div>  
    <div class="primary-area">
        <textarea class="textarea" style="resize: none"></textarea>
    </div>
</div>
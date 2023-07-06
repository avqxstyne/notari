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
            max-width: 234.6px;
            background-color: $color-900;
            box-shadow: 10px 0 10px 0px rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            color: white;
            transition: 0.4s ease;flex: 0 1 auto;
            position: fixed;
            top: 0;
            
            
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
                    color: inherit;
                    text-overflow: ellipsis;

                    /* Needed to make it work */
                    overflow: hidden;
                    white-space: nowrap;
                }
            }
        }

        .primary-area {
            flex: 1 1 auto;
            padding-top: 5rem;
            padding-right: 5rem;
            padding-left: calc(5rem + 40px + 4rem);
            
            textarea {
                resize: none;
                border: none;
                outline: none;
                width: 100%;
                font-family: 'Josefin Sans', sans-serif;
                margin: 0;
                border-top: 4px solid $color;
                border-left: 4px solid $color;
                border-right: 4px solid $color;
                background-color: $color-1000;
                color: whitesmoke;
                padding: 1rem;
                box-sizing: border-box;
            }

            .save {
                width: 4rem;
                height: 2rem;
            }
        }

        
    }
</style>


<script >
    import { onMount } from "svelte";
	
    
    // Sidebar links fetchers
    async function getthesidebar() {
        const endpoint = "http://localhost:5171/getsidebar";

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
    let promise = getthesidebar();

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

        function saveTextAsFile() {
            // @ts-ignore
            var textToWrite = document.querySelector('.textarea').value;
            var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
            console.log(textFileAsBlob)
            var fileNameToSaveAs = "file.txt"; //filename.extension

        //     var downloadLink = document.createElement("a");
        //     downloadLink.download = fileNameToSaveAs;
        //     downloadLink.innerHTML = "Download File";
        //     if (window.webkitURL != null) {
        //         // Chrome allows the link to be clicked without actually adding it to the DOM.
        //         downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        //     } else {
        //         // Firefox requires the link to be added to the DOM before it can be clicked.
        //         downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        //         downloadLink.onclick = destroyClickedElement;
        //         downloadLink.style.display = "none";
        //         document.body.appendChild(downloadLink);
        //     }

        //     downloadLink.click();
        }

        // var button = document.querySelector('.save');
        // // @ts-ignore
        // button.addEventListener('click', saveTextAsFile);

        // /**
        //      * @param {{ target: any; }} event
        // */
        // function destroyClickedElement(event) {
        // // remove the link from the DOM
        // document.body.removeChild(event.target);
        // }



    });

    async function addNewNote() {
        // @ts-ignore
        var textToWrite = document.querySelector('.textarea').value;
        // @ts-ignore
        var noteName = document.querySelector('.note-name').value;
        var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
        var myname = "grayson";
        var id = 1;
        
		const blobSender = await fetch("http://localhost:5171/addnewnote/blob", {
			method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/json'
            // },
            body: textFileAsBlob
        });
		// const data = await blobSender.json();
        // console.log(data)
        const credentialSender = await fetch("http://localhost:5171/addnewnote/credentials", {
			method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: myname,
                fileName: noteName
            })
        });
	};
    
    // @ts-ignore
    async function loadNoteFromMongo(element) {
        const endpoint = "http://localhost:5171/findnote";

        console.log('function fired')

        console.log(element)

        const response = await fetch(endpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                notename: element
            })
		})
    }
    
    
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
                <div class="sidebar-links">
                    <button on:click={() => {loadNoteFromMongo(el[1])}}>
                        {el[1]}
                    </button>
                </div>
            {/each}
        {/await}
        
    </div>  
    <div class="primary-area">
        <button class="save">overwrite existing note</button>
        <button class="save" on:click={addNewNote}>add new note</button>
        <input placeholder="New note name: " class="note-name">
        
        <textarea class="textarea" style="resize: none" rows="30"></textarea>

        <!-- 
            TODO
            1. Save contents of textarea into a file or something
            2. Send the file to mongo or another db (or send raw text to mongo)
            3. Load a file into the textarea
            4. Overwrite the file with changes in the textarea
        
        
        
        -->
    </div>
</div>
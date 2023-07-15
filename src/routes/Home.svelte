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

    .home-main {
        height: 100%;
		min-height: 100vh;
        display: flex; align-items: center; 

        background-color: $white-1;
        overflow-x: hidden;
        

        .sidebar, .primary-area {
            height: 100%; min-height: 100vh;
            
        } .sidebar {
            max-width: 234.6px;
            background-color: $white-1;
            box-shadow: 10px 0 10px 0px rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            color: $text-color;
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

        .primary-area {
            flex: 1 1 auto;
            gap: 2rem;
            padding-top: 2rem;
            padding-right: 5rem;
            padding-left: calc(5rem + 40px + 4rem);
            display: flex;
            flex-direction: column;
            
            textarea {
                resize: none;
                border: none;
                outline: none;
                width: 100%;
                font-family: 'Josefin Sans', sans-serif;
                margin: 0;
                border-top: 1px solid $middle;
                border-left: 1px solid $middle;
                border-right: 1px solid $middle;
                background-color: $white-0;
                color: $text-color;
                padding: 1rem;
                box-sizing: border-box;
            }
        }
    }

    .save {
        background-color: transparent;
        color: $text-color;

        border-radius: 0.5rem;
        border: none;
        outline: none;
        padding: 0.5rem 1.5rem;
        font-size: 1rem;
        font-family: inherit;

        transition: 0.2s;
        &:hover {
            background-color: rgba($red-1, 0.4);
        }

    }

    .textarea-controls {
        padding: 0.25rem;
        background-color: rgba($red-1, 0.2);
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;

        input {
            background-color: $white-1;
            border-radius: 0.5rem;
            padding: 0.25rem 0rem;
            color: $text-color;
            border: none;
            outline: none;
            // border-left: 2px solid $red-1;
            font-size: 1rem;
        }
    }
</style>

<script >
    import ConfirmationModal from "./ConfirmationModal.svelte";
    import { onMount } from "svelte";
    
    // Sidebar links fetchers
    async function loadSidebarLinks() {
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
    let promise = loadSidebarLinks();

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
        
		const blobSender = await fetch("http://localhost:5171/addnewnote/blob", {
			method: 'POST',body: textFileAsBlob
        });
        const credentialSender = await fetch("http://localhost:5171/addnewnote/credentials", {
			method: 'POST',
            headers: {'Accept': 'application/json','Content-Type': 'application/json'},
            body: JSON.stringify({
                userName: myname,
                fileName: noteName
            })
        });
	};
    
    // @ts-ignore
    async function loadNoteFromMongo(elementParam) {

        // Fetching the text
        const endpoint = "http://localhost:5171/findnote";
        const response = await fetch(endpoint, {
			method: 'POST',headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ notename: elementParam })
        });
        // Loading it into the textarea
        const data = await response.text();
        let textarea = document.querySelector('.textarea');
        // @ts-ignore
        textarea.value = data;

        // when button clicked, it get .note-is-loaded, and all others go back to not loaded.)
        const sidebarLinks = document.getElementsByClassName("sidebar-links");
        for (let i = 0; i < sidebarLinks.length; i++) {
            if (sidebarLinks[i].classList.contains("note-is-loaded")) {
                sidebarLinks[i].classList.remove("note-is-loaded");
                sidebarLinks[i].classList.add("note-not-loaded")
            }
            // @ts-ignore
            if (sidebarLinks[i].innerText == elementParam) {
                sidebarLinks[i].classList.remove("note-not-loaded")
                sidebarLinks[i].classList.add("note-is-loaded");
            }
        }
    }
    
    async function updateNote() {
        // @ts-ignore
        var textToWrite = document.querySelector('.textarea').value;
        var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });

        // @ts-ignore
        var noteName = document.querySelector('.note-is-loaded').innerText;
        var myname = "grayson";
        
		const blobSender = await fetch("http://localhost:5171/updatenote/blob", {
			method: 'POST', body: textFileAsBlob
        });
        const credentialSender = await fetch("http://localhost:5171/updatenote/credentials", {
			method: 'POST',
            headers: {'Accept': 'application/json','Content-Type': 'application/json'},
            body: JSON.stringify({
                userName: myname,
                fileName: noteName
            })
        });
    }

    function alert() {
        // @ts-ignore
        document.querySelector('.modal-wrapper').style.display = "block";
        console.log("bruh")
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

        <!-- SIDEBAR -->
        <!-- A svelte loop lays out each html element by seeing how many elements are in the data
        base and representing them (promise is the result of getthesidebar() function).
        When each link is clicked it loads the corresponding note -->
        {#await promise then res}
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
    <div class="primary-area">

        <div class="textarea-controls">
            <button class="save" on:click={updateNote}>Save</button>
            <button class="save" id="confirmation-modal-trigger" on:click={alert}>Delete</button>
            <button class="save" on:click={addNewNote}>Add</button>
            <input placeholder="Name: " class="note-name">
        </div>
        
        <textarea class="textarea" style="resize: none" rows="30"></textarea>

        <ConfirmationModal />
        <!-- 
        
        -->
    </div>
</div>
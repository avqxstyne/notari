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
        
        .primary-area {
            flex: 1 1 auto;
            gap: 2rem;
            padding-top: 2rem;
            padding-right: 5rem;
            padding-left: calc(5rem + 40px + 4rem);
            display: flex;
            flex-direction: column;
            height: 100%; min-height: 100vh;  

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

        &:active {
            transform: scale(0.9)
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
// @ts-nocheck

	import { loadSidebarLinks } from "../functions/functions";
	import AlertModal from "./AlertModal.svelte";
    import ConfirmationModal from "./ConfirmationModal.svelte";
	import Sidebar from "./Sidebar.svelte";

  
    let promise = loadSidebarLinks()

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
        // @ts-ignore
        document.querySelector('.alert-wrapper').style.display = "block";
	};
    
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

    function displayModal() {
        let buttons = document.getElementsByClassName('modal-action');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", () => {
                // @ts-ignore
                document.querySelector('.modal-wrapper').style.display = "none";
            })
        }
        // @ts-ignore
        document.querySelector('.modal-wrapper').style.display = "block";
    }

    console.log()

</script>

<div class="home-main">
    
    <Sidebar mytext="hello"/>
    <div class="primary-area">

        <div class="textarea-controls">
            <button class="save" on:click={updateNote}>Save</button>
            <button class="save" id="confirmation-modal-trigger" on:click={displayModal}>Delete</button>
            <button class="save" on:click={addNewNote}>Add</button>
            <input placeholder="Name: " class="note-name">
        </div>
        
        <textarea class="textarea" style="resize: none" rows="30"></textarea>

        <ConfirmationModal />
        <AlertModal />
        <!-- 
        
        -->
    </div>
</div>
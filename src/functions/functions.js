export async function loadSidebarLinks() {
    try {

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
    } catch(e) {
        console.log(e);
        console.error(e);
    }

};

// @ts-ignore
export async function loadNoteFromMongo(elementParam) {

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
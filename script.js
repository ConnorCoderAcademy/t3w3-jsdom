let favouriteMedia = [
    "Modern Family",
    "Hells Kitchen",
    "Arcane",
    "WW2 Documentary",
    "Friends"
];

function exampleHello() {
    console.log("Hello World");
};

function createListOfMedia(){
    let rootUlNode = document.querySelector("ul");
    //clean the list to avoid duplication
    rootUlNode.innerHTML = "";
    //console.log(rootUlNode)
    favouriteMedia.forEach(mediaItem => {
        //console.log(mediaItem);

        //Create an element but do not display yet
        let newListItem = document.createElement("li");

        let removeItemButton = document.createElement("button");

        // newListItem.innerHTML = mediaItem
        // newListItem.innerText = mediaItem

        //Assign some data to the element
        newListItem.textContent = mediaItem;
        newListItem.id = mediaItem
        removeItemButton.textContent = "Remove Item";
        removeItemButton.onclick = (() => removeItemFromList(mediaItem));
        newListItem.appendChild(removeItemButton)
        //Add the element to the visible page
        rootUlNode.appendChild(newListItem);
        //rootUlNode.appendChild(removeItemButton);
    })
}

function removeItemFromList(targetItem) {
    let targetItemNode = document.getElementById(targetItem);
    targetItemNode.parentNode.removeChild(targetItemNode);
}

function addItemToList(event){
    event.preventDefault();
    //console.log(event)
    console.log("We are trying to add an item to the list");
    let realInputField = document.getElementById("real-name-input");
    console.log(realInputField.value);
    let newItemName = realInputField.value;
    favouriteMedia.push(newItemName);
    console.log(favouriteMedia)
    createListOfMedia();
}

let realFormSubmitButton = document.getElementById("real-formsubmit");
realFormSubmitButton.addEventListener("click", addItemToList);
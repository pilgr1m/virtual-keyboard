 const Keyboard = {
    elements: {
        main:null,
        keysContainer:null,
        keys: []
    },

     eventHandlers:{
        oninput: null,
        onclose: null
     },

     properties: {
        value: "",
         capsLock: false
     },

     init() {
         // create main elements
         this.elements.main = document.createElement("div");
         this.elements.keysContainer = document.createElement("div");
         // sup main elements
         this.elements.main.classList.add("keyboard", "1keyboard_hidden");
         this.elements.keysContainer.classList.add("keyboard_keys");
         // add to DOM
         this.elements.main.appendChild(this.elements.keysContainer);
         document.body.appendChild(this.elements.main);
     },

     _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",

            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];
        //create HTML for an icon
         const createIconHTML = (icon_name) => {
             return `<i class="material-icon">${icon_name}</i>`
         }
         keyLayout.forEach(key => {
             const keyElement = document.createElement("button");
             const insertLineBreake = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

             //add attributes classes
             keyElement.setAttribute("type", "button");
             keyElement.classList.add("keyboard_key");

             switch (key) {
                 case "backspace" :
                     keyElement.classList.add("keyboard_key-wide");
                     keyElement.innerHTML = createIconHTML("backspace");

                     keyElement.addEventListener("click", () =>{
                         this.properties.value = this.properties.value.substring(0, this.properties.value.length -1);
                        this._triggerEvent("noinput");
                     })
                     break;
                 case "caps" :
                     keyElement.classList.add("keyboard_key-wide", "keyboard_key-activatable");
                     keyElement.innerHTML = createIconHTML("keyboard_capslock");

                     keyElement.addEventListener("click", () =>{
                         this._toggleCapsLock();
                         keyElement.classList.toggle("keyboard_key-active", this.properties.capsLock);
                     });
                     break;
             }
         })
     },

     _triggerEvent (hadnlerName){
        console.log("event triggered! event name: " + handlerName)
     },

     _toggleCapsLock (hadnlerName){
         console.log("caps Lock toggled!")
     },

     open(initialValue, oninput, onclose){

     },
     close(){

     }

 };

window.addEventListener("DOMContentLoader", function () {
    Keyboard.init();
})
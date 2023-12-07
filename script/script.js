// Changing pages
var menu_items = Array.from(document.getElementsByClassName('menu-item'));

// Adding an event listener to each element
menu_items.forEach(function(item, item_index) {
    item.addEventListener('click', function() {
        console.log(item_index)
        // Showing the page and hiding the others
        var pages = Array.from(document.getElementsByClassName('page'));
        for (var i = 0; i < menu_items.length; i++) {
            if (i == item_index) {
                pages[i].style.display = "block";
            } else {
                pages[i].style.display = "none";
            }
        }
        
        // Changing the menu buttons style
        var menu_buttons = Array.from(document.getElementsByClassName('menu-item'));
        menu_buttons.forEach(function(button) {
            button.setAttribute("class", "menu-item-off menu-item");
        });
        this.setAttribute("class", "menu-item-on menu-item");
    });
});

// Changing fonts
var listOfFonts = ["'Playfair Display', sans-serif", "'Nova Square', sans-serif", "'Open Sans', sans-serif"];
var next_font = 0;

document.getElementById("font-changer").addEventListener('click', function() {
    next_font = (next_font + 1) % listOfFonts.length;
    document.getElementsByTagName('body')[0].style.fontFamily = listOfFonts[next_font];
})
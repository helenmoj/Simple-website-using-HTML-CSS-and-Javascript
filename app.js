// The JS file is for behaviours and interactivity. 
// A CSS file for presentation and styling. 
//HTML file for content and page structure. 
// used extension open in browser 
//<!DOCTYPE html> indicates this is HTML5 code.
//it's a best practice to separate HTML structure and CSS styling. Having a separate CSS page is called external CSS. Code tends to be easier to read when it's concise and compartmentalized. 
//Cascading Style Sheets (CSS) let you specify how your page should look. The basic idea is to target HTML code, and then define what the style should be. For example, you can select a box, and apply rounded corners or give the box a gradient background. CSS is responsible for determining how hyperlinks look and respond when you interact with them, although you define the destination address in HTML. In CSS3, you can also do sophisticated animation effects.

//In this unit, you apply CSS styles to page elements, add CSS code to support light and dark themes, and check the results in developer tools.
//You can use CSS rules to style HTML. The unordered list element ul {} is a selector, which selects the <ul> HTML element to apply styles. The declaration is font-family: helvetica and determines what the style should be. The property name is font-family, and the value is helvetica. The property and value together make a key-value pair.
/*jshint -W097 */
//'use strict';

let MyLibrary;

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

});

//js var that brings panels from html into js file
// querySelectorAll is used to get grab all panel class divs and puts them in NodeList like an array
const panels = document.querySelectorAll('.panel');
console.log(panels);
/* prints to console:
    NodeList(5) [div.panel.active, div.panel, div.panel, div.panel, div.panel]
    0: div.panel.active
    1: div.panel
    2: div.panel
    3: div.panel
    4: div.panel
    length: 5
    [[Prototype]]: NodeList 
*/
console.log(panels[0]); 
/* prints the first element of the NodeList
    div.panel.active
*/

// loop through node list
panels.forEach((panel) => {
    console.log(panel);
});
/* return each div:
    div.panel.active
    div.panel
    div.panel
    div.panel
    div.panel
*/
# Existing Site Modification Lab

## Introduction

For today's class, we will use an existing site's source code to _mock_ -- in this case, the source code for the American Institute of Graphic Arts, aiga.org.

The HTML has been prepped for you and comes with an external stylesheet and an external .js file already hooked up for you (my-styles.css & my-scripts.js, respectively).

To successfully complete this lab assignment, you will need to bring together all of your knowledge thus far - and you will likely need to do some research to either find solutions to so-far-unencountered-problems or answers to to so-far-unencountered-questions.

Below you will find a series of prompts. They are open-ended and can be achieved in a multitude of ways. However, there is some direction in each prompt to help guide you along the way.

To get started, use your Code Editor VSCode's Live Server plugin to open the `index.html` file and you're ready to jump in.

---

## A

When hovering over menu items in the top navigation menu, an overlay is revealed that has a black linear-gradient and sub-menu items are revealed.

Your first task will be to add EventListener's to these individual menu items listening for both `mouseenter` and `mouseleave` events.

On `mouseenter`, the color of the linear gradient should change to a color that is associated with that specific menu-item.

On `mouseleave`, the color of the overlay should change back to it's original color.

There are five(5) menu items, so you should pick five(5) distinct colors for each item.

You'll need to think about CSS selector specificity to grab references to each element individually. You can use CSS psuedo classes OR feel free to create new class names and modifiy the HTML directly in order to aid your traversal of the DOM (Document Object Model).

---

## B

The second prompt involves the card / widget-container componenets on the homepage.

For this prompt, I want you to use the following:

- .querySelectorAll to grab references to all the widget-containers
- Convert that NodeList of HTML elements to an actual Array using the native Array.from() method
- Use the .forEach method to iterate over that Array
- During each iteration, you'll have access to the Node
- use the .classList attribute to add a class name `raise-on-hover`
- Add CSS for both `.raise-on-hover` and `.raise-on-hover:hover` to do the following:
  - add a transition to the widget containers
  - add a box-shadow when hovered over
  - transform the scale of the widget-container when hovered over (e.g. transform: scale(1.1))

---

## C

This prompt involves modifying the page for mobile. Use the devtools to ensure you are seeing the page in a mobile device size.

Locate the `MENU` button in the top navigation that is revealed in mobile. Add an event listener to that element such that:

- on mouseover, the mobile menu is toggled open and closed

Keep in mind, JavaScript that already powers the AIGA site directly manipulates the CSS via JS (e.g. display: none vs display: block in an inline-style tag). We'll need to directly change the style of the menu (`.menu-main`) to ensure it toggles appropriately.

---

## D

The last prompt involves the resolution of a layout related bug!

You might have already noticed, but the footer / grid-column-layout explodes out from the footer container creating extra space along the right edge of the site. This creates a horizontal scroll-bar to appear.

To complete this challenge, you'll need to dig into the source code using your editor as well as the Developer Tools and you'll need to troubleshoot / modify the layout such that the:

- columns no longer explode out of the footer container.

This is open to interpretation, so be creative!

---

Good Luck, and happy coding!

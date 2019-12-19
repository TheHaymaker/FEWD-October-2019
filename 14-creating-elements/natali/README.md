# Planet Listener Lab

## 1

Your primary objective in this lab is to:
- generate a list of options in your selectbox based on an array of planet names
- When the user makes a selection, change the background image of the body to that planet
- if what the user doesn't match a planet name -- or that planet name is 'earth' -- change the background photo to the 404.jpg image


## Bonus

- Add a placeholder option to your planet name array such that:
  - the first option will be generic placeholder: 'Select a planet...'
- Upon the user making a selection _the first time_, remove the option from the list

## Bonus 2

- Create your own array of names describing different icons
  - to source icons, please refer to http://iconsvg.xyz
  - I reccommend setting the size of your icons to 40px x 40px - atleast initially
  - Use at least 5 different icons
  - save the SVG code in a file in your project, e.g. 'add.svg'
  - SVG's can be referenced as the `src` attribute of an `img` tag (this will be easier to replace icons by swapping out the source code)
- This time, instead of just creating the `option` elements, I want you to:
  - create the `label`, `select` and `option` elements purely programmatically (via JS) to create the selectbox

- When a user makes a selection, add/change an icon.
  - that icon should be absolutely positioned in the top right corner of the page
  - it should change only when the user selects a new option from your new options list

## Bonus 3
-  The section on the page that houses the icon element is created and added to the page via JavaScript

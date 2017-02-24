# stackedColumnWidthFix
Fix the column width over a series of stacked tables, within a parent element. Good for a series of tables that contain data that can't wrap, like dollar amounts, etc. No more ugly staggered columns!

Available in jQuery and vanilla js versions.

There is no requred CSS, although table cells must not have a `white-space: nowrap` declaration, as that would force the content to stretch cells out wider.

## To Use
Scripts to call:
`<script src="js/tables_jquery.js"></script>`
or
`<script src="js/tables_vanilla.js"></script>`

And reference either of these functions, depending on which script is imported.
`<script>
    document.addEventListener("DOMContentLoaded", function(event) { 
      setWidestCelljquery('thisIsTheParent');
      setWidestCelljs('thisIsTheParent2');
    });
</script>`

The parameter must be an id of the direct parent of the array of tables. The hashtag is optional, i.e.: `'thisIsTheParent'` or `'#thisIsTheParent'`

[Check it out here.](https://jdinitto.github.io/stackedColumnWidthFix)


//must pass in the id of direct parent element of table array
//must also have <th> cells in first row
//like any good table has

//ex: setWidestCell('thisIsTheParent')
//or: setWidestCell('#thisIsTheParent');


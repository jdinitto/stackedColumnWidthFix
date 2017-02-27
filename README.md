# stackedColumnWidthFix
Fix the column width over a series of stacked tables, within a parent element. Good for a series of tables that contain data of uncertain length that can't wrap, like dollar amounts, etc. No more ugly staggered columns!

Available in jQuery and vanilla js versions. There is no requred CSS, although table cells must not have a `white-space: nowrap` declaration, as that would force the content to stretch cells out wider.

Works in Chromes, Firefoxes, and IE9 and up.

## To Use
Scripts to call:
`<script src="js/tables_jquery.js"></script>`
or
`<script src="js/tables_vanilla.js"></script>`

Reference either of these functions, depending on which script is imported. If you use the jquery version, be sure jquery is actually imported beforehand.
```
<script>
   document.addEventListener("DOMContentLoaded", function(event) { 
      setWidestCelljquery('thisIsTheParent');
      setWidestCelljs('thisIsTheParent2');
   });
</script>
```

he parameter passed in must be an id of the direct parent of the array of tables. For the jquery version, the hashtag is optional, i.e.: `'thisIsTheParent'` or `'#thisIsTheParent'`

[Check it out here.](https://jdinitto.github.io/stackedColumnWidthFix) - Notice the red right border color for comparison purposes.

### NOTE NOTE NOTE NOTE NOTE
Depending on the data being populated, it doesn't match widths *exactly*. You can use your favorite DOM inspector to see that cell widths that should match, don't match in reality; there can be a pixelish of difference, though it sometimes it's hard to pick up on it, visually. I think this has something to do with the padding and wrapping of text and white-space native to browsers that force a little width here and there. I can't be sure.

## To Do
I probably won't get to these, but these are good enhancements for the enterprising upstart coder.
- [ ] Accept other DOM types, like tables of a certain class, or all tables, or all tables that are stacked (that one is crazy)
- [ ] Force cells with a `white-space: nowrap` declaration to wrap
- [ ] ECMA6-ify it?

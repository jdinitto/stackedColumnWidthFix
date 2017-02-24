// Code goes here
//find the widest cell in each column in a series of 2 tables or more
//for perfectly aligned/non-jaggy cells
//good for tables that may have different lengths of data

//must pass in the id of direct parent element of table array
//must also have <th> cells in first row
//like any good table has

//ex: setWidestCell('thisIsTheParent')
//or: setWidestCell('#thisIsTheParent');

function setWidestCelljquery(el) {

  var addHash = function() {
      if (el.indexOf('#') === -1) { 
        el = '#' + el
      }
      return el;
    },
    
    arrayMax = function(array) {
      return Math.max.apply(Math, array);
    },
    
    parentElId = addHash(),
    tablesToFix = parentElId + ' table',
    allCols = $(tablesToFix + ' thead tr:first').find('th'),

    getWidest = function() {

      for (i = 0; i < allCols.length; i++) {
        var cell = 'thead tr th:eq(' + i + ')',
          widthArr = [];

        $(tablesToFix).each(function() {
          widthArr.push($(this).find(cell).width());
        });
 
        $(tablesToFix).each(function() {
          $(this).find(cell).width(arrayMax(widthArr));
        });

      }
    };

  return getWidest();
}

$(document).ready( function() {
  setWidestCell('thisIsTheParent');
});
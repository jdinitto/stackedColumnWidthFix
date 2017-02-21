//find the widest cell in each column in a series of 2 tables or more
//for perfectly aligned/non-jaggy cells
//good for tables that may have different lengths of data

//must pass in the id of direct parent element of table array
//must also have <th> cells in first row
//like any good table has

//ex: setWidestCell('thisIsTheParent')

//to do: clean up two loops

function setWidestCell(el) {

  var widthArr = [],

    allTables = document.getElementById(el)
    .getElementsByTagName('table'),

    allCols = allTables[0].getElementsByTagName('thead')[0]
    .getElementsByTagName('tr')[0]
    .getElementsByTagName('th'),

    arrayMax = function(array) {
      return Math.max.apply(Math, array);
    },

    getWidest = function() {

      for (i = 0; i < allCols.length; i++) {
        widthArr = [];

        for (x = 0; x < allTables.length; x++) {
          var cell = allTables[x].getElementsByTagName('thead')[0]
            .getElementsByTagName('tr')[0]
            .getElementsByTagName('th')[i];

          widthArr.push(cell.offsetWidth);
        }

        for (x = 0; x < allTables.length; x++) {
          var cell = allTables[x].getElementsByTagName('thead')[0]
            .getElementsByTagName('tr')[0]
            .getElementsByTagName('th')[i];

          cell.style.width = arrayMax(widthArr) + 'px';
        }

      }
    };

  return getWidest();
}

function setWidestCelljs(el) {

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
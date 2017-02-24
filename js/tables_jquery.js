var setWidestCell = (function (el) {
  'use strict'
  
  //add hashtag to id if none is passed
  var addHash = function() {
      if (el.indexOf('#') === -1) {el = '#' + el}
      return el;
    },
    
    //get the widest
    arrayMax = function(array) {
      return Math.max.apply(Math, array);
    },

    //iterate through all the tables
    loopThroughTables = function(getWidest){
      $(tablesToFix).each(function() {
        if (getWidest) {
          return widthArr.push($(this).find(cell).width());
        }
        else {
          return $(this).find(cell).width(arrayMax(widthArr));
        }
      });
    },
    
    parentElId = addHash(),
    tablesToFix = parentElId + ' table',
    allCols = $(tablesToFix + ' thead tr:first').find('th'),
    
    getAndSetWidest = function() {
      for (i = 0; i < allCols.length; i++) {
        var cell = 'thead tr th:eq(' + i + ')',
        widthArr = [];
        loopThroughTables(true); //get widest
        loopThroughTables(false); //set 'em all
      }
    };
    
    return;
});

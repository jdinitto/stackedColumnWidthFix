var setWidestCelljquery = function(el) {
    'use strict';

    //add hashtag to id if none is passed
    var addHash = function() {
            if (el.indexOf('#') === -1) {
                el = '#' + el
            }
            return el;
        },

        //get the widest
        arrayMax = function(array) {
            return Math.max.apply(Math, array);
        },

        //iterate through all the tables
        loopThroughTables = function(getWidest, cell, arr) {
            $(tablesToFix).each(function() {
                //return the widest cell width, or set to that widest cell
                getWidest ? arr.push($(this).find(cell).width()) : $(this).find(cell).width(arrayMax(arr));
            });
        },

        parentElId = addHash(),
        tablesToFix = parentElId + ' table',
        allCols = $(tablesToFix + ' tbody tr:first').find('td'),

        getAndSetWidest = function() {
            $(allCols).each(function(i) {
                var cell = 'tbody tr td:eq(' + i + ')',
                    widthArr = [];
                loopThroughTables(true, cell, widthArr); //get widest
                loopThroughTables(false, cell, widthArr); //set 'em all
            });
        };

    return getAndSetWidest();
};

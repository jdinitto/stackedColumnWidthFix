function setWidestCelljs(el) {

    var allTables = document.getElementById(el).getElementsByTagName('table'),
        allCols = allTables[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td'),

        //get the largest width out of the width array
        arrayMax = function(array) {
            return Math.max.apply(Math, array);
        },

        //iterate through all the tables
        loopThroughTables = function(getWidest, arr, i) {
            for (x = 0; x < allTables.length; x++) {
                var cell = allTables[x].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td')[i];
                //return the widest cell width, or set to that widest cell
                getWidest ? arr.push(cell.offsetWidth) : cell.style.width = arrayMax(arr) + 'px';
            }
        },

        getAndSetWidest = function() {
            for (i = 0; i < allCols.length; i++) {
                var widthArr = [];
                loopThroughTables(true, widthArr, i); //get widest
                loopThroughTables(false, widthArr, i); //set 'em all
            }
        };

    return getAndSetWidest();
}

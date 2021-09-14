module.exports = function(babel) {
    return {
        visitor: {
            ImportDeclaration: function(path){
                var filepath = path.node.source.value;

                if ( !((filepath === "@arcgis/core/WebMap") || (filepath === "@arcgis/core/views/MapView")) ) {
                    return;
                }

                // replace with esri if not using web so compilation works on ios and android

                //path.node.source.value = "@esri/react-arcgis";
            }
        }
    }
}
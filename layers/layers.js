var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var lyr_naklon_buff_200_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "naklon_buff_200",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/naklon_buff_200_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1490081.868336, 5689121.764850, 1840836.953243, 5922506.530521]
                            })
                        });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_naklon_buff_200_1.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_naklon_buff_200_1];

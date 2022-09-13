var wms_layers = [];


        var lyr_VietbandoMaps_0 = new ol.layer.Tile({
            'title': 'Vietbando Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://images.vietbando.com/ImageLoader/GetImage.ashx?Ver=2016&LayerIds=VBD&Y={y}&X={x}&Level={z}'
            })
        });
var format_dulieumoi_1 = new ol.format.GeoJSON();
var features_dulieumoi_1 = format_dulieumoi_1.readFeatures(json_dulieumoi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dulieumoi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dulieumoi_1.addFeatures(features_dulieumoi_1);
var lyr_dulieumoi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dulieumoi_1, 
                style: style_dulieumoi_1,
                interactive: true,
                title: '<img src="styles/legend/dulieumoi_1.png" /> dulieumoi'
            });

lyr_VietbandoMaps_0.setVisible(true);lyr_dulieumoi_1.setVisible(true);
var layersList = [lyr_VietbandoMaps_0,lyr_dulieumoi_1];
lyr_dulieumoi_1.set('fieldAliases', {'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E', 'F': 'F', 'G': 'G', 'H': 'H', 'I': 'I', });
lyr_dulieumoi_1.set('fieldImages', {'A': 'RelationReference', 'B': 'RelationReference', 'C': 'RelationReference', 'D': 'RelationReference', 'E': 'TextEdit', 'F': 'TextEdit', 'G': 'TextEdit', 'H': 'TextEdit', 'I': 'TextEdit', });
lyr_dulieumoi_1.set('fieldLabels', {'A': 'inline label', 'B': 'inline label', 'C': 'inline label', 'D': 'inline label', 'E': 'inline label', 'F': 'inline label', 'G': 'inline label', 'H': 'inline label', 'I': 'inline label', });
lyr_dulieumoi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
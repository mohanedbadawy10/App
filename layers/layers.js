ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32636").setExtent([326217.343145, 3356839.815175, 335942.161688, 3361899.526897]);
var wms_layers = [];


        var lyr_map_0 = new ol.layer.Tile({
            'title': 'map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Agrculture_From_Nov2024_To_Apr2025_1 = new ol.format.GeoJSON();
var features_Agrculture_From_Nov2024_To_Apr2025_1 = format_Agrculture_From_Nov2024_To_Apr2025_1.readFeatures(json_Agrculture_From_Nov2024_To_Apr2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32636'});
var jsonSource_Agrculture_From_Nov2024_To_Apr2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agrculture_From_Nov2024_To_Apr2025_1.addFeatures(features_Agrculture_From_Nov2024_To_Apr2025_1);
var lyr_Agrculture_From_Nov2024_To_Apr2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agrculture_From_Nov2024_To_Apr2025_1, 
                style: style_Agrculture_From_Nov2024_To_Apr2025_1,
                popuplayertitle: 'Agrculture_From_Nov2024_To_Apr2025',
                interactive: true,
                title: '<img src="styles/legend/Agrculture_From_Nov2024_To_Apr2025_1.png" /> Agrculture_From_Nov2024_To_Apr2025'
            });

lyr_map_0.setVisible(true);lyr_Agrculture_From_Nov2024_To_Apr2025_1.setVisible(true);
var layersList = [lyr_map_0,lyr_Agrculture_From_Nov2024_To_Apr2025_1];
lyr_Agrculture_From_Nov2024_To_Apr2025_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'زراعة': 'زراعة', });
lyr_Agrculture_From_Nov2024_To_Apr2025_1.set('fieldImages', {'Id': '', 'gridcode': '', 'زراعة': '', });
lyr_Agrculture_From_Nov2024_To_Apr2025_1.set('fieldLabels', {'Id': 'hidden field', 'gridcode': 'hidden field', 'زراعة': 'inline label - visible with data', });
lyr_Agrculture_From_Nov2024_To_Apr2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
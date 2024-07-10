ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32616").setExtent([566516.011200, 1110452.120884, 806546.011200, 1206548.787551]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_MapaGuanacaste1924_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "MapaGuanacaste1924",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MapaGuanacaste1924_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9573666.801661, 1059267.160537, -9418232.991318, 1271709.535795]
                            })
                        });
var format_Cantones_3 = new ol.format.GeoJSON();
var features_Cantones_3 = format_Cantones_3.readFeatures(json_Cantones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Cantones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantones_3.addFeatures(features_Cantones_3);
var lyr_Cantones_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantones_3, 
                style: style_Cantones_3,
                popuplayertitle: "Cantones",
                interactive: false,
    title: 'Cantones<br />\
    <img src="styles/legend/Cantones_3_0.png" /> Abangares<br />\
    <img src="styles/legend/Cantones_3_1.png" /> Bagaces<br />\
    <img src="styles/legend/Cantones_3_2.png" /> Cañas<br />\
    <img src="styles/legend/Cantones_3_3.png" /> Cqrrillo<br />\
    <img src="styles/legend/Cantones_3_4.png" /> Liberia<br />\
    <img src="styles/legend/Cantones_3_5.png" /> Nicoya<br />\
    <img src="styles/legend/Cantones_3_6.png" /> Santa Cruz<br />\
    <img src="styles/legend/Cantones_3_7.png" /> Tilaran<br />\
    <img src="styles/legend/Cantones_3_8.png" /> <br />'
        });
var format_Islas_4 = new ol.format.GeoJSON();
var features_Islas_4 = format_Islas_4.readFeatures(json_Islas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Islas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Islas_4.addFeatures(features_Islas_4);
var lyr_Islas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Islas_4, 
                style: style_Islas_4,
                popuplayertitle: "Islas",
                interactive: true,
                    title: '<img src="styles/legend/Islas_4.png" /> Islas'
                });
var format_Relieve_5 = new ol.format.GeoJSON();
var features_Relieve_5 = format_Relieve_5.readFeatures(json_Relieve_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Relieve_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Relieve_5.addFeatures(features_Relieve_5);
var lyr_Relieve_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Relieve_5, 
                style: style_Relieve_5,
                popuplayertitle: "Relieve",
                interactive: true,
                    title: '<img src="styles/legend/Relieve_5.png" /> Relieve'
                });
var format_Rios_6 = new ol.format.GeoJSON();
var features_Rios_6 = format_Rios_6.readFeatures(json_Rios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Rios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_6.addFeatures(features_Rios_6);
var lyr_Rios_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_6, 
                style: style_Rios_6,
                popuplayertitle: "Rios",
                interactive: true,
                    title: '<img src="styles/legend/Rios_6.png" /> Rios'
                });
var format_Mar_7 = new ol.format.GeoJSON();
var features_Mar_7 = format_Mar_7.readFeatures(json_Mar_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Mar_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mar_7.addFeatures(features_Mar_7);
var lyr_Mar_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mar_7, 
                style: style_Mar_7,
                popuplayertitle: "Mar",
                interactive: true,
                    title: '<img src="styles/legend/Mar_7.png" /> Mar'
                });
var format_Costa_8 = new ol.format.GeoJSON();
var features_Costa_8 = format_Costa_8.readFeatures(json_Costa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Costa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Costa_8.addFeatures(features_Costa_8);
var lyr_Costa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Costa_8, 
                style: style_Costa_8,
                popuplayertitle: "Costa",
                interactive: true,
                    title: '<img src="styles/legend/Costa_8.png" /> Costa'
                });
var format_Cerros_9 = new ol.format.GeoJSON();
var features_Cerros_9 = format_Cerros_9.readFeatures(json_Cerros_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Cerros_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cerros_9.addFeatures(features_Cerros_9);
var lyr_Cerros_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cerros_9, 
                style: style_Cerros_9,
                popuplayertitle: "Cerros",
                interactive: true,
                    title: '<img src="styles/legend/Cerros_9.png" /> Cerros'
                });
var format_Lagos_10 = new ol.format.GeoJSON();
var features_Lagos_10 = format_Lagos_10.readFeatures(json_Lagos_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Lagos_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagos_10.addFeatures(features_Lagos_10);
var lyr_Lagos_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lagos_10, 
                style: style_Lagos_10,
                popuplayertitle: "Lagos",
                interactive: true,
                    title: '<img src="styles/legend/Lagos_10.png" /> Lagos'
                });
var format_Caminosantiguos_11 = new ol.format.GeoJSON();
var features_Caminosantiguos_11 = format_Caminosantiguos_11.readFeatures(json_Caminosantiguos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Caminosantiguos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caminosantiguos_11.addFeatures(features_Caminosantiguos_11);
var lyr_Caminosantiguos_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caminosantiguos_11, 
                style: style_Caminosantiguos_11,
                popuplayertitle: "Caminos antiguos",
                interactive: true,
    title: 'Caminos antiguos<br />\
    <img src="styles/legend/Caminosantiguos_11_0.png" /> Primaria<br />\
    <img src="styles/legend/Caminosantiguos_11_1.png" /> Secundaria<br />\
    <img src="styles/legend/Caminosantiguos_11_2.png" /> <br />'
        });
var format_Pueblosantiguos_12 = new ol.format.GeoJSON();
var features_Pueblosantiguos_12 = format_Pueblosantiguos_12.readFeatures(json_Pueblosantiguos_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32616'});
var jsonSource_Pueblosantiguos_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pueblosantiguos_12.addFeatures(features_Pueblosantiguos_12);
var lyr_Pueblosantiguos_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pueblosantiguos_12, 
                style: style_Pueblosantiguos_12,
                popuplayertitle: "Pueblos antiguos",
                interactive: true,
                    title: '<img src="styles/legend/Pueblosantiguos_12.png" /> Pueblos antiguos'
                });

lyr_OpenStreetMap_0.setVisible(false);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_MapaGuanacaste1924_2.setVisible(false);lyr_Cantones_3.setVisible(true);lyr_Islas_4.setVisible(true);lyr_Relieve_5.setVisible(true);lyr_Rios_6.setVisible(true);lyr_Mar_7.setVisible(true);lyr_Costa_8.setVisible(true);lyr_Cerros_9.setVisible(true);lyr_Lagos_10.setVisible(true);lyr_Caminosantiguos_11.setVisible(true);lyr_Pueblosantiguos_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelliteHybrid_1,lyr_MapaGuanacaste1924_2,lyr_Cantones_3,lyr_Islas_4,lyr_Relieve_5,lyr_Rios_6,lyr_Mar_7,lyr_Costa_8,lyr_Cerros_9,lyr_Lagos_10,lyr_Caminosantiguos_11,lyr_Pueblosantiguos_12];
lyr_Cantones_3.set('fieldAliases', {'id': 'id', 'Ncanton': 'Ncanton', 'Nisla': 'Nisla', 'NLista': 'NLista', });
lyr_Islas_4.set('fieldAliases', {'id': 'id', 'Ncanton': 'Ncanton', 'Nisla': 'Nisla', 'NLista': 'NLista', });
lyr_Relieve_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Rios_6.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Mar_7.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Mar': 'Mar', });
lyr_Costa_8.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Mar': 'Mar', });
lyr_Cerros_9.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Lagos_10.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Tipo': 'Tipo', });
lyr_Caminosantiguos_11.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', });
lyr_Pueblosantiguos_12.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Cantones_3.set('fieldImages', {'id': 'TextEdit', 'Ncanton': 'TextEdit', 'Nisla': 'TextEdit', 'NLista': 'TextEdit', });
lyr_Islas_4.set('fieldImages', {'id': 'TextEdit', 'Ncanton': 'TextEdit', 'Nisla': 'TextEdit', 'NLista': 'TextEdit', });
lyr_Relieve_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Rios_6.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Mar_7.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Mar': 'TextEdit', });
lyr_Costa_8.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Mar': 'TextEdit', });
lyr_Cerros_9.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Lagos_10.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Tipo': 'Range', });
lyr_Caminosantiguos_11.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Pueblosantiguos_12.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Cantones_3.set('fieldLabels', {'id': 'no label', 'Ncanton': 'no label', 'Nisla': 'no label', 'NLista': 'no label', });
lyr_Islas_4.set('fieldLabels', {'id': 'no label', 'Ncanton': 'no label', 'Nisla': 'no label', 'NLista': 'no label', });
lyr_Relieve_5.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Rios_6.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Mar_7.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Mar': 'no label', });
lyr_Costa_8.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Mar': 'no label', });
lyr_Cerros_9.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Lagos_10.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'no label', 'Tipo': 'no label', });
lyr_Caminosantiguos_11.set('fieldLabels', {'id': 'inline label - visible with data', 'Tipo': 'no label', });
lyr_Pueblosantiguos_12.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Pueblosantiguos_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
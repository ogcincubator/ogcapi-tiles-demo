import 'ol/ol.css';
import 'ol-layerswitcher/dist/ol-layerswitcher.css';

import Map from 'ol/Map';
import View from 'ol/View';
import { transform } from 'ol/proj';
import LayerGroup from 'ol/layer/Group';
import LayerImage from 'ol/layer/Image';
import TileLayer from 'ol/layer/Tile';
import SourceOSM from 'ol/source/OSM';
import StadiaMaps from 'ol/source/StadiaMaps.js';

import LayerSwitcher from 'ol-layerswitcher';

var map = new Map({
    target: 'map',
    layers: [
        new LayerGroup({
            'title': 'Base maps',
            layers: [
                
                new LayerGroup({
                    title: 'Water color with labels',
                    type: 'base',
                    combine: true,
                    visible: false,
                     layers: [
                        new TileLayer({
                            source: new StadiaMaps({
                              layer: 'stamen_watercolor',
                              // apiKey: 'OPTIONAL'
                            }),
                          }),
                          new TileLayer({
                            source: new StadiaMaps({
                              layer: 'stamen_terrain_labels',
                              // apiKey: 'OPTIONAL'
                            }),
                          }),
                    ] 
                }),
/*                 new LayerTile({
                    title: 'Water color',
                    type: 'base',
                    visible: false,
                    source: new SourceStamen({
                        layer: 'watercolor'
                    })
                }), */
                new TileLayer({
                    title: 'OSM',
                    type: 'base',
                    visible: true,
                    source: new SourceOSM()
                })
            ]
        }),
/*         new LayerGroup({
            title: 'Overlays',
            layers: [
                new LayerImage({
                    title: 'Countries',
                    source: new SourceImageArcGISRest({
                        ratio: 1,
                        params: {'LAYERS': 'show:0'},
                        url: "https://ons-inspire.esriuk.com/arcgis/rest/services/Administrative_Boundaries/Countries_December_2016_Boundaries/MapServer"
                    })
                })
            ]
        }) */
    ],
    view: new View({
        center: transform([-0.92, 52.96], 'EPSG:4326', 'EPSG:3857'),
        zoom: 6
    })
});

var layerSwitcher = new LayerSwitcher();
map.addControl(layerSwitcher);
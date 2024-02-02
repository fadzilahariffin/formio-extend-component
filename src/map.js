import Component from "formiojs/components/_classes/component/Component";
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

export default class MapComponent extends Component
{
    static schema(...extend) {
        return Component.schema({
            type: 'mapcomponent',
            label: 'Map Component',
            key: 'mapcomponent'
        })
    }

    static get builderInfo() {
        return {
          title: 'Map Component',
          icon: 'map',
          group: 'basic',
          documentation: '/userguide/#textfield',
          weight: 0,
          schema: MapComponent.schema()
        };
    }

    constructor(component, options, data) {
        super(component, options, data);
    }

    init() {
        super.init();
    }

    get inputInfo() {
        const info = super.inputInfo;
        return info;
    }

    render(content) {
        return super.render('<div ref="customRef" id="map" style="width:90%;height:450px;margin-bottom:25px;">This is Map</div>');
    }

    attach(element) {
        this.loadRefs(element, {
          customRef: 'single',
        });

        this.addEventListener(this.refs.customRef, 'click', () => {
            const map = new Map({
                target: 'map',
                layers: [
                  new TileLayer({
                    source: new OSM(),
                  }),
                ],
                view: new View({
                  projection: 'EPSG:4326',
                  center: [101.69767087922679, 3.144333520704438],
                  zoom: 8,
                  maxZoom: 40,
                  zoomFactor: 4
                }),
            });
        });



        return super.attach(element);
    }

    detach() {
        return super.detach();
    }

    destroy() {
        return super.destroy();
    }
}
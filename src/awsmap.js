import Component from "formiojs/components/_classes/component/Component";
import maplibregl from 'maplibregl';
import { elementReady } from './element-ready';

export default class AwsmapComponent extends Component
{
    awskey = "enter_aws_key";
    awsmapname = "enter_aws_map_name";
    awsregion = "ap-southeast-1";

    static schema(...extend) {
        return Component.schema({
            type: 'awsmapcomponent',
            label: 'AWS Map Component',
            key: 'awsmapcomponent'
        })
    }

    static get builderInfo() {
        return {
          title: 'AWS Map Component',
          icon: 'map',
          group: 'basic',
          documentation: '/userguide/#textfield',
          weight: 0,
          schema: AwsmapComponent.schema()
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
        return super.render('<div ref="customRef" id="awsmap" style="width:90%;height:450px;margin-bottom:25px;">This is Map</div>');
    }

    attach(element) {
        this.loadRefs(element, {
          customRef: 'single',
        });

        elementReady("#awsmap").then(() => {
            const map = new maplibregl.Map({
                container: 'awsmap',
                style: `https://maps.geo.${this.awsregion}.amazonaws.com/maps/v0/maps/${this.awsmapname}/style-descriptor?key=${this.awskey}`,
                center: [101.69767087922679, 3.144333520704438],
                zoom: 15
            });

            const marker = new maplibregl.Marker()
                .setLngLat([101.69767087922679, 3.144333520704438])
                .addTo(map);
        })

        return super.attach(element);
    }

    detach() {
        return super.detach();
    }

    destroy() {
        return super.destroy();
    }
}
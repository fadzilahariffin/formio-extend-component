import HTMLComponent from 'formiojs/components/html/HTML';

export default class VideoComponent extends HTMLComponent 
{
    static schema(...extend) {
        return HTMLComponent.schema({
          label: 'Video',
          type: 'videocomponent',
          tag: 'video',
          attrs: [
            { "attr": "width", "value": "50%"},
            { "attr": "disablepictureinpicture", "value": "true" },
            { "attr": "preload", "value": "none" },
            { "attr": "controlslist", "value": "nodownload" },
            { "attr": "controls", "value": true}
          ],
          content: '',
          input: false,
          persistent: false
        }, ...extend);
    }

    static get builderInfo() {
        return {
          title: 'Video Element',
          group: 'basic',
          icon: 'play',
          weight: 0,
          documentation: '/userguide/form-building/layout-components#html-element',
          showPreview: false,
          schema: VideoComponent.schema()
        };
    }
    
    static savedValueTypes() {
        return [];
    }

    get defaultSchema() {
        return VideoComponent.schema();
    }
}


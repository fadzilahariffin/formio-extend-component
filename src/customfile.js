import FileComponent from 'formiojs/components/file/File'

export default class Customfile extends FileComponent {
    static schema(...extend) {
        return Field.schema({
          type: 'file',
          label: 'Upload',
          key: 'customfile',
          image: false,
          privateDownload: false,
          imageSize: '200',
          filePattern: '*',
          fileMinSize: '0KB',
          fileMaxSize: '1GB',
          uploadOnly: false,
        }, ...extend);
    }

    static get builderInfo() {
        return {
          title: 'File Upload',
          group: 'basic',
          icon: 'file',
          documentation: '/userguide/form-building/premium-components#file',
          weight: 100,
          schema: FileComponent.schema(),
        };
    }
}
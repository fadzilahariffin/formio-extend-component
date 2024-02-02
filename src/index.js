import './style.scss';
import Petronasform from "./petronasform";
import VideoComponent from './video';
import MapComponent from './map';
import Customfile from './customfile'
import AwsmapComponent from './awsmap';

Petronasform.use({
    components: {
        videocomponent: VideoComponent,
        mapcomponent: MapComponent,
        customfile: Customfile,
        awsmapcomponent: AwsmapComponent
    }
});
Petronasform.builder(document.getElementById("builder"), {})
    .then((instance) => {
        instance.ready.then(() => {
            instance.on("change", () => {
                window.parent.postMessage({ schema: instance.schema}, '*');
            })
        })
    });
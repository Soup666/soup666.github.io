
import SimpleRaycasterComponent from '../../../components/SimpleRaycaster';

function Raycaster() {
    return (
        <div>

            <div className="nes-container is-dark is-rounded is-centered me-3 with-title">
                <p className="title">Simple Raycaster <span className="text-muted">28/12/22</span></p>
                <SimpleRaycasterComponent showControls={true} />
            </div>
        </div>

    );
}

export default Raycaster;

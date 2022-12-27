
import { NavLink } from 'react-router-dom';
import SimpleRaycasterComponent from '../../components/SimpleRaycaster';

function Raycaster() {
    return (
        <div>
            
            <h1 className="text-danger mt-3">Raycaster</h1>
            <NavLink to="/" className="nes-btn is-primary">Back</NavLink>
            <SimpleRaycasterComponent showControls={true} />
            
        </div>

    );
}

export default Raycaster;

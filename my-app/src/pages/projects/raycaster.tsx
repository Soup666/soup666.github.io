
// import { NavLink } from 'react-router-dom';
import SimpleRaycasterComponent from '../../components/SimpleRaycaster';
import { NavLink, Routes, Route, Router } from 'react-router-dom';

function Raycaster() {
    return (
        <div>
            
            {/* <h1 className="text-danger mt-3">Raycaster</h1>
            <NavLink to="/" className="nes-btn is-primary">Back</NavLink> */}

            <SimpleRaycasterComponent showControls={true} />

            {/* <Routes>
                <Route path="/projects/raycaster/" element={<SimpleRaycasterComponent showControls={true} />}/>
                <Route path="test" element={<div />}/>
            </Routes> */}

            
            
        </div>

    );
}

export default Raycaster;

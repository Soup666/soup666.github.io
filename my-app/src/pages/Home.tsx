
import { NavLink } from 'react-router-dom';

function Home () {
  return (
    <div className="container-fluid">

        <div className="row mt-3">
            <div className="col">
                <h1 className='nes-text is-success'>Soup's Website</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-4 m-auto mt-3">

                <div className="nes-container is-dark with-title is-centered">
                    <p className="title">Raycasters <span className="text-success">50%</span></p>

                    <div className="row">
                        <p>First big Uni project! Raycasters.</p>
                    </div>

                    <div className="row">
                        <progress className="nes-progress is-success" value="50" max="100"></progress>
                    </div>

                    <div className="row">
                        <NavLink to="/projects/raycaster" className="nes-btn is-primary">View</NavLink>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Home
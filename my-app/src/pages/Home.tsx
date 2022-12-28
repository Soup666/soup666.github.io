
import { NavLink } from 'react-router-dom';

function Home () {
  return (
    <div className="container-fluid">

        <div className="row mt-3">
            <div className="col">
                <h1 className='nes-text is-success'>Soup's Website</h1>
            </div>
        </div>


        <NavLink to="/projects" className="nes-btn is-primary">Projects</NavLink>

        
    </div>
  )
}

export default Home
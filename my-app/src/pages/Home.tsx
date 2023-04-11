
import { NavLink } from 'react-router-dom';

function Home () {
  return (
<div className="">
        <div className="row mt-3">
            <div className="col">
                <h1 className='nes-text is-success'>Soup's Website</h1>
            </div>
        </div>

        <ul className="">
          <li><NavLink to="/projects" className="nes-btn is-primary">Projects</NavLink></li>
          <li><NavLink to="/advent-of-code-2023" className="nes-btn is-primary">Advent of Code 2022</NavLink></li>
        </ul>
      </div>
  )
}

export default Home
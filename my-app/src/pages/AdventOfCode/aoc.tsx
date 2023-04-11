
import { NavLink, Routes, Route, useParams, Link } from 'react-router-dom';
import { AOCData } from './AOCData';

function AOC() {

    const {id} = useParams<{ id: string }>();


    if (id != undefined) {
        let project = AOCData[parseInt(id) - 1];
        let name = project["name"];
        let Component = project["component"];
        
        return (
            <div>
                <h1 className="text-success mt-3">{name}</h1>
                <Link to={`/advent-of-code-2023`} className="nes-btn is-primary">Back</Link>
                <hr className="mb-3" />

                {Component}
            </div>
        )
    }
    
    return (
        <div>
            <h1 className="text-success mt-3">Advent of Code</h1>
            <Link to={`/`} className="nes-btn is-primary">Back</Link>
            <hr className="mb-3" />

            <ol>
                {AOCData.map((project) => {
                    return (
                        <div className="row" key={project.id}>
                            <div className="col-md-4 m-auto mt-3">

                                <div className="row">
                                    <Link to={`/advent-of-code-2023/${project.id}`} className="nes-btn is-primary">{project.name}</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </ol>
        </div>
    );
}

export default AOC
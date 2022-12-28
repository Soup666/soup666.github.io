
import { NavLink, Routes, Route, Router, Outlet, Link } from 'react-router-dom';
import {ProjectData} from "../ProjectData";
import ProjectPage from './ProjectPage';

function ProjectsList () { 

    return (
        <div>
            <h1 className="text-success mt-3">Project List</h1>
            <Link to={`/`} className="nes-btn is-primary">Back</Link>
            <hr className="mb-3" />
            {ProjectData.map((project) => {
                return (
                    <div className="row" key={project.id}>
                        <div className="col-4 m-auto mt-3">

                            <div className="nes-container is-dark with-title is-centered">
                                <p className="title">{project.name} <span className="text-success">{project.description}</span></p>

                                <div className="row">
                                    <p>{project.description}</p>
                                </div>

                                <div className="row">
                                    <progress className="nes-progress is-success" value={project.progress} max="100"></progress>
                                </div>

                                <div className="row">
                                    <Link to={`/projects/${project.id}`} className="nes-btn is-primary">View</Link>
                                </div>
                            </div>

                        </div>

                    </div>
        )
    })}
    </div>)
}

export default ProjectsList;

import { Outlet, useParams, Routes, Route, Link } from "react-router-dom";
import {ProjectData} from "../ProjectData";

function ProjectPage() {

    const {id} = useParams<{ id: string }>();

    if (id == undefined) return <div className="text-danger">404</div>;

    let project = ProjectData[parseInt(id) - 1];
    let Component = project["component"];
    let About = project["about"];

  return (
    <div>
        <div className="row mt-3">
            <div className="m-auto">
                <h1 className="text-success">{project.name}</h1>
                <Link to={`/projects/`} className="nes-btn is-primary">Back</Link>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-10">
                <Routes>
                    <Route path="/view" element={Component} />
                    <Route path="/about" element={About}/>
                    <Route path="/" element={Component} />
                </Routes>
                <Outlet/>
            </div>
            <div className="col-md-2">
                <div className="nes-container is-dark with-title is-centered me-3">
                    <p className="title">{project.name} <span className="text-success">{project.description}</span></p>
                    <hr className="mb-3" />
                    <div className="row">
                        <Link to={`/projects/${project.id}/view`} className="nes-btn">View</Link>
                    </div>
                    <div className="row">
                        <Link to={`/projects/${project.id}/about`} className="nes-btn">About</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default ProjectPage;
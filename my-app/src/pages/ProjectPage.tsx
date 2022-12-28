
import { Outlet, useParams, Routes, Route } from "react-router-dom";
import {ProjectData} from "../ProjectData";

function ProjectPage() {

    const {id} = useParams<{ id: string }>();

    if (id == undefined) return <div className="text-danger">404</div>;

    let project = ProjectData[parseInt(id) - 1];
    let Component = project["component"];

  return (
    <div>
        <div className="row mt-3">
            <h1 className="text-success">{project.name}</h1>
        </div>
        <div className="row mt-3">
            <div className="col-10">
                {Component}
            </div>
            <div className="col-2">
                <div className="nes-container is-dark with-title is-centered me-3">
                    <p className="title">{project.name} <span className="text-success">{project.description}</span></p>
                </div>
            </div>
        </div>

    </div>
  );
}

export default ProjectPage;
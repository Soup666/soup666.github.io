
import Raycaster from "./pages/projects/raycaster/raycaster";
import RaycasterAboutPage from "./pages/projects/raycaster/about";
import LeakOfTheYear from "./pages/projects/leakoftheyear/leakoftheyear";
import LeakOfTheYearAbout from "./pages/projects/leakoftheyear/about";

export const ProjectData = [
    {
        "id": 1,
        "name": "Simple Raycaster",
        "description": "First big Uni project! Raycasters.",
        "progress": 50,
        "progressColor": "success",
        "component": <Raycaster />,
        "about": <RaycasterAboutPage />
    },
    {
        "id": 2,
        "name": "Leak Of the Year",
        "description": "A website reviewing the best leaks of the year.",
        "progress": 35,
        "progressColor": "error",
        "component": <LeakOfTheYear />,
        "about": <LeakOfTheYearAbout />
    },

];
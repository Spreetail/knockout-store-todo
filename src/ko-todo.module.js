import { setState } from 'knockout-store';
import projects from './data/projects';
import 'bootstrap/dist/css/bootstrap.css';
import './components/app';

ko.deferUpdates = true;

const state = {
    projects: ko.observableArray([]),
    selectedProject: ko.observable(),
    selectedTasks: ko.observableArray([])
};

state.selectedProject.subscribe((project) => {
    state.selectedTasks(project.tasks());
});

state.selectedTasks.subscribe((tasks) => {
    state.selectedProject().tasks(tasks);
});

setState(state);
//simulated data fetch
setTimeout(() => {
    const observableProjects = projects.map(({ name, tasks }) => {
        return {
            name: ko.observable(name),
            tasks: ko.observableArray(tasks)
        };
    });
    state.projects(observableProjects);
}, 100);

ko.applyBindings();

import { setState } from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './components/app';
import projects from './data/projects';

ko.deferUpdates = true;

const state = {
    projects: ko.observableArray([]),
    selectedProject: ko.observable(),
    selectedTasks: ko.observableArray([])
};

state.selectedProject.subscribe((newValue) => {
    state.selectedTasks(projects[newValue]);
});

state.selectedTasks.subscribe((newValue) => {
    projects[state.selectedProject()] = newValue;
});

setState(state);

ko.applyBindings();

state.projects(Object.keys(projects));

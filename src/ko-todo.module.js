import { setState } from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './components/app';
import projects from './data/projects';

const state = {
    projects: ko.observableArray([Object.keys(projects)]),
    selectedProject: ko.observable(),
    selectedTasks: ko.observableArray([])
};

state.selectedProject.subscribe((newValue) => {
    state.selectedTasks(projects[newValue]);
});

setState(state);

ko.deferUpdates = true;

ko.applyBindings();

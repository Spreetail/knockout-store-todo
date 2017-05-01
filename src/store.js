const state = {
    selectedProject: ko.observable()
};

state.selectedProject.subscribe((value) => console.log(value));

export default state;

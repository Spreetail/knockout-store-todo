import connect from '../../connect';

function taskListViewModel(params) {
    const vm = {};
    vm.title = ko.computed(() => params.selectedProject() + ' Tasks');
    vm.tasks = ko.computed(() => params.selectedTasks().map((text) => {
        return { name: text, id: text };
    }));
    vm.tasksEmpty = ko.computed(() => vm.tasks().length === 0);
    vm.markComplete = ({ name }) => {
        params.selectedTasks(params.selectedTasks().filter((task) => task !== name()));
    };
    return vm;
}

function mapStateToParams({ selectedProject, selectedTasks }) {
    return { selectedProject, selectedTasks };
}

export default connect(mapStateToParams)(taskListViewModel);

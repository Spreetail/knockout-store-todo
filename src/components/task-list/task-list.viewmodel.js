import connect from '../../connect';

function taskListViewModel(params) {
    const vm = {};
    vm.title = ko.computed(() => params.selectedProject() + ' Tasks');
    vm.tasks = params.selectedTasks;
    return vm;
}

function mapStateToParams({ selectedProject, selectedTasks }) {
    return { selectedProject, selectedTasks };
}

export default connect(mapStateToParams)(taskListViewModel);

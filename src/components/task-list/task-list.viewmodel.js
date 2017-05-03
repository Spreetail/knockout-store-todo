import { connect } from 'knockout-store';

function taskListViewModel(params) {
    const vm = {};
    vm.title = ko.computed(() => {
        if (typeof params.selectedProject() !== 'undefined') {
            return params.selectedProject().name() + ' Title';
        }
        return '';
    });
    vm.tasks = params.selectedTasks;
    vm.tasksEmpty = ko.computed(() => vm.tasks().length === 0);
    vm.projectSelected = ko.computed(() => typeof params.selectedProject() !== 'undefined');
    function markTaskComplete(completedTask) {
        params.selectedTasks(params.selectedTasks().filter((task) => task !== completedTask));
    }
    vm.taskClicked = markTaskComplete;
    return vm;
}

function mapStateToParams({ selectedProject, selectedTasks }) {
    return { selectedProject, selectedTasks };
}

export default connect(mapStateToParams)(taskListViewModel);

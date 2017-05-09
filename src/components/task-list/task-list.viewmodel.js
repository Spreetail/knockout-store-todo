import ko from 'knockout';
import { connect } from 'knockout-store';

function taskListViewModel(params) {
    const vm = {};
    vm.projectSelected = ko.computed(() => typeof params.selectedProject() !== 'undefined');
    vm.title = ko.computed(() => {
        if (vm.projectSelected()) {
            return params.selectedProject().name() + ' Title';
        }
        return '';
    });
    vm.tasks = ko.computed(() => {
        if (!vm.projectSelected()) {
            return [];
        }
        return params.selectedProject().tasks();
    });
    vm.tasksEmpty = ko.computed(() => vm.tasks().length === 0);
    vm.taskClicked = (completedTask) => {
        const projectTasks = params.selectedProject().tasks;
        projectTasks(projectTasks().filter((task) => task !== completedTask));
    };
    return vm;
}

function mapStateToParams({ selectedProject }) {
    return { selectedProject };
}

export default connect(mapStateToParams)(taskListViewModel);

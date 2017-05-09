import ko from 'knockout';
import { connect } from 'knockout-store';

function taskInputViewModel(params) {
    const vm = {};
    vm.taskInput = ko.observable();
    function addTask() {
        if (typeof vm.taskInput() !== 'undefined' && vm.taskInput().trim() !== '') {
            params.selectedProject().tasks.push(vm.taskInput());
            vm.taskInput('');
        }
    }
    vm.addTaskClick = addTask;
    return vm;
}

function mapStateToParams({ selectedProject }) {
    return { selectedProject };
}

export default connect(mapStateToParams)(taskInputViewModel);

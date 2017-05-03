import ko from 'knockout';
import { connect } from 'knockout-store';

function taskInputViewModel(params) {
    const vm = {};
    vm.taskInput = ko.observable();
    function addTask() {
        if (typeof vm.taskInput() !== 'undefined' && vm.taskInput().trim() !== '') {
            params.selectedTasks.push(vm.taskInput());
            vm.taskInput('');
        }
    }
    vm.addTaskClick = addTask;
    return vm;
}

function mapStateToParams({ selectedTasks }) {
    return { selectedTasks };
}

export default connect(mapStateToParams)(taskInputViewModel);

import connect from '../../connect.js';

function projectListViewModel(params) {
    const vm = {};
    vm.projectListItems = ko.observableArray(params.projectListItems);
    vm.selectHandler = (selectedProject) => params.selectedProject(selectedProject.name());
    return vm;
}

function mapStateToParams({ selectedProject }) {
    return { selectedProject };
}

export default connect(mapStateToParams)(projectListViewModel);

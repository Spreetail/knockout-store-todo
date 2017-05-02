import { connect } from 'knockout-store';

function projectListViewModel(params) {
    const vm = {};
    vm.projectListItems = ko.computed(() => params.projects().map((name) => {
        return { name, id: name };
    }));
    vm.selectHandler = (selectedProject) => params.selectedProject(selectedProject.name());
    return vm;
}

function mapStateToParams({ selectedProject, projects }) {
    return { selectedProject, projects };
}

export default ko.store.connect(mapStateToParams)(projectListViewModel);

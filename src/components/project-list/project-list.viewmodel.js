import { connect } from 'knockout-store';

function projectListViewModel(params) {
    const vm = {};
    vm.projects = params.projects;
    function selectProject(selectedProject) {
        params.selectedProject(selectedProject);
    }
    vm.projectClicked = selectProject;
    return vm;
}

function mapStateToParams({ selectedProject, projects }) {
    return { selectedProject, projects };
}

export default connect(mapStateToParams)(projectListViewModel);

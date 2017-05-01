import template from './provider.template.html';
import viewModel from './provider.viewmodel.js';
import setState from './store';

function registerStore(appState) {
    setState(appState);
    viewModel.bind(null, { appState });
    ko.components.register('provider', { template, viewModel });
}

export default registerStore;

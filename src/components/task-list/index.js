import '../link-list';
import viewModel from './task-list.viewmodel';
import template from './task-list.template.html';

ko.components.register('task-list', { viewModel, template });

import viewModel from './task-list.viewmodel';
import template from './task-list.template.html';
import '../task-input';
import './task-list.styles.scss';

ko.components.register('task-list', { viewModel, template });

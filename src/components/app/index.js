import ko from 'knockout';
import template from './app.template.html';
import viewModel from './app.viewmodel.js';
import './app.styles.scss';
import '../project-list';
import '../task-list';

ko.components.register('app', { template, viewModel });

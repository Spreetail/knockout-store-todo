import template from './app.template.html';
import viewModel from './app.viewmodel.js';
import './app.styles.scss';
import '../project-list';
import '../provider';

ko.components.register('app', { template, viewModel });

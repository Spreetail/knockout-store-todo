/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var stateObservable = ko.observable({});

function setState(state) {
    stateObservable(state);
}

function getState() {
    return stateObservable;
}

exports.setState = setState;
exports.getState = getState;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _linkListTemplate = __webpack_require__(16);

var _linkListTemplate2 = _interopRequireDefault(_linkListTemplate);

var _linkListViewmodel = __webpack_require__(7);

var _linkListViewmodel2 = _interopRequireDefault(_linkListViewmodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ko.components.register('link-list', { template: _linkListTemplate2.default, viewModel: _linkListViewmodel2.default });

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _store = __webpack_require__(0);

function connect(mapStateToParams, mergeProps) {
    if (typeof mergeProps !== 'function') {
        mergeProps = Object.assign.bind(null, {});
    }
    return function (ViewModel) {
        return function (params) {
            var state = (0, _store.getState)();
            var stateParams = mapStateToParams(state());
            var mergedParams = mergeProps(params, stateParams);
            return new ViewModel(mergedParams);
        };
    };
}

exports.default = connect;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _appTemplate = __webpack_require__(15);

var _appTemplate2 = _interopRequireDefault(_appTemplate);

var _appViewmodel = __webpack_require__(6);

var _appViewmodel2 = _interopRequireDefault(_appViewmodel);

__webpack_require__(14);

__webpack_require__(9);

__webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ko.components.register('app', { template: _appTemplate2.default, viewModel: _appViewmodel2.default });

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var projects = {
    Work: ['Talk to Jeff', 'Fix bug', 'Schedule Meeting'],
    Home: ['Call Mom', 'Make Dinner']
};

exports.default = projects;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function appViewModel() {
    return {};
}

exports.default = appViewModel;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _listItem = __webpack_require__(8);

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linkListViewModel(params) {
    var selectHandler = typeof params.selectHandler === 'function' ? params.selectHandler : function () {};
    var vm = {};
    vm.items = ko.computed(function () {
        return params.items().map(function (_ref) {
            var name = _ref.name,
                id = _ref.id;
            return (0, _listItem2.default)(name, id);
        });
    });
    vm.selectItem = function (selectedItem) {
        vm.items().forEach(function (item) {
            item.isSelected(false);
        });
        selectedItem.isSelected(true);
        selectHandler(selectedItem);
    };
    return vm;
}

exports.default = linkListViewModel;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function listItem(name, id) {
    var vm = {};
    vm.name = ko.observable(name);
    vm.id = ko.observable(id);
    vm.isSelected = ko.observable(false);
    vm.href = ko.computed(function () {
        return '#' + id;
    });
    return vm;
}

exports.default = listItem;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _projectListTemplate = __webpack_require__(17);

var _projectListTemplate2 = _interopRequireDefault(_projectListTemplate);

var _projectListViewmodel = __webpack_require__(10);

var _projectListViewmodel2 = _interopRequireDefault(_projectListViewmodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ko.components.register('project-list', { template: _projectListTemplate2.default, viewModel: _projectListViewmodel2.default });

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _connect = __webpack_require__(2);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function projectListViewModel(params) {
    var vm = {};
    vm.projectListItems = ko.computed(function () {
        return params.projects().map(function (name) {
            return { name: name, id: name };
        });
    });
    vm.selectHandler = function (selectedProject) {
        return params.selectedProject(selectedProject.name());
    };
    return vm;
}

function mapStateToParams(_ref) {
    var selectedProject = _ref.selectedProject,
        projects = _ref.projects;

    return { selectedProject: selectedProject, projects: projects };
}

exports.default = (0, _connect2.default)(mapStateToParams)(projectListViewModel);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _taskList = __webpack_require__(12);

var _taskList2 = _interopRequireDefault(_taskList);

var _taskListTemplate = __webpack_require__(18);

var _taskListTemplate2 = _interopRequireDefault(_taskListTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ko.components.register('task-list', { viewModel: _taskList2.default, template: _taskListTemplate2.default });

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _connect = __webpack_require__(2);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function taskListViewModel(params) {
    var vm = {};
    vm.title = ko.computed(function () {
        return params.selectedProject() + ' Tasks';
    });
    vm.tasks = ko.computed(function () {
        return params.selectedTasks().map(function (text) {
            return { name: text, id: text };
        });
    });
    vm.tasksEmpty = ko.computed(function () {
        return vm.tasks().length === 0;
    });
    vm.markComplete = function (_ref) {
        var name = _ref.name;

        params.selectedTasks(params.selectedTasks().filter(function (task) {
            return task !== name();
        }));
    };
    return vm;
}

function mapStateToParams(_ref2) {
    var selectedProject = _ref2.selectedProject,
        selectedTasks = _ref2.selectedTasks;

    return { selectedProject: selectedProject, selectedTasks: selectedTasks };
}

exports.default = (0, _connect2.default)(mapStateToParams)(taskListViewModel);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(0);

__webpack_require__(5);

__webpack_require__(3);

var _projects = __webpack_require__(4);

var _projects2 = _interopRequireDefault(_projects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ko.deferUpdates = true;

var state = {
    projects: ko.observableArray([]),
    selectedProject: ko.observable(),
    selectedTasks: ko.observableArray([])
};

state.selectedProject.subscribe(function (newValue) {
    state.selectedTasks(_projects2.default[newValue]);
});

state.selectedTasks.subscribe(function (newValue) {
    _projects2.default[state.selectedProject()] = newValue;
});

(0, _store.setState)(state);

ko.applyBindings();

state.projects(Object.keys(_projects2.default));

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <div class=\"col-sm-3\">\r\n        <project-list />\r\n    </div>\r\n    <div class=\"col-sm-9\">\r\n        <task-list />\r\n    </div>\r\n</main>\r\n";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\" data-bind=\"foreach: items\">\r\n    <a class=\"list-group-item\" data-bind=\"attr: { 'href': href },\r\n        text: name,\r\n        css: { 'active': isSelected },\r\n        click: $parent.selectItem\"></a>\r\n</div>\r\n";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<h1>Projects</h1>\r\n<link-list params=\"items: projectListItems, selectHandler: selectHandler\" />\r\n";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<h1 data-bind=\"text: title\"></h1>\r\n<link-list params=\"items: tasks, selectHandler: markComplete\"></link-list>\r\n<div data-bind=\"visible: tasksEmpty\">\r\n    <h3>All done!</h3>\r\n</div>\r\n";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _appTemplate = __webpack_require__(14);

var _appTemplate2 = _interopRequireDefault(_appTemplate);

var _appViewmodel = __webpack_require__(3);

var _appViewmodel2 = _interopRequireDefault(_appViewmodel);

__webpack_require__(13);

__webpack_require__(7);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ko.components.register('app', { template: _appTemplate2.default, viewModel: _appViewmodel2.default });

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(0);

var _provider = __webpack_require__(9);

var _provider2 = _interopRequireDefault(_provider);

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ko.deferUpdates = true;

(0, _provider2.default)(_store2.default);

ko.applyBindings();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function appViewModel() {
    return {
        projectListItems: [{
            name: 'Work',
            id: 'work'
        }, {
            name: 'Home',
            id: 'home'
        }]
    };
}

exports.default = appViewModel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _linkListTemplate = __webpack_require__(15);

var _linkListTemplate2 = _interopRequireDefault(_linkListTemplate);

var _linkListViewmodel = __webpack_require__(5);

var _linkListViewmodel2 = _interopRequireDefault(_linkListViewmodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ko.components.register('link-list', { template: _linkListTemplate2.default, viewModel: _linkListViewmodel2.default });

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _listItem = __webpack_require__(6);

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function linkListViewModel(params) {
    var selectHandler = typeof params.selectHandler === 'function' ? params.selectHandler : function () {};
    var vm = {};
    vm.items = params.items().map(function (_ref) {
        var name = _ref.name,
            id = _ref.id;
        return (0, _listItem2.default)(name, id);
    });
    vm.selectItem = function (selectedItem) {
        vm.items.forEach(function (item) {
            item.isSelected(false);
        });
        selectedItem.isSelected(true);
        selectHandler(selectedItem);
    };
    return vm;
}

exports.default = linkListViewModel;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(11);

var _projectListTemplate = __webpack_require__(16);

var _projectListTemplate2 = _interopRequireDefault(_projectListTemplate);

var _projectListViewmodel = __webpack_require__(8);

var _projectListViewmodel2 = _interopRequireDefault(_projectListViewmodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ko.components.register('project-list', { template: _projectListTemplate2.default, viewModel: _projectListViewmodel2.default });

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _connect = __webpack_require__(10);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function projectListViewModel(params) {
    var vm = {};
    vm.projectListItems = ko.observableArray(params.projectListItems);
    vm.selectHandler = function (selectedProject) {
        return params.selectedProject(selectedProject.name());
    };
    return vm;
}

function mapStateToParams(_ref) {
    var selectedProject = _ref.selectedProject;

    return { selectedProject: selectedProject };
}

exports.default = (0, _connect2.default)(mapStateToParams)(projectListViewModel);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _providerTemplate = __webpack_require__(32);

var _providerTemplate2 = _interopRequireDefault(_providerTemplate);

var _providerViewmodel = __webpack_require__(33);

var _providerViewmodel2 = _interopRequireDefault(_providerViewmodel);

var _store = __webpack_require__(34);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerStore(appState) {
    (0, _store2.default)(appState);
    _providerViewmodel2.default.bind(null, { appState: appState });
    ko.components.register('provider', { template: _providerTemplate2.default, viewModel: _providerViewmodel2.default });
}

exports.default = registerStore;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _store = __webpack_require__(34);

function connect(mapStateToParams, mergeProps) {
    if (typeof mergeProps !== 'function') {
        mergeProps = Object.assign.bind(null, {});
    }
    var stateParams = mapStateToParams(_store.state);
    return function (ViewModel) {
        return function (params) {
            var mergedParams = mergeProps(params, stateParams);
            return new ViewModel(mergedParams);
        };
    };
}

exports.default = connect;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var storeProviderBindingName = 'storeProvider';

ko.bindingHandlers.storeConsumer = {
    init: function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
        var parent = element.parentElement;
        var provider = void 0;
        while (parent !== null && typeof provider === 'undefined') {
            var bindings = void 0;
            try {
                bindings = ko.bindingProvider.instance.getBindings(parent, ko.contextFor(parent));
            } catch (error) {
                if (!(error instanceof TypeError)) {
                    throw error;
                }
            }
            if (bindings !== null && hasOwn.call(bindings, storeProviderBindingName)) {
                provider = bindings;
            }
            parent = parent.parentElement;
        }
        if (typeof provider === 'undefined') {
            console.error('No storeProvider binding found for storeConsumer.');
        } else {
            var store = provider[storeProviderBindingName];
            if (typeof store === 'undefined') {
                console.error('No store found from storeProvider binding.');
            }
            bindingContext.$data.store = store;
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var state = {
    selectedProject: ko.observable()
};

state.selectedProject.subscribe(function (value) {
    return console.log(value);
});

exports.default = state;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<main>\r\n    <project-list params=\"projectListItems: projectListItems\" />\r\n</main>\r\n";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\" data-bind=\"foreach: items\">\r\n    <a class=\"list-group-item\" data-bind=\"attr: { 'href': href },\r\n        text: name,\r\n        css: { 'active': isSelected },\r\n        click: $parent.selectItem\"></a>\r\n</div>\r\n";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\r\n    <h1>Projects</h1>\r\n    <link-list params=\"items: projectListItems, selectHandler: selectHandler\" />\r\n</div>\r\n";

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports) {

module.exports = "<!-- ko storeProvider: store -->\r\n<!-- ko template: { nodes: $componentTemplateNodes } --><!-- /ko -->\r\n<!-- /ko -->\r\n";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function providerViewModel(params) {
    var vm = {};
    vm.store = params.store;
    return vm;
}

exports.default = providerViewModel;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (newState) {
    exports.state = state = newState;
};

var state = exports.state = void 0;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
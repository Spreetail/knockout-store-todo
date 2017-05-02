import listItem from './list-item.js';

function linkListViewModel(params) {
    const selectHandler = typeof params.selectHandler === 'function' ?
        params.selectHandler :
        () => {};
    const vm = {};
    vm.items = ko.computed(() => params.items().map(({ name, id }) => listItem(name, id)));
    vm.selectItem = (selectedItem) => {
        vm.items().forEach((item) => {
            item.isSelected(false);
        });
        selectedItem.isSelected(true);
        selectHandler(selectedItem);
    };
    return vm;
}

export default linkListViewModel;

function listItem(name, id) {
    const vm = {};
    vm.name = ko.observable(name);
    vm.id = ko.observable(id);
    vm.isSelected = ko.observable(false);
    vm.href = ko.computed(() => '#' + id);
    return vm;
}

export default listItem;

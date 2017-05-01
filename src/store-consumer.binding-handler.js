const hasOwn = Object.prototype.hasOwnProperty;
const storeProviderBindingName = 'storeProvider';

ko.bindingHandlers.storeConsumer = {
    init: (element, valueAccessor, allBindings, viewModel, bindingContext) => {
        let parent = element.parentElement;
        let provider;
        while (parent !== null && typeof provider === 'undefined') {
            let bindings;
            try {
                bindings = ko.bindingProvider.instance.getBindings(parent, ko.contextFor(parent));
            } catch (error) {
                if (!(error instanceof TypeError)) {
                    throw error;
                }
            }
            if (bindings !== null && hasOwn.call(bindings, storeProviderBindingName)) {
                provider = bindings
            }
            parent = parent.parentElement;
        }
        if (typeof provider === 'undefined') {
            console.error('No storeProvider binding found for storeConsumer.');
        } else {
            const store = provider[storeProviderBindingName];
            if (typeof store === 'undefined') {
                console.error('No store found from storeProvider binding.')
            }
            bindingContext.$data.store = store;
        }
    }
};

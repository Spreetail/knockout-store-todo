import { getState } from './store';

function connect(mapStateToParams, mergeProps) {
    if (typeof mergeProps !== 'function') {
        mergeProps = Object.assign.bind(null, {});
    }
    return function(ViewModel) {
        return function (params) {
            const state = getState();
            const stateParams = mapStateToParams(state());
            const mergedParams = mergeProps(params, stateParams);
            return new ViewModel(mergedParams);
        };
    };
}

export default connect;

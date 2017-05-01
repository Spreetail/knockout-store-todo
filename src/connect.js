import { state } from './components/provider/store';

function connect(mapStateToParams, mergeProps) {
    if (typeof mergeProps !== 'function') {
        mergeProps = Object.assign.bind(null, {});
    }
    const stateParams = mapStateToParams(state);
    return function(ViewModel) {
        return function (params) {
            const mergedParams = mergeProps(params, stateParams);
            return new ViewModel(mergedParams);
        };
    };
}

export default connect;

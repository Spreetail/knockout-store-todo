import 'bootstrap/dist/css/bootstrap.css';
import './components/app';
import registerStore from './components/provider';
import store from './store';

ko.deferUpdates = true;

registerStore(store);

ko.applyBindings();

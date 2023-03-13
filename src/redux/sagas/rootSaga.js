import {all} from 'redux-saga/effects';

//import and register all sagas
import food from './food';

export default function* root() {
  yield all([food()]);
}

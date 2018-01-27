import merge from 'lodash/merge';
import set from 'lodash/set';
import * as Action from './actions';

export default function reducer(state = {}, { type, payload } = {}) {
  switch (type) {

    case Action.INCREMENT_STEP: {
      const { incrementedStep } = payload;
      return merge({}, state, {
        step: { incrementedStep},
      });
    }
    // Always return some type of state or else you will receive a fatal error.
    default:
      return state;
  }
}
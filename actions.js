/*
 * action types
 */

export const INCREMENT_STEP = 'INCREMENT_STEP';

/*
 * action creators
 */

export function incrementStep(step) {
  console.log('step', step);
  return { type: INCREMENT_STEP, 
          payload:{ incrementStep 
    } 
  }
}

function createExistingContactError(notification) {
  return {
    type: ActionTypes.CREATE_EXISTING_CONTACT_ERROR,
    payload: {
      notification,
    },
  };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
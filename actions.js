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

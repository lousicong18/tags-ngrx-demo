import { Action } from '@ngrx/store';
import { PetTag, initialTag } from './tag.model';
import { SELECT_SHAPE, SELECT_FONT, ADD_TEXT, TOGGLE_CLIP, TOGGLE_GEMS, COMPLETE, RESET } from './tag.actions';

export function petTagReducer(state: PetTag = initialTag, action: Action) {
  switch (action.type) {
    case SELECT_SHAPE:
      return Object.assign({}, state, {
        shape: (action as any).payload
      });
    case SELECT_FONT:
      return Object.assign({}, state, {
        font: (action as any).payload
      });
    case ADD_TEXT:
      return Object.assign({}, state, {
        text: (action as any).payload
      });
    case TOGGLE_CLIP:
      return Object.assign({}, state, {
        clip: !state.clip
      });
    case TOGGLE_GEMS:
      return Object.assign({}, state, {
        gems: !state.gems
      });
    case COMPLETE:
      return Object.assign({}, state, {
        complete: (action as any).payload
      });
    case RESET:
      return Object.assign({}, state, initialTag);
    default:
      return state;
  }
}

import { ActionsType } from "../constants/actionsType";

const initialState = {
  capsules: [],
};

export const capsuleReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsType.SET_CAPSULES:
      return { ...state, capsules: payload };
    default:
      return state;
  }
};

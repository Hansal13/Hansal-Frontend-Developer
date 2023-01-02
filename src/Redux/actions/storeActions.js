import { ActionsType } from "../constants/actionsType";

export const setCapsules = (capsules) => {
  return {
    type: ActionsType.SET_CAPSULES,
    payload: capsules,
  };
};

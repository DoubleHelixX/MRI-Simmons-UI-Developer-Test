import { showLoading, hideLoading } from "react-redux-loading";

export const RECIEVE_ADDITIONAL_VIEWS = "RECIEVE_ADDITIONAL_VIEWS";
export const RESET_ADDITIONAL_VIEWS = "RESET_ADDITIONAL_VIEWS";
export const INCREMENT_ADDITIONAL_VIEWS = "INCREMENT_ADDITIONAL_VIEWS";

export function receiveAdditionalViews(additionalViews = 0) {
  return {
    type: RECIEVE_ADDITIONAL_VIEWS,
    payload: additionalViews,
  };
}

export function resetAdditionalViews(additionalViews) {
  return {
    type: RESET_ADDITIONAL_VIEWS,
    payload: additionalViews,
  };
}

export function incrementAdditionalViews(additionalViews) {
  return {
    type: INCREMENT_ADDITIONAL_VIEWS,
    payload: additionalViews,
  };
}

import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from './actionTypes';

export const alertSuccess = (message) => {
	// actionTypes of alerts when dispatch messages of success or error (login or register)
	return { type: ALERT_SUCCESS, message };
};

export const alertError = (message) => {
	return { type: ALERT_ERROR, message };
};

export const alertClear = () => {
	return { type: ALERT_CLEAR };
};

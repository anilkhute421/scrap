import { combineReducers } from 'redux';
import userReducer from '../features/user/userSlice'
import verticalFormReducer from '../features/user/verticalFormSlice';
import campaignReducer from '../features/campaign/campaignSlice';

export const rootReducer = combineReducers({
    user: userReducer,
    verticalForm: verticalFormReducer,
    campaign: campaignReducer
  });
  
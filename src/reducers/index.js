import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import LoginFormReducer from './LoginFormReducer';
import HomeListPostReducer from './HomeListPostReducer';
import editProfileReducer from './EditProfileReducer.js'

export default combineReducers({
    user: UserReducer,
    loginForm : LoginFormReducer,
    homeListPost : HomeListPostReducer,
    editProfile: editProfileReducer
})
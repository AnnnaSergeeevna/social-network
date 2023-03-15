import  {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import profileReduser from './profileReduser'
import dialogsReduser from './dialogsReduser'
import usersReduser from './usersReduser'
import authReduser from './AuthReduser'
import thunkMiddleware from 'redux-thunk'
import {Field as formReduser} from 'redux-form'

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReduser
})
let store = createStore(redusers, applyMiddleware(thunkMiddleware))
// window.store = store
export default store
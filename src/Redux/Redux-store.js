import  {combineReducers, legacy_createStore as createStore} from 'redux'
import profileReduser from './profileReduser'
import dialogsReduser from './dialogsReduser'

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser
})
let store = createStore(redusers)

export default store
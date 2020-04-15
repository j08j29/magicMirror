const HOME = "/";
const LOGIN = "/login"
const JOIN = "/join"
const LOGOUT = "/logout"


const USERS = "/users"
const USER_DETAIL = "/users/:id"
const EDIT_PROFILE = "/users/edit-profile"
const CHANGE_PASSWORD = "/users/change-password"

const routes = {
    home : HOME,
    join : JOIN,
    login: LOGIN,
    logout : LOGOUT,
    users:USERS,
    user_detail : id=>{
        if(id){
            return `/users/${id}`

        }else{
            return USER_DETAIL
        }
    },
    edit_profile:EDIT_PROFILE,
    change_password:CHANGE_PASSWORD
}
export default routes;



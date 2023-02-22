import { testData } from "../../assets/testData"
import { UsersListItem } from "./usersListItem/usersListItem"
import "./usersListStyles.scss"


export const UsersList =()=>{
    return(
        <ul className="usersList">
            {testData.map(user=><UsersListItem user={user}  /> )}
        </ul>
       
    )
}
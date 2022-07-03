import {useContext} from "react";
import {UserContext} from "../../UserContext";
import "../Layouts/Styles/UserProfile.css";

const UserProfile = () => {
    const addedMsg = "Hi ";
    const User = useContext(UserContext);
    const username = User[0].name;
    const initial = User[0].initial;
    return (
        <div>
            <div className="profile">
                <span className="profile-username">
                    {
                    addedMsg + username + "!"
                } </span>
                <span className="profile-initial">
                    {initial}</span>
            </div>
        </div>
    )
}

export default UserProfile;

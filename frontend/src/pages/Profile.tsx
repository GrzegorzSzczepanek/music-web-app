import React from "react";
import { fetchUserData } from "../services/api";

const Profile = () => {
  const [userData, setUserData] = React.useState<any>();
  React.useEffect(() => {
    const getUserData = async () => {
      const data = await fetchUserData();
      setUserData(data);
      console.log(data);
    };
    getUserData();
    }, []);
  

  return (
    <div className="container w-full flex flex-col">
      <h1>User Profile</h1>
      {userData && (
        <div className="">
          <p>Name: {userData.username}</p>
          <p>Email: {userData.email}</p>
        </div>
        )}
        <div>
              
        </div>
    </div>
    );
}


export default Profile;
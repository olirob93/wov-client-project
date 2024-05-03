import Button from "../../components/Button/Button";
import { useAuth } from "../../hooks/useAuth";
import "./AdminProfile.scss"

const AdminProfile = () => {
  const { logoutUser } = useAuth();
  // const { getActiveTasks, completeActiveTask } = useFirestore();

  return (
    <div>
      <h1>Profile</h1>
      <p>This is the admin profile</p>
      <div>
        <Button label={"SIGN OUT"} variant={"secondary"} onClick={logoutUser} />
      </div>
    </div>
  );


};

export default AdminProfile;
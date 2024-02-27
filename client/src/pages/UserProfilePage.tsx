import { useGetUser, useUpdateUser } from "@/api/UserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";


const UserProfilePage = () => {
    const { currentUser, isLoading: isGetLoading} = useGetUser();
    const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();

    if (isGetLoading) return <span>Loading....</span>

 return <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />
}

export default UserProfilePage;
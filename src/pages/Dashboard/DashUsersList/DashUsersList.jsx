import toast from "react-hot-toast";
import PageTitle from "../../../components/PageTitle/PageTitle";
import UsersTable from "../../../components/UsersTable/UsersTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUsersData from "../../../hooks/useUsersData";

const DashUsersList = () => {
  const [usersData, usersRefetch] = useUsersData();

  const axiosSecure = useAxiosSecure()

  const handleUserRole = (e, id) => {
    e.preventDefault();

    const userRole = e.target.user_role.value;
    const postData = { role: userRole };
    axiosSecure.put(`/user-role/${id}`, postData).then(() => {
      const dataRefetch = usersRefetch();
      toast.promise(dataRefetch, {
        loading: "Role updating...",
        success: <b>Role updated!</b>,
        error: <b>Could not updated.</b>,
      });
    });
  };

  return (
    <>
      <PageTitle title="Users list" />
      <div className="title py-8">
        <h2 className="text-3xl text-center">Users List</h2>
        <div className="text-center">
          <span className="inline-block w-40 h-1 bg-orange-color rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>
      </div>
      <section>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
                <th>Last Login IP</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, index) => (
                <UsersTable
                  key={user._id}
                  index={index}
                  user={user}
                  handleUserRole={handleUserRole}
                />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
                <th>Last Login IP</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default DashUsersList;

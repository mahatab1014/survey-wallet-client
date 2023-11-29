import toast from "react-hot-toast";
import PageTitle from "../../../components/PageTitle/PageTitle";
import UsersTable from "../../../components/UsersTable/UsersTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUsersData from "../../../hooks/useUsersData";
import { FaFilter } from "react-icons/fa6";
import { useState } from "react";

const DashUsersList = () => {
  const [role, setRole]=useState("")
  const [usersData, usersRefetch] = useUsersData(role);

  const axiosSecure = useAxiosSecure();

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
  const role_data = [
    { id: 1, name: "user", unavailable: false },
    { id: 2, name: "admin", unavailable: false },
    { id: 3, name: "pro_user", unavailable: false },
    { id: 4, name: "surveyor", unavailable: false },
  ];

  const handleFilterByRole = async (e) => {
    e.preventDefault();
    const role = e.target.user_role.value;
    setRole(role)
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
          <div className="max-w-sm mx-auto">
            <form className="text-center" onSubmit={handleFilterByRole}>
              <p className="mb-2">Filter By User Role</p>
              <select name="user_role" className="search-form-field w-full">
                <option value="" selected>
                  all user
                </option>
                {role_data.map((role) => (
                  <option
                    key={role?.id}
                    value={role?.name}
                    disabled={role?.unavailable}
                  >
                    {role?.name}
                  </option>
                ))}
              </select>
              <div className="text-center">
                <button
                  type="submit"
                  className="primary-button !btn-sm mt-1 !rounded"
                >
                  <FaFilter />
                  Filter
                </button>
              </div>
            </form>
          </div>
          <table className="table table-xs table-zebra">
            <thead className="bg-slate-500 text-white">
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
              {/* <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Change Role</th>
                <th>Last Login IP</th>
              </tr> */}
            </tfoot>
          </table>
        </div>
      </section>
    </>
  );
};

export default DashUsersList;

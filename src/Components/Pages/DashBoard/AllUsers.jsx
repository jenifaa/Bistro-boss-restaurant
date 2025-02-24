import React from "react";
import useAxios from "../../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleUserDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user?._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user?._id}`).then((res) => {
    
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Updated!",
          text: "User has been Updated to Admin.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly items-centers my-5">
        {" "}
        <h2 className="text-3xl font-bolds">All user</h2>
        <h2 className="text-3xl font-bolds">Total Users({users.length})</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="p-2 bg-[#D1A054]"
                    >
                      <FaUsers className="text-xl"></FaUsers>
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleUserDelete(user)}>
                    <FaTrashAlt className="text-xl text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

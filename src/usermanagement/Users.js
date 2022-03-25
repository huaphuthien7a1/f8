import React from "react";
import UserItem from "./UserItem";

const Users = ({ data }) => {
  const renderUsers = () => {
    return data.map((item) => <UserItem key={item.id} user={item} />);
  };
  return (
    <div className="flex flex-col justify-center w-screen">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              UserName
            </th>
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              Email
            </th>
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              PhoneNumber
            </th>
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              Type
            </th>
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">{renderUsers()}</tbody>
      </table>
    </div>
  );
};

export default Users;

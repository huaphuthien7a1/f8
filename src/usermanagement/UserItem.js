import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const UserItem = ({ user }) => {
  return (
    <tr className="bg-white">
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {user.name}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {user.userName}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {user.email}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {user.phoneNumber}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        {user.type}
      </td>
      <td className="flex justify-center p-3 text-sm text-gray-700 whitespace-nowrap">
        <Stack spacing={1} direction="row">
          <Button variant="contained">Edit</Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </Stack>
      </td>
    </tr>
  );
};

export default UserItem;

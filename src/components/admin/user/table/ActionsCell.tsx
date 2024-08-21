import React from "react";
import useDeleteUser from "@/hooks/user/useDeleteUser";
import DropdownTable from "../../core/DropdownTable";

type ActionCellProps = {
  userId: string;
};

const ActionCell: React.FC<ActionCellProps> = ({ userId }) => {
  const { handleDelete } = useDeleteUser();

  return <DropdownTable path={userId} onDelete={() => handleDelete(userId)} />;
};

export default ActionCell;

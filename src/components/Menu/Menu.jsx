import { MenuItem } from "ui";

const Menu = ({ list }) => {
  return (
    <>
      {list.map(({ labelId }) => (
        <MenuItem key={labelId} label={labelId} />
      ))}
    </>
  );
};

export default Menu;

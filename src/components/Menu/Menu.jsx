import { useIntl } from "react-intl";
import { LanguageSwitcher, MenuItem } from "ui";

const Menu = ({ list }) => {
  const { formatMessage } = useIntl();
  return (
    <>
      {list.map(({ labelId }) => (
        <MenuItem key={labelId} label={formatMessage({ id: labelId })} />
      ))}
      <LanguageSwitcher />
    </>
  );
};

export default Menu;

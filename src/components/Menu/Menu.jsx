import { useAppContext } from "contexts";
import { useIntl } from "react-intl";
import { LanguageSwitcher, MenuItem } from "ui";

const Menu = ({ list }) => {
 const { formatMessage } = useIntl();
 const { showModal } = useAppContext();

 return (
  <>
   {list.map(({ labelId, value }) => (
    <MenuItem
     key={labelId}
     label={formatMessage({ id: labelId })}
     onClick={() => showModal(value)}
    />
   ))}
   <LanguageSwitcher />
  </>
 );
};

export default Menu;

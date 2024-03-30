import styles from "./IsRegisteredModal.module.css";
import { FormattedMessage } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import { Button, Heading, Wrapper } from "ui";

const IsRegisteredModal = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className={styles.firstStepWrapper}>
        <Heading>
          <FormattedMessage id="startpage.isRegisteredCompany" />
        </Heading>
        <div className={styles.firsStepButtons}>
          <Link tabIndex={-1} to="/create-company">
            <Button variant="secondary" onClick={() => navigate('/create-company')}>
              <FormattedMessage id="startpage.isRegisteredCompany.button.no" />
            </Button>
          </Link>
          <Link tabIndex={-1} to="/company-login">
          <Button>
            <FormattedMessage id="startpage.isRegisteredCompany.button.yes" />
          </Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default IsRegisteredModal;

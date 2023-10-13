import styles from "./BeginPage.module.css";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Button, Heading, Wrapper } from "ui";

const IsRegisteredModal = () => {
  return (
    <Wrapper>
      <div className={styles.firstStepWrapper}>
        <Heading>
          <FormattedMessage id="startpage.isRegisteredCompany" />
        </Heading>
        <div className={styles.firsStepButtons}>
          <Link to="/create-company">
            <Button variant="secondary">
              <FormattedMessage id="startpage.isRegisteredCompany.button.no" />
            </Button>
          </Link>
          <Button>
            <FormattedMessage id="startpage.isRegisteredCompany.button.yes" />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default IsRegisteredModal;

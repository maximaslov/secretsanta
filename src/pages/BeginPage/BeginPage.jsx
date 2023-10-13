import styles from "./BeginPage.module.css";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import { Button, Heading, Wrapper } from "ui";

const BeginPage = () => {
  const [firstStep, setFirstStep] = useState(false);

  const isBegining = !firstStep;

  if (isBegining) {
    return (
      <div className={styles.startButton}>
        <Button onClick={() => setFirstStep(true)}>
          <FormattedMessage id="startpage.startButton" />
        </Button>
      </div>
    );
  }

  if (firstStep) {
    return (
      <Wrapper>
        <div className={styles.firstStepWrapper}>
          <Heading>
            <FormattedMessage id="startpage.isRegisteredCompany" />
          </Heading>
          <div className={styles.firsStepButtons}>
            <NavLink to="/create-company">
              <Button variant="secondary">
                <FormattedMessage id="startpage.isRegisteredCompany.button.no" />
              </Button>
            </NavLink>
            <Button>
              <FormattedMessage id="startpage.isRegisteredCompany.button.yes" />
            </Button>
          </div>
        </div>
      </Wrapper>
    );
  }

  return <>Hello</>;
};

export default BeginPage;

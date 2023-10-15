import styles from "./BeginPage.module.css";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useLocation } from "react-router-dom";
import { Button } from "ui";
import IsRegisteredModal from "./IsRegisteredModal";

const BeginPage = () => {
  const { state } = useLocation();
  const { isReturned } = state || {};
  const [firstStep, setFirstStep] = useState(isReturned);

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
    return <IsRegisteredModal />;
  }
};

export default BeginPage;

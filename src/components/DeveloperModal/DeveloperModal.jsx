import { Heading, Modal, Text } from "ui";
import styles from "./DevelopmentModal.module.css";
import { FormattedMessage } from "react-intl";
import { textItems } from "./developerModalDefinitions";
import DeveloperImage from "./DeveloperImage";
import DeveloperLinks from "./DeveloperLinks";

const DeveloperModal = ({ onClose }) => {
 return (
  <Modal onClose={onClose}>
   <div className={styles.container}>
    <DeveloperImage />
    <div>
     <div className={styles.developerText}>
      <Heading left>
       <FormattedMessage id="developer.name" />
      </Heading>
      <Text variant="md" bold>
       Frontend Developer
      </Text>
     </div>
     <br />
     <div>
      {textItems.map(({ variant, textId, withSpace, attrs }, index) => (
       <div key={index}>
        <Text variant={variant} {...attrs}>
         <FormattedMessage id={textId} />
        </Text>
        {withSpace && <br />}
       </div>
      ))}
      <DeveloperLinks />
     </div>
    </div>
   </div>
  </Modal>
 );
};

export default DeveloperModal;

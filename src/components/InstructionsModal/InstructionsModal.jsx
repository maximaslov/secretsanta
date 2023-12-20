import { Heading, Logo, Modal, Text } from "ui";
import { textItems } from "./instructionsDefinitions";
import { FormattedMessage } from "react-intl";

const InstructionsModal = ({ onClose }) => {
 return (
  <Modal onClose={onClose}>
   {textItems.map(({ isHeading, textId, withSpace, attrs }) => (
    <div key={textId}>
     {isHeading ? (
      <Heading>
       <FormattedMessage id={textId} />
      </Heading>
     ) : (
      <Text {...attrs}>
       <FormattedMessage id={textId} />
      </Text>
     )}
     {withSpace && <br />}
    </div>
   ))}
   <Heading>
    <FormattedMessage id="instructions.happyNewYear" />
   </Heading>
   <br />
   <div style={{ display: "flex", justifyContent: "center" }}>
    <Logo size="sm" />
   </div>
  </Modal>
 );
};

export default InstructionsModal;

import { FormattedMessage } from "react-intl";
import { Button, Heading, Input, Wrapper } from "ui";

const ResultInput = ({ placeholder, value, onChange, next, back }) => {
 const handleNextStepClick = () => {
  next?.();
 };

 const handlePreventStepClick = () => {
  back?.();
 };

 const handleInputChange = (value) => {
  onChange?.(value);
 };

 return (
  <Wrapper>
   <Heading>{placeholder}</Heading>
   <Input
    placeholder={placeholder}
    isReturnValue
    value={value}
    onChange={handleInputChange}
   />
   <div style={{ display: "flex", gap: 12 }}>
    <Button variant="secondary" onClick={handlePreventStepClick}>
     <FormattedMessage id="result.button.back" />
    </Button>
    <Button onClick={handleNextStepClick}>
     <FormattedMessage id="result.button.next" />
    </Button>
   </div>
  </Wrapper>
 );
};

export default ResultInput;

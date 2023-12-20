import { FormattedMessage } from "react-intl";
import { Button, Heading, Input, Text, Wrapper } from "ui";

const ResultInput = ({ placeholder, value, onChange, next, back, isError }) => {
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
  <Wrapper maxWidth="346px">
   <Heading>{placeholder}</Heading>
   <Input
    isError={isError}
    placeholder={placeholder}
    isReturnValue
    value={value}
    onChange={handleInputChange}
   />
   <div
    style={{
     display: "flex",
     alignItems: "baseline",
     gap: "4px",
    }}
   >
    <Text variant="md">⚠</Text>
    <Text variant="sm"><FormattedMessage id="notation.name"/></Text>
   </div>

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

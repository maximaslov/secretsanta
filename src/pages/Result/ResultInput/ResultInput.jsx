import { FormattedMessage } from "react-intl";
import { Button, Heading, Input, Wrapper } from "ui";

const ResultInput = ({ placeholder, value, onChange, onClick }) => {
 const handleButtonClick = () => {
  onClick?.();
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
   <Button onClick={handleButtonClick}>
    <FormattedMessage id="result.button.next" />
   </Button>
  </Wrapper>
 );
};

export default ResultInput;

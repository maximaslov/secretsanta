import { useCallback, useState } from "react";
import { useIntl } from "react-intl";

const useError = () => {
 const { formatMessage } = useIntl();

 const [errorMessage, setErrorMessage] = useState("");
 const [isError, setError] = useState(false);

 const showError = useCallback(
  (message) => {
   const messageText = formatMessage({ id: message });
   if (isError || errorMessage === messageText) {
    return;
   }

   setErrorMessage(messageText);
   setError(true);

   setTimeout(() => {
    setError(false);
    setErrorMessage("");
   }, 4000);
  },
  [errorMessage, setErrorMessage, isError, setError, formatMessage]
 );

 return {
  showError,
  isError,
  errorMessage,
 };
};

export default useError;

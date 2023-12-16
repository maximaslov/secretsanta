import { Heading, Modal, Text } from "ui";
import developer from "../../assets/img/photos/developer.jpg";

const DeveloperModal = ({ onClose }) => {
 return (
  <Modal onClose={onClose}>
   <div style={{ display: "flex", gap: "32px" }}>
    <div
     style={{
      display: "flex",
      maxWidth: "300px",
      width: "100%",
      minWidth: "250px",
      overflow: "hidden",
      borderRadius: "4px",
      height: "fit-content",
     }}
    >
     <img
      src={developer}
      alt="Maksym Maslov"
      style={{ width: "100%", objectFit: "fill" }}
     />
    </div>
    <div>
     <Heading left>Максим Маслов</Heading>
     <Text variant="md" bold>
      Frontend Developer
     </Text>
     <div style={{ marginTop: "16px" }}>
      <Text variant="md">
       Привіт і ласкаво прошу на сайт мого веб додатку Таємний Санта! :)
      </Text>
      <br />
      <Text variant="md">
       Дуже сподіваюся, що мені вдалося погрузити тебе в атмосферу Нового Року і
       ти задоволений моїм дизайном та інтуїтивно зрозумілим інтерфейсом. Бажаю
       веселих свят та приємних вражень від обміну подарунками!
      </Text>
      <br />
      <Text variant="lg" bold>
       Коротко про мене:
      </Text>
      <Text variant="lg">
       Я займаюся розробкою з початку 2022 року. Окрім роботи, це стало і моїм
       основним хобі, посунувши на задній план музику і фотографію.
      </Text>
      <br />
      <Text variant="lg" bold>
       Технології з якими я працюю:
      </Text>
      <Text variant="lg">
       React.js, React Native, Next.js, Redux Toolkit, RTK Query, React Hook
       Form, Styled Components, Styled System, та інші.
      </Text>
     </div>
    </div>
   </div>
  </Modal>
 );
};

export default DeveloperModal;

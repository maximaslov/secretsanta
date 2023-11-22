const passwordGenerator = () => {
 const characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
 let password = "";

 for (let i = 0; i < 3; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  password += characters.charAt(randomIndex);
 }

 return password;
};

export default passwordGenerator;

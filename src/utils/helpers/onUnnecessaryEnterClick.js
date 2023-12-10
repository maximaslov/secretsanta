const onUnnecessaryEnterClick = (event) => {
 if (event.keyCode === 13) {
  event.preventDefault();
 }
}

export default onUnnecessaryEnterClick;

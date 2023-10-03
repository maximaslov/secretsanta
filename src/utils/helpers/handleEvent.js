export const handleEvent = (func) => {
    const onClick = (event) => {
      func(event)
    }
  
    const onKeyDown = (event) => {
      if (event.keyCode === 13 || event.keyCode === 32) {
        func(event)
      }
    }
    return { onClick, onKeyDown }
  }

  export default handleEvent
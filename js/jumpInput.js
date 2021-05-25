export default () => {
  const inputs = document.querySelectorAll('[data-code="pin"]');
  inputs.forEach((input, i, arr) => {
    input.addEventListener('keydown', (event) => {
      const { key, keyCode } = event;
      const exceptions = [8, 9];
      if (isNaN(key) && !exceptions.includes(keyCode)) {
        event.preventDefault();
      }
    })
    input.addEventListener('keyup', (event) => {
      const { target, keyCode } = event;
      const inputs = [...arr];
      const index = inputs.findIndex(i => i === input);
      if (target.value) inputs[index + 1]?.focus();
      else if (keyCode === 8) inputs[index - 1]?.focus();
    })
  });
}
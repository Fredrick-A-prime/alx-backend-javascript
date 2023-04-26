export default function guardrail(mathFunction) {
  const arr = [];
  let value;

  try {
    value = mathFunction();
  } catch (err) {
    value = err.toString();
  }

  arr.push(value);
  arr.push('Guardrail was processed');

  return arr;
}

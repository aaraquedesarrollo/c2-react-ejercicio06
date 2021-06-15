export const Cabezera = (props) => {
  const { titulo } = props;
  return (
    <header className="d-flex justify-content-center align-items-center flex-column">
      <h1 className="mt-4 mb-3">FORMULARIO MUY GENERICO</h1>
      <h2>{titulo}</h2>
    </header>
  );
};

import { useMemo, useState } from "react";

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = useState(0);
  // const valor = useMemo(() => {
  //   const localItem = window.localStorage.getItem("produto");
  //   console.log("Aconteceu o memo");
  //   return localItem;
  // }, []);
  const valor = operacaoLenta();
  console.log(valor);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;

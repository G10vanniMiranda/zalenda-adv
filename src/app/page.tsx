import Home from "./(views)/home/page";
import Perfil from "./(views)/perfil/page";
import Servicos from "./(views)/servicos/page";

export default function Index() {
  return (
    <div className="flex flex-col">
      <Home />
      <Perfil />
      <Servicos />
    </div>
  );
}

import Home from "./(views)/home/page";
import Perfil from "./(views)/perfil/page";

export default function Index() {
  return (
    <div className="flex flex-col">
      <Home />
      <Perfil />
    </div>
  );
}

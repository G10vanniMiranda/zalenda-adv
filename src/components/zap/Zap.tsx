import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";

export function Zap() {
  return (
    <Link
      href="wa.me/5569992682118"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 w-80 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2"
    >
      <RiWhatsappLine className="text-white animate-pulse" size={30} />
      Fale com um especialista
    </Link>
  );
}

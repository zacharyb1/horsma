import Link from "next/link";

const Menu = () => {
  return (
    <nav className="bg-gray-900 w-full">
        <ul className="flex justify-end items-right h-full ml-auto">
            <li>
                <a href="/" className="text-white font-bold text-lg">Etusivu</a>
            </li>
            <li>
                <a href="verkkosivut" className="text-white font-bold text-lg">Verkkokaupat</a>
            </li>
            <li>
                <a href="verkkokaupat" className="text-white font-bold text-lg">Mobiilisovellukset</a>
            </li>
            <li>
                <a href="mobiilisovellukset" className="text-white font-bold text-lg">Mobiilisovellukset</a>
            </li>
            <li>
                <a href="yhteystiedot" className="text-white font-bold text-lg">Yhteystiedot</a>
            </li>
            </ul>
    </nav>
  );
};

export default Menu;
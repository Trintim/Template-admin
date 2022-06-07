import { IconeConfig, IconeHome, IconeNotify, IconeSair } from "../icons/index";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return (
      <aside
        className={`flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900
        `}
      >
        <div
          className={`
          h-20 w-20 bg-gradient-to-r from-indigo-500 to bg-purple-500 flex
          flex-col items-center justify-center
        `}
        >
          <Logo />
        </div>
        <ul className="flex-grow">
          <MenuItem url="/" texto="Início" icone={IconeHome} />
          <MenuItem url="/ajustes" texto="Ajustes" icone={IconeConfig} />
          <MenuItem
            url="/notificacoes"
            texto="Notificações"
            icone={IconeNotify}
          />
        </ul>
        <ul className="">
          <MenuItem
            className={`text-red-600 dark:text-red-400 hover:bg-red-400 hover:text-white dark:hover:text-white`}
            onClick={() => console.log("logout")}
            texto="Sair"
            icone={IconeSair}
          />
        </ul>
      </aside>
    );
}
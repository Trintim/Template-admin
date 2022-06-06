import { IconeConfig, IconeHome, IconeNotify } from "../icons/index";
import MenuItem from "./MenuItem";

export default function MenuLateral(){
    return (
      <aside>
        <ul>
          <MenuItem url="/" texto="Início" icone={IconeHome} />
          <MenuItem url="/ajustes" texto="Ajustes" icone={IconeConfig} />
          <MenuItem url="/notificacoes" texto="Notificações" icone={IconeNotify} />
        </ul>
      </aside>
    );
}
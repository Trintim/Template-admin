import Layout from "../components/template/Layout";
import { AppConsumer } from "../data/context/AppContext";

export default function Notificacoes() {
  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você gerenciar as suas notificações!!"
    >
      <AppConsumer>
        {dados => <h3>{dados.nome}</h3>}
      </AppConsumer>
    </Layout>
  );
}

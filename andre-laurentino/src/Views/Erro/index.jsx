import { Link } from "react-router-dom";
function Erro () {
    return (
      <div>
        <h2>Erro, conteúdo não encontrado</h2>
        <p>
          <Link to="/">Voltar a página inicial</Link>
        </p>
      </div>
    );
}

export default Erro;
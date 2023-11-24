import styled from "./cadastro.module.css";

<div className={styled.cadastroForm}>
    <div className={styled.cadastroLabels}>
        <label>
            Nome do Contato de Emergência:
            <input type="text" placeholder="Digite o nome do contato" />
        </label>
        <label>
            Telefone do Contato de Emergência:
            <input type="text" placeholder="Digite o telefone do contato" />
        </label>
        <label>
            Relação com o Contato:
            <input type="text" placeholder="Digite a relação (ex: pai/mãe/amigo)" />
        </label>
    </div>
</div>

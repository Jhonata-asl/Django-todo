//Função de Pergunta ao usuário se ele quer excluir uma tarefa

document.querySelectorAll(".delete-btn").forEach(
    btn => {
        btn.addEventListener("click", function(e){
            e.preventDefault();

            const delLink = this.getAttribute("href");

            if(delLink && confirm("Quer deletar esta tarefa??"))
            {
                window.location.href = delLink;
            }
     });
    }
)
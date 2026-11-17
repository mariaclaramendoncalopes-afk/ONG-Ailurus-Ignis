const cards = document.querySelectorAll(".container-doacao [data-tipo-ajuda]");
const grupos  = document.querySelectorAll("[data-campos]");
const formulario = document.querySelector("#formulario");

function atualizarFormulario(tipoAjuda){
    grupos.forEach(function(grupo) {
        const selecionado = grupo.dataset.campos === tipoAjuda;

        grupo.hidden = !selecionado;
        grupo.disabled = !selecionado;
    });

}

cards.forEach(function(card) {
    card.addEventListener("click", function(event){
        event.preventDefault();

        const tipoAjuda = card.dataset.tipoAjuda;

        atualizarFormulario(tipoAjuda);

        formulario.scrollIntoView({
            behavior: "smooth"
        });
    });
});

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const termos = document.getElementById("termos").checked;

    window.alert(
        `Nome: ${nome}\n
Email: ${email}\n
Telefone: ${telefone}`
    );

});
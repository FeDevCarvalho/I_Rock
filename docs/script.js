function carregou() {
    alert(`Pagina carregada com sucesso\nAgora você já pode aproveitar o seu Rock Pet Virtual`);
};

function clicou() {
    document.getElementById("Rocky").src="../images/rock_happy.png";
    let userName = prompt("Qual o seu nome, mestre ?");
    if (userName) {
        alert("Prazer em te conhecer mestre " + userName + " !");
    }
};
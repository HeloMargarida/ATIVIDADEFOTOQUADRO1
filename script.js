
function buscarCEP() {
    const cep = document.getElementById("cep").value.replace(/\D/g, '');

    if (cep.length !== 8) {
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("uf").value = data.uf;
            } else {
                alert("CEP não encontrado.");
            }
        })
        .catch(error => {
            console.error("Erro ao buscar o CEP:", error);
            alert("Erro ao buscar o CEP.");
        });
}

function salvarDados(event) {
    event.preventDefault(); // Evita envio real do form

    const cep = document.getElementById("cep").value;
    const logradouro = document.getElementById("logradouro").value;
    const uf = document.getElementById("uf").value;

    document.getElementById("dadosCep").textContent = cep;
    document.getElementById("dadosLogradouro").textContent = logradouro;
    document.getElementById("dadosUF").textContent = uf;

    document.getElementById("dados-salvos").style.display = "block";
}


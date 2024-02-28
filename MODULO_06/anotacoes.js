let nomeBeneficiario = document.getElementById('nome-beneficiario')

nomeBeneficiario.value.split(' ').length > 3

document.getElementById('btn-depositar').disabled = nomeBeneficiario.value.split(' ').length < 3
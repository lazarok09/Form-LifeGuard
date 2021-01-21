
function keepOnStorage(){
    const NAME = document.getElementById('formulario_input').value;
    localStorage.setItem('NAME', NAME)
    const GITHUB = document.getElementById('formulario_input2').value;
    localStorage.setItem('GITHUB', GITHUB)
    const LINKEDIN = document.getElementById('formulario_input3').value;
    localStorage.setItem('LINKEDIN', LINKEDIN)

}
function clearStorage() {
    localStorage.removeItem("NAME");
    localStorage.removeItem("GITHUB");
    localStorage.removeItem("LINKEDIN");
    document.getElementById('formulario_input').value = ""
    document.getElementById('formulario_input2').value = ""
    document.getElementById('formulario_input3').value = ""
}
function getData(){
    const NAME = localStorage.getItem('NAME');
    const GITHUB = localStorage.getItem('GITHUB');
    const LINKEDIN = localStorage.getItem('LINKEDIN');
    document.getElementById('formulario_input').value = NAME;
    document.getElementById('formulario_input2').value = GITHUB;
    document.getElementById('formulario_input3').value = LINKEDIN;
    
}
// modal function
function runModal() {
const NAME = document.getElementById('formulario_input').value;
const GITHUB = document.getElementById('formulario_input2').value;
const LINKEDIN = document.getElementById('formulario_input3').value;

if (NAME != '' && GITHUB != '' && LINKEDIN != '') {
 document.getElementById('modal-body').innerHTML = "Sucesso ao persistir os dados em local storage";
 document.getElementById('modal-title').innerHTML = "Sucesso";
 document.getElementById('modal-title').className = "text-success";
 document.getElementById('modal-footer').innerHTML = "Voltar";
 document.getElementById('modal-footer').className = "btn-success";
 $('#modal').modal('show');
} else {
    document.getElementById('modal-body').innerHTML = "Existem elementos que não foram inseridos";
    document.getElementById('modal-title').innerHTML = "ERRO!";
    document.getElementById('modal-title').className = "text-danger";
    document.getElementById('modal-footer').innerHTML = "VOLTAR E CORRIGIR";
    document.getElementById('modal-footer').className = "btn btn-info";
 $('#modal').modal('show');
}

}

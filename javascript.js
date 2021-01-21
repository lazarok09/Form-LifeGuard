
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
    
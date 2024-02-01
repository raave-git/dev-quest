let elementosId = document.getElementById("meuId");
    console.log(elementosId);

let elementosClass = document.getElementsByClassName("minhaClasse");
    for (let i = 0; i < elementosClass.length; i++) {
        console.log(elementosClass[i]);
    }

let elementosTag = document.getElementsByTagName("pre");
for (let i = 0; i < elementosTag.length; i++) {
    console.log(elementosTag[i]);
}

let elementosName = document.getElementsByName("meuNome");
    for (let i = 0; i < elementosName.length; i++) {
        console.log(elementosName[i]);
    }
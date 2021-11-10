



document.getElementById("buy").onclick = 
function() {
    let radios = document.getElementsByName('a');
    for (var radio of radios)
    {
        if (radio.checked) {
            alert("Vous avez choisi le coleur "+radio.value);
        }
    }
}

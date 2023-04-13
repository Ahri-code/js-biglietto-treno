// Variabili

let distanza;
let eta;

// inputs

distanza = prompt("Inserisci i chilometri che si intende percorrere");

distanza = parseInt(distanza);

eta = prompt("Inserisci l'età del passeggero");

// checks

if (isNaN(distanza) && isNaN(eta)) {
    document.getElementById("title").innerText = `Errore, per favore ricarica la pagina e inserisci un numero come risposta alle domande`;
}
else if (isNaN(distanza)) {
    document.getElementById("title").innerText = `Errore, per favore ricarica la pagina e inserisci un numero alla domanda sulla distanza`;
}
else if (isNaN(eta)) {
    document.getElementById("title").innerText = `Errore, per favore ricarica la pagina e inserisci un numero alla domanda sull'età`;
}


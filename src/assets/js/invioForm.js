function inviaRicetta(event) {
    event.preventDefault();
    console.log('Pulsante partito');

    var form = document.getElementById('ricettaForm');

    var nomeRicetta = document.getElementById('nomeRicetta').value;
    // Puoi ottenere altri valori dei campi del form allo stesso modo

    var errorMessage = '';

    if (nomeRicetta.trim() === '') {
      errorMessage += 'Inserisci il nome della ricetta.\n';
    }
    var categoria = document.getElementById('categoria').value;
    if (categoria.trim() === '') {
      errorMessage += 'Inserisci la categoria.\n';
    }
    var descrizione = document.getElementById('descrizione').value;
    if (descrizione.trim() === '') {
      errorMessage += 'Inserisci la descrizione.\n';
    }
    var ingredienti = document.getElementById('ingredienti').value;
    if (ingredienti.trim() === '') {
      errorMessage += 'Inserisci gli ingredienti.\n';
    }
    var procedimento = document.getElementById('procedimento').value;
    if (procedimento.trim() === '') {
      errorMessage += 'Scrivi il procedimento.\n';
    }
    var tempoPreparazione = document.getElementById('tempoPreparazione').value;
    if (tempoPreparazione.trim() === '') {
      errorMessage += 'Inserisci il tempo di preparazione.\n';
    }
    var numeroPersone = document.getElementById('numeroPersone').value;
    if (numeroPersone.trim() === '') {
      errorMessage += 'Inserisci il numero delle persone.\n';
    }

    var difficolta = document.getElementById('difficolta').value;
    if (difficolta.trim() === '') {
      errorMessage += 'Inserisci la difficoltà.\n';
    }

    var costo = document.getElementById('costo').value;
    if (costo.trim() === '') {
      errorMessage += 'Inserisci il costo.\n';
    }

    var linkSpotify = document.getElementById('linkSpotify').value;
    if (linkSpotify.trim() === '') {
      linkSpotify = 'Nessun link';
    }


    if (errorMessage !== '') {
      alert(errorMessage);
    } else {

      var utente= authService.getUser();
      
      var ricettaProposta = {
        codiceRicetta: 0,
        nomeRicetta: nomeRicetta,
        categoria: categoria,
        descrizione: descrizione,
        ingredienti: ingredienti,
        procedimento: procedimento,
        tempoPreparazione: tempoPreparazione,
        numeroPersone: numeroPersone,
        difficolta: difficolta,
        costo: costo,
        linkYoutube: 'linkYoutube',
        linkSpotify: linkSpotify,
        autore: utente,
        pathImmagine: 'pathImmagine',
        tag1: 'tag1',
        tag2: 'tag2',

      };

      

      inviaRicettaAlBackend(ricettaProposta);

    }
  }

  function inviaRicettaAlBackend(ricetta, utente) {
    console.log('Form inviato con successo');

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/salvaProposta', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('Ricetta inviata con successo al backend');
                window.location.href = 'http://localhost:4200/area-personale';
                alert("La tua proposta è stata inviata con successo!");
            } else {
                console.error('Errore durante l\'invio della ricetta al backend');
            }
        }
    };

    xhr.send(JSON.stringify(ricetta));
}

function calcola() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const oggi = new Date();
    if (!birthdate || birthdate > oggi) {
        document.getElementById("results").innerHTML = "<p class='error'>Inserisci una data valida!</p>";
        return;
    }

    // Calcolo età
    const anni = oggi.getFullYear() - birthdate.getFullYear();
    const mesi = oggi.getMonth() - birthdate.getMonth() + (oggi.getDate() < birthdate.getDate() ? -1 : 0);
    const giorni = Math.floor((oggi - birthdate) / (1000 * 60 * 60 * 24));
    const ore = giorni * 24;

    // Output età
    document.getElementById("results").innerHTML = `
        <div>
            <h2>Età Calcolata</h2>
            <p><strong>Anni:</strong> ${anni}</p>
            <p><strong>Mesi:</strong> ${mesi}</p>
            <p><strong>Giorni:</strong> ${giorni}</p>
            <p><strong>Ore:</strong> ${ore}</p>
        </div>
    `;

    determinaSegno(birthdate);
}

function determinaSegno(birthdate) {
    const giorno = birthdate.getDate();
    const mese = birthdate.getMonth() + 1;
    let segno, descrizione, immagine;

    // Calcolo segno zodiacale e assegnazione immagine
    if ((mese === 3 && giorno >= 21) || (mese === 4 && giorno <= 19)) {
        segno = "Ariete";
        descrizione = "L'Ariete è noto per la sua natura energica e avventurosa. È coraggioso, ama essere un leader e affronta ogni sfida con entusiasmo.";
        immagine = "https://m.media-amazon.com/images/I/61jihpgkW7L._AC_UF1000,1000_QL80_.jpg";
    } else if ((mese === 4 && giorno >= 20) || (mese === 5 && giorno <= 20)) {
        segno = "Toro";
        descrizione = "Il Toro è pratico e determinato, ma allo stesso tempo ama il comfort e la bellezza. È un segno affidabile che apprezza le cose semplici della vita.";
        immagine = "./imeges/toro.jpg";
    } else if ((mese === 5 && giorno >= 21) || (mese === 6 && giorno <= 20)) {
        segno = "Gemelli";
        descrizione = "I Gemelli sono curiosi e comunicativi, sempre alla ricerca di nuove esperienze e conoscenze. Sono flessibili e socievoli.";
        immagine = "./imeges/Gemelli.jpg";
    } else if ((mese === 6 && giorno >= 21) || (mese === 7 && giorno <= 22)) {
        segno = "Cancro";
        descrizione = "Il Cancro è sensibile e intuitivo, spesso in sintonia con le emozioni delle persone intorno a lui. Valorizza la famiglia e la sicurezza.";
        immagine = "./imeges/Cancro.jpg";
    } else if ((mese === 7 && giorno >= 23) || (mese === 8 && giorno <= 22)) {
        segno = "Leone";
        descrizione = "Il Leone è carismatico e creativo, con un forte senso di orgoglio. Ama essere al centro dell'attenzione e affronta la vita con passione.";
        immagine = "./imeges/leone.jpg";
    } else if ((mese === 8 && giorno >= 23) || (mese === 9 && giorno <= 22)) {
        segno = "Vergine";
        descrizione = "La Vergine è analitica e pratica, con un grande amore per i dettagli. È un segno affidabile e sempre disposto ad aiutare gli altri.";
        immagine = "./images/Vergine.jpg";
    } else if ((mese === 9 && giorno >= 23) || (mese === 10 && giorno <= 22)) {
        segno = "Bilancia";
        descrizione = "La Bilancia cerca l'armonia e la bellezza in ogni cosa. È diplomatica e ama relazionarsi con gli altri in modo equilibrato.";
        immagine = "./imeges/Bilancia.jpg";
    } else if ((mese === 10 && giorno >= 23) || (mese === 11 && giorno <= 21)) {
        segno = "Scorpione";
        descrizione = "Lo Scorpione è intenso e misterioso. Ha una grande passione per la vita e un profondo senso di lealtà.";
        immagine = "./images/Scorpione.jpg";
    } else if ((mese === 11 && giorno >= 22) || (mese === 12 && giorno <= 21)) {
        segno = "Sagittario";
        descrizione = "Il Sagittario è ottimista e avventuroso, sempre in cerca di nuove esperienze. Ama la libertà e l'esplorazione.";
        immagine = "./imeges/Sagittario.jpg";
    } else if ((mese === 12 && giorno >= 22) || (mese === 1 && giorno <= 19)) {
        segno = "Capricorno";
        descrizione = "Il Capricorno è ambizioso e disciplinato, con una forte etica del lavoro. È un segno paziente e determinato.";
        immagine = "./imeges/Capricorno.jpg";
    } else if ((mese === 1 && giorno >= 20) || (mese === 2 && giorno <= 18)) {
        segno = "Acquario";
        descrizione = "L'Acquario è innovativo e indipendente, con una visione unica della vita. Ama condividere idee e aiutare gli altri.";
        immagine = "./imeges/Acquario.jpg";
    } else if ((mese === 2 && giorno >= 19) || (mese === 3 && giorno <= 20)) {
        segno = "Pesci";
        descrizione = "I Pesci sono empatici e intuitivi, con una natura creativa. Sono sognatori e spesso in sintonia con le emozioni degli altri.";
        immagine = "./imeges/Pesci.jpg";
    }

    // Output segno zodiacale
    document.getElementById("zodiac").innerHTML = `
        <div>
            <h2>${segno}</h2>
            <img src="${immagine}" alt="${segno}" class="zodiac-img" style="width: 300px; height: 300px; object-fit: cover; border-radius: 10px;">
            <h1>${descrizione}</h1>
        </div>
    `;
}
function radiobuttonQuestion(index, lista) {
    let body = document.body;
    let kerdesKontener = document.querySelector('#kerdes-kontener');

    // ujKontener kezdete
    let ujKontener = document.createElement('div');
    ujKontener.setAttribute('id', 'kerdes-kontener');
    ujKontener.style.display = 'block';
    let tartalom =
        '<span class="material-symbols-outlined" id="close">close</span>';
    tartalom += '<div class="belso-kerdes">';
    tartalom += `<h1>${lista.length}/${index + 1}. ${
        lista[index].kerdes
    } (1 jó válasz)</h1>`;

    if (lista[index].kep) {
        tartalom += '<div class="kep">';
        tartalom += `<img src="${lista[index].kep}" />`;
        tartalom += '</div>';
    }

    lista[index].valaszok.sort(function () {
        return 0.5 - Math.random();
    });

    tartalom += '<div class="valaszok">';
    for (let i = 0; i < lista[index].valaszok.length; i++) {
        tartalom += '<div class="valasz">';
        tartalom += `<p><input type="radio" name="valaszok" id="${i}" /><label for="${i}">${lista[index].valaszok[i]}</label></p>`;
        tartalom += '</div>';
    }
    tartalom += '</div>';

    tartalom += '<div class="gomb">';
    tartalom += '<button id="feldolgoz">Feldolgoz</button>';
    tartalom += '</div>';

    tartalom += '<div class="jo-valaszok">';
    tartalom += '<h3>Helyes válasz: </h3>';
    tartalom += '<div class="jo-valasz">';
    tartalom += `<p>${lista[index].joValasz}</p>`;
    tartalom += '</div>';

    tartalom += '<hr />';
    tartalom += '<div id="eredmeny">';
    tartalom += '</div>';

    if (index < lista.length - 1) {
        tartalom += '<div class="gomb">';
        tartalom += '<button id="kovetkezo">Következő kérdés</button>';
        tartalom += '</div>';
    }
    tartalom += '</div>';

    tartalom += '</div>';
    ujKontener.innerHTML = tartalom;
    // ujKontener vége

    body.replaceChild(ujKontener, kerdesKontener);

    let close = document.querySelector('#close');

    close.addEventListener('click', () => {
        ujKontener.style.display = 'none';
    });

    let feldolgoz = document.querySelector('#feldolgoz');
    let joRValasz = document.querySelectorAll('.jo-valaszok');

    feldolgoz.addEventListener('click', () => {
        joRValasz[0].style.display = 'block';
        feldolgoz.style.display = 'none';

        let eredmeny = document.querySelector('#eredmeny');
        let ossz = 0;

        for (let i = 0; i < lista[index].valaszok.length; i++) {
            if (document.getElementById(i).checked === true) {
                if (lista[index].valaszok[i] === lista[index].joValasz) {
                    ossz = 2;
                }
            }
        }

        let tart = '';
        szerezheto += 2;
        osszEredmeny += ossz;
        let szazalek = (osszEredmeny / szerezheto) * 100;

        if (ossz === 0) {
            tart = `<h4>Eredményed: 2/0</h4>`;
            if (szazalek < 40) {
                tart += `<h4 class="rossz">Eddigi összeredményed: ${szerezheto}/${osszEredmeny} (${szazalek.toFixed(
                    2
                )}%)</h4>`;
            } else {
                tart += `<h4 class="jo">Eddigi összeredményed: ${szerezheto}/${osszEredmeny} (${szazalek.toFixed(
                    2
                )}%)</h4>`;
            }
        } else if (ossz === 2) {
            tart = `<h4>Eredményed: 2/2</h4>`;
            if (szazalek < 40) {
                tart += `<h4 class="rossz">Eddigi összeredményed: ${szerezheto}/${osszEredmeny} (${szazalek.toFixed(
                    2
                )}%)</h4>`;
            } else {
                tart += `<h4 class="jo">Eddigi összeredményed: ${szerezheto}/${osszEredmeny} (${szazalek.toFixed(
                    2
                )}%)</h4>`;
            }
        }

        eredmeny.innerHTML = tart;
    });

    let kovetkezo = document.querySelector('#kovetkezo');

    if (kovetkezo) {
        kovetkezo.addEventListener('click', () => {
            if (lista[index + 1].tipus === 'check') {
                checkboxQuestion(index + 1, lista);
            } else if (lista[index + 1].tipus === 'radio') {
                radiobuttonQuestion(index + 1, lista);
            }
        });
    }
}

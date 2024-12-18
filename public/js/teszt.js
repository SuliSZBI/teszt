let gombok = document.querySelectorAll('button');
let kerdesKontener = document.querySelector('#kerdes-kontener');
let close = document.querySelector('#close');

close.addEventListener('click', () => {
    kerdesKontener.style.display = 'none';
});

let ertek = JSON.parse(tesztek);
console.log(ertek);

for (let i = 0; i < ertek.length; i++) {
    ertek[i].kerdes = ertek[i].kerdes.replace(/ß/g, '"');
    ertek[i].kerdes = ertek[i].kerdes.replace(/</g, '&lt;');
    ertek[i].kerdes = ertek[i].kerdes.replace(/>/g, '&gt;');
    ertek[i].kerdes = ertek[i].kerdes.replace(/\t/g, '&#92;t');
    for (let j = 0; j < ertek[i].valaszok.length; j++) {
        ertek[i].valaszok[j] = ertek[i].valaszok[j].replace(/ß/g, '"');
        ertek[i].valaszok[j] = ertek[i].valaszok[j].replace(/</g, '&lt;');
        ertek[i].valaszok[j] = ertek[i].valaszok[j].replace(/>/g, '&gt;');
        ertek[i].valaszok[j] = ertek[i].valaszok[j].replace(/\t/g, '&#92;t');
    }

    for (let j = 0; j < ertek[i].joValaszok.length; j++) {
        ertek[i].joValaszok[j] = ertek[i].joValaszok[j].replace(/ß/g, '"');
        ertek[i].joValaszok[j] = ertek[i].joValaszok[j].replace(/</g, '&lt;');
        ertek[i].joValaszok[j] = ertek[i].joValaszok[j].replace(/>/g, '&gt;');
        ertek[i].joValaszok[j] = ertek[i].joValaszok[j].replace(
            /\t/g,
            '&#92;t'
        );
    }
}

console.log(ertek);

let al = [];

for (let i = 0; i < ertek.length; i++) {
    let tipus = '';
    if (ertek[i].tipus === 'Jelölőnégyzet') {
        let objektum = {
            targy: ertek[i].targy,
            tipus: 'check',
            kerdes: ertek[i].kerdes,
            valaszok: ertek[i].valaszok,
            joValaszok: ertek[i].joValaszok,
            kep: ertek[i].kep,
        };

        al.push(objektum);
    } else {
        let objektum = {
            targy: ertek[i].targy,
            tipus: 'radio',
            kerdes: ertek[i].kerdes,
            valaszok: ertek[i].valaszok,
            joValasz: ertek[i].joValaszok[0],
            kep: ertek[i].kep,
        };

        al.push(objektum);
    }
}

tesztSor = al;

for (let i = 0; i < gombok.length; i++) {
    gombok[i].addEventListener('click', () => {
        szerezheto = 0;
        osszEredmeny = 0;
        kerdesKontener.style.display = 'block';
        let lista = [];

        for (let j = 0; j < tesztSor.length; j++) {
            if (tesztSor[j].targy === gombok[i].innerText) {
                lista.push(tesztSor[j]);
            }
        }

        lista.sort(function () {
            return 0.5 - Math.random();
        });

        if (lista[0].tipus === 'check') {
            checkboxQuestion(0, lista);
        } else if (lista[0].tipus === 'radio') {
            radiobuttonQuestion(0, lista);
        }
    });
}

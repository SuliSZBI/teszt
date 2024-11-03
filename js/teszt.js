let gombok = document.querySelectorAll('button');
let kerdesKontener = document.querySelector('#kerdes-kontener');
let close = document.querySelector('#close');

close.addEventListener('click', () => {
    kerdesKontener.style.display = 'none';
});

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

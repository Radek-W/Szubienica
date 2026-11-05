let Hasla = 
    ['Drzewo',
    'Rzeka',
    'Pingwin',
    'Hipopotam',
    'Kaktus',
    'Tulipan',
    'Paprotka',
    'Astronauta',
    'Woda gazowana',
    'Krasnal']
let indeks = Math.floor(Math.random() * Hasla.length)
let haslo = Hasla[indeks]
haslo = haslo.toUpperCase();

let dlugosc = haslo.length;
let haslo1 = '';
let skuchy = 0;

let yes = new Audio("yes.wav");
let no = new Audio("no.wav");

//zakrycie hasła
for(let i = 0; i < dlugosc; i++){
    if(haslo[i] == ' ')haslo1 = haslo1 + ' ';
    else haslo1 = haslo1 + '-';
}

function wypisz_haslo(){
    document.getElementById('plansza').innerHTML = haslo1;
}

window.onload = start;

//Literkon

let litery = ['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ż','Ź'];


function start(){ // utworzenie pudełek z literami
    let tresc_diva = '';

    for(let i = 0; i < litery.length; i++){
        let element = 'lit' + i;

        tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz(' + i + ')" id="' + element + '">' + litery[i] + '</div>';
        if((i+1) % 7 == 0 )tresc_diva = tresc_diva + '<div style="clear:both"></div>';
    }

    document.getElementById('alfabet').innerHTML = tresc_diva;

    wypisz_haslo();
}

let haslo2="";
function sprawdz(nr) { // sprawdzanie czy litera należy do hasła
    let klikniety_div = document.getElementById("lit"+nr)
if(klikniety_div.style.cursor == "default"){
    return;
}
    
    haslo2="";
    let trafiona = false;

    for(let i=0; i<dlugosc; i++){
        if(haslo.charAt(i) == litery[nr]){
            haslo2 += haslo.charAt(i);
            trafiona = true;
        } else {
            haslo2 += haslo1.charAt(i);
        }
    }
    haslo1 = haslo2;
    document.getElementById("plansza").innerHTML=haslo2;

    //dobra litera


if(trafiona == true){
    yes.play();
    klikniety_div.style.background = "#003300";
    klikniety_div.style.color = "#00C000";
    klikniety_div.style.border = "3px solid #00C000";
    klikniety_div.style.cursor = "default";
    haslo1=haslo2;
    wypisz_haslo();

    // Warunek wygranej
    if(haslo == haslo1){
        document.getElementById("alfabet").removeAttribute("onclick");
        document.getElementById("alfabet").innerHTML = 'Wygrałeś! <br><br> <span style="cursor:pointer; font-weight:bold; color:#00C000;" onclick="location.reload()">ZAGRAJ JESZCZE RAZ</span>';
    }
} else {
    //zla litera
    no.play();
    klikniety_div.style.background = "#330000";
    klikniety_div.style.color = "#C00000"
    klikniety_div.style.border = "3px solid #C00000";
    klikniety_div.style.cursor = "default";


    //Błędy
    skuchy++;
    document.getElementById("szubienica").innerHTML = '<img src="s'+skuchy+'.jpg" alt="Obrazki dot. szubienicy.">';


    //warunek przegranej
}   if(skuchy >=9){
    document.getElementById("alfabet").innerHTML = 'Przegrałeś. Hasło:<br>' + haslo + '<br><br><span style="cursor:pointer; font-weight:bold; color:#C00000;" onclick="location.reload()">ZAGRAJ JESZCZE RAZ</span>';
}
};

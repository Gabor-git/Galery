let kepIndex = 0;
let adat1 = { foto: 'images/p2.jpg', cim: 'Become red', leiras: 'Red between yellow' };
let adat2 = { foto: 'images/p8.jpg', cim: 'Laying', leiras: 'Laying in bed' };
let adat3 = { foto: 'images/p9.jpg', cim: 'Holes', leiras: 'Holes in pantihose and everywhere' };
let adat4 = { foto: 'images/p11.jpg', cim: 'Bathing', leiras: 'Bath in the nature' };
let adat5 = { foto: 'images/p13.png', cim: 'Liquid', leiras: 'The red color flew' };
let adat6 = { foto: 'images/p15.jpg', cim: 'Cold', leiras: 'Nipples in cold or excited' };
let adat7 = { foto: 'images/p17.jpg', cim: 'Blue', leiras: 'Blue between yellow' };
let adat8 = { foto: 'images/p18.png', cim: 'Breast', leiras: 'Painting for tits' };
let adat9 = { foto: 'images/p20.jpg', cim: 'Black in red', leiras: 'Bending over' };
let adat10 = { foto: 'images/p21.jpg', cim: 'Green', leiras: 'Green between red' };
let adat11 = { foto: 'images/p22.jpeg', cim: 'Sitting', leiras: 'Pale sitting on chair' };
let adat12 = { foto: 'images/p23.png', cim: 'On bed', leiras: 'Blue, purple and yellow' };
let adat13 = { foto: 'images/p28.jpg', cim: 'Lights', leiras: 'Lights in focus' };
let tomb = [adat1, adat2, adat3, adat4, adat5, adat6, adat7, adat8, adat9, adat10, adat11, adat12, adat13];
//$("#kep").attr("src", tomb[kepIndex].foto);
//$("#cim").text(tomb[kepIndex].cim);
//$("#leiras").text(tomb[kepIndex].leiras);
//a fentiek fv-é alakítva, ahol fotoSzam a bemenõ paraméter (bármi):
let betolt = (fotoSzam) => {
    $("#kep").attr("src", tomb[fotoSzam].foto);
    $("#cim").text(tomb[fotoSzam].cim);
    $("#leiras").text(tomb[fotoSzam].leiras);
}
betolt(kepIndex);
$("#jobbnyil").click(() => {
    if (kepIndex < 13) { kepIndex++; betolt(kepIndex); }
});
$("#balnyil").click(() => {
    if (kepIndex > 0) { kepIndex--; betolt(kepIndex); }
});

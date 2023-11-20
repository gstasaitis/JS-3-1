// var kaina = prompt("Įveskite kainą su PVM")
// var pvm = 21
// var bePvm = (((kaina / 100) * pvm));


// console.log("Prekės kaina su PVM: " + parseFloat(kaina).toFixed(2) + "€")
// console.log("PVM: " + pvm + "%")
// console.log("Prekės kaina be PVM: " + (parseFloat(kaina) - bePvm).toFixed(2)  + "€")





var kaina = prompt("Įveskite kainą")
var pristatymas = confirm("Ar reikalingas pristatymas")
var miestas = prompt("Įveskite Miestą")
var pristatymas = 20

if (kaina >=50 || miestas == "Vilnius" || miestas == "vilnius"){
    console.log("Prekės kaina: " + kaina + " €")
    console.log("Prekę nemokamai pristatysime į " + miestas + " per 1-3 dienas.")
} 
else if(kaina < 50 || pristatymas == true) {
    console.log("Prekės kaina: " + kaina + " €")
    console.log("Pritatymas: " + pristatymas + " €")
    console.log("Iš viso: " + (kaina + pristatymas) + " €")
    console.log("Prekę pristatysime į " + miestas + " per 1-3 dienas.")
        
} 
else { (kaina >= 50 && pristatymas == false )
    console.log("Prekės kaina: " + kaina + "€")
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a")

    }
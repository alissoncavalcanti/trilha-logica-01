let experienciaHeroi
let eloHeroi
let nomeHeroi

//Digite o nome do seu herói:
nomeHeroi = "Alisson"

//Digite quanta experiência seu herói conseguiu com suas aventuras:
experienciaHeroi = 7035


if (experienciaHeroi<1000){eloHeroi="Ferro"}
else if (experienciaHeroi>=1001 && experienciaHeroi<2000) {eloHeroi="Bronze"}
else if (experienciaHeroi>=2001 && experienciaHeroi<5000) {eloHeroi="Prata"}
else if (experienciaHeroi>=5001 && experienciaHeroi<7000) {eloHeroi="Ouro"}
else if (experienciaHeroi>=7001 && experienciaHeroi<8000) {eloHeroi="Platina"}
else if (experienciaHeroi>=8001 && experienciaHeroi<9000) {eloHeroi="Ascendente"}
else if (experienciaHeroi>=9001 && experienciaHeroi<10000) {eloHeroi="Imortal"}
else if (experienciaHeroi >= 1001) {eloHeroi = "Radiante"}


console.log ("O Herói de nome " + nomeHeroi + " está no nível " + eloHeroi)
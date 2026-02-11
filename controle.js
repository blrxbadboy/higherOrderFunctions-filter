function filter(tableau,condition) {
  var resultat=[]
  for (let i = 0; i < tableau.length; i++) {
    if (condition(tableau[i])) {
      resultat.push(tableau[i]);
    }
  }
  return resultat
}
//ex 1
function nombresPairs(nombres) {
  return filter(nombres,function(nombre) {
    return nombre % 2 === 0
  })
}

//ex 2
function multiplesDeTrois(nombres) {
  return filter(nombres,function(nombre) {
    return nombre % 3=== 0
  })
}

//ex 3 
function nombresPositifs(nombres) {
  return filter(nombres,function(nombre) {
    return nombre>0
  })
}


//ex 4
function longueurPaire(chaines) {
  return filter(chaines,function(chaine) {
    return chaine.length%2=== 0
  })
}


// Plus de pratique
//ex 1
function nombresImpairs(nombres) {
  return filter(nombres,function(nombre) {
    return nombre%2!==0
  })
}


//ex 2
function nombresNegatifs(nombres) {
  return filter(nombres,function(nombre) {
    return nombre<0
  })
}


//ex 3 
function superieursASix(nombres) {
  return filter(nombres,function(nombre) {
    return nombre>6
  })
}


//ex 4
function commenceParCaractere(chaines,car) {
  return filter(chaines,function(ch){
    return ch.startsWith(car)
  })
}


//ex 5
function indexPairEtLongueurPaire(chaines) {
  return filter(chaines,function(chaine,index) {
    return index % 2 === 0 && chaine.length % 2 ===0
  })
}


// ex 6
function deplacerZeros(nombres) {
}
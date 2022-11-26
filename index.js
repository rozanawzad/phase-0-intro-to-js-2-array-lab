
const cats=["Milo", "Otis", "Garfield"];
  function destructivelyAppendCat(name){
    cats.push("Ralph")
  }
  function destructivelyPrependCat(name){
    cats.unshift("Bob")
  }
  function destructivelyRemoveLastCat(){
    cats.pop()
  }
function destructivelyRemoveFirstCat(){
  cats.shift()
}
function appendCat(name){
 const cat= [...cats, "Broom"];
 return cat
}
function  prependCat(name){
  const cat=["Arnold", ...cats]
  return cat
}
function removeLastCat(){
  const cat=[...cats]
  cat.pop()
  return cat
}
function  removeFirstCat(){
  const cat=[...cats]
  cat.shift()
  return cat
}
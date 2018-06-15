//ejemplo funcion que trae un parametro dentro de un array de objetos.
function getStrockSymbols(stocks){
    let symbols = [];
    /*
    //metodo con for().
    for (let i = 0; i < stocks.length; i++){
        let item = stocks[i];
        symbols.push(item).symbol;
    }
    */
   //metodo con forEach(funcion) 
   /*
   stocks.fotEach(function(item){
       symbols.push(item.symbol);
   });
   */
  //metodo con forEach(funcionFlecha) 
   stocks.forEach(item => symbols.push(item.symbol));
    return symbols;
}
let stocks = [
    {symbol:'XFX', price:'240.22', volume:'23432'},
    {symbol:'TNZ', price:'332.19', volume:'234'},
    {symbol:'JXJ', price:'120.22', volume:'5323'}
];
var symbols = getStrockSymbols(stocks);
console.log(symbols);
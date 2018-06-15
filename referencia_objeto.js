let objA = {
    nombre: 'Cris', edad: 22
}
//console.log(objA);
//let objB = objA; //esto no copia el Obj A, sino que hace referencia a la ubicación de ObjA en la memoria por lo tanto, ahora Obj B tiene el mismo valor y el mismo lugar que ObjA
//console.log(objB);
//objB.nombre = 'David'
//console.log('Obj A' + JSON.stringify(objA));
//console.log('Obj B' + JSON.stringify(objB));
//para copiar realmente ese objeto se usa Object.assign();
let objB = Object.assign({}, objA);
objB.nombre = 'David'
console.log('Obj A' + JSON.stringify(objA));
console.log('Obj B' + JSON.stringify(objB));
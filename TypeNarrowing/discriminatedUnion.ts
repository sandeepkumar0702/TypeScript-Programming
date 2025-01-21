interface circle{
    kind:"circle";
    radius:number;
}
interface square{
    kind:"square";
    side:number;
}
type shape=circle | square;
function area(shape: shape) {
    if(shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    } 
    else{
        return shape.side ** 2;
    }
}
const circle1:circle={kind:"circle",radius:12};
const square1:square={kind:"square",side:12};
console.log(area(circle1));
console.log(area(square1));

import {Shape} from "./shape";

class Triangle extends Shape {
    private side1:number;
    private side2:number;
    private side3:number;

    constructor(color: string, name: string, side1: number, side2: number, side3: number) {
        super(color, name);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    getSide1=()=>this.side1;
    getSide2=()=>this.side2;
    getSide3=()=>this.side3;

    setSide1=(side1)=>this.side1=side1;
    setSide2=(side2)=>this.side2=side2;
    setSide3=(side3)=>this.side3=side3;

    getTriangleArea=()=>{
        let p=(this.side1+this.side2+this.side3)/2;
        let h1=(2*Math.sqrt((p*(p-this.side1)*(p-this.side2)*(p-this.side3))))/this.side1;
        return h1*this.side3*0.5;
    }

    getTrianglePerimeter=()=>this.side1+this.side2+this.side3;
}
let triangle=new Triangle('blue','triangle',20,30,40);
console.log(triangle.getTriangleArea());
console.log(triangle.getTrianglePerimeter());
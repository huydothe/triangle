export class Shape {
    private color: string;
    private name: string;

    constructor(color: string, name: string) {
        this.color = color;
        this.name = name;
    }
    getColor=()=>this.color;
    getName=()=>this.name;

    setColor=(color)=>this.color;
    setName=(name)=>this.name;
}
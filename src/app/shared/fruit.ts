export class Fruit {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public calories: number,
    public favorite: boolean,
    public img?: string,
  ) {}
}

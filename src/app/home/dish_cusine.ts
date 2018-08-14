export class Dish_Cusine{
  constructor(
    public cusines_id:number,
    public cusines_name:string,
    public dish_id:number,
    public dish_name:string,
    public dish_price:string,
    public dish_img:string,
    public fk_cusines_id:number
  ){}
}

export class OrderDetail{
  constructor(
    public bdetail_id:number,
    public fk_dish_id:number,
    public qty:number,
    public price:number,
    public remark:string,
    public fk_bill_id:number,
    public dish_id:number,
    public dish_name:string,
    public dish_price:number,
    public fk_cusines_id:number){

  }
}

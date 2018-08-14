export class Bill{
  constructor(
    public bill_amt:number,
    public user_id:string,
    public bill_id?:number,
    public bill_date?:Date
  ){}
}

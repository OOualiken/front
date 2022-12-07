import {Appointment} from "./Appointmenr";

export interface dayScaduleReponse {
  _id: string,
  date: Date,
  heur:string
  veterinaryId:string,
  status:boolean,
  appointments:Appointment

}

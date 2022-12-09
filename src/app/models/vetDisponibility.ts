import {User} from "./user";

export class VetDisponibility {

  private _date: Date
  private _bookingStatus: Boolean
  private _service: string
  private _veterinary: User
  private _client: User
  private _requestDate: Date
  private _pet: string
  private _id?: string

  constructor(date: Date, bookingStatus: Boolean, service: string, veterinary: User, client: User, requestDate: Date,
              pet: string, id?: string) {
    this._date = date;
    this._bookingStatus = bookingStatus;
    this._service = service;
    this._veterinary = veterinary;
    this._client = client;
    this._requestDate = requestDate;
    this._pet = pet;
    this._id = id
  }


  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get bookingStatus(): Boolean {
    return this._bookingStatus;
  }

  set bookingStatus(value: Boolean) {
    this._bookingStatus = value;
  }

  get service(): string {
    return this._service;
  }

  set service(value: string) {
    this._service = value;
  }

  get veterinary(): User {
    return this._veterinary;
  }

  set veterinary(value: User) {
    this._veterinary = value;
  }

  get client(): User {
    return this._client;
  }

  set client(value: User) {
    this._client = value;
  }

  get requestDate(): Date {
    return this._requestDate;
  }

  set requestDate(value: Date) {
    this._requestDate = value;
  }

  get pet(): string {
    return this._pet;
  }

  set pet(value: string) {
    this._pet = value;
  }


  get id(): string {
    return <string>this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}

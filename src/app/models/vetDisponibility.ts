
export class VetDisponibility {

  private _date: Date
  private _bookingStatus: Boolean
  private _service: string
  private _veterinary: string
  private _client: string
  private _requestDate: Date
  private _pet: string

  constructor(date: Date, bookingStatus: Boolean, service: string, veterinary: string, client: string, requestDate: Date, pet: string) {
    this._date = date;
    this._bookingStatus = bookingStatus;
    this._service = service;
    this._veterinary = veterinary;
    this._client = client;
    this._requestDate = requestDate;
    this._pet = pet;
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

  get veterinary(): string {
    return this._veterinary;
  }

  set veterinary(value: string) {
    this._veterinary = value;
  }

  get client(): string {
    return this._client;
  }

  set client(value: string) {
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
}


export class User {
  private _id: string
  private _role: string
  private _birthDate: Date
  private _email: string
  private _firstName: string
  private _lastName: string
  private _phoneNb: string
  private _password?: string
  private _speciality?: string
  private _street?: string
  private _postalCode?: string
  private _city?: string
  private _country?: string
  private _active?: boolean
  private _pets?: any[]
  private _customerId?: string

  constructor(_id: string,role: string,birthDate: Date, email: string, firstName: string, lastName: string,
              phoneNb: string, password: string, speciality: string | undefined,
              street: string | undefined, postalCode: string | undefined,
              city: string | undefined, country: string | undefined, rpps: number | undefined,
              active: boolean | undefined, pets: any[] | undefined, customerId: string | undefined) {
    this._id = _id;
    this._role = role;
    this._birthDate = birthDate;
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this._phoneNb = phoneNb;
    this._password = password;
    this._speciality = speciality;
    this._street = street;
    this._postalCode = postalCode;
    this._city = city;
    this._country = country;
    this._active = active
    this._pets = pets
    this._customerId = customerId
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }

  get street(): string {
    return <string>this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get postalCode(): string {
    return <string>this._postalCode;
  }

  set postalCode(value: string) {
    this._postalCode = value;
  }

  get city(): string {
    return <string>this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get country(): string {
    return <string>this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get phoneNb(): string {
    return this._phoneNb;
  }

  set phoneNb(value: string) {
    this._phoneNb = value;
  }

  get password(): string {
    return <string>this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get speciality(): string {
    return <string>this._speciality;
  }

  set speciality(value: string) {
    this._speciality = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }


  get active(): boolean {
    return <boolean>this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get healthRecords(): any[] {
    return <any[]>this._pets;
  }

  set healthRecords(value: any[]) {
    this._pets = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }


  get customerId(): string {
    return <string>this._customerId;
  }

  set customerId(value: string) {
    this._customerId = value;
  }
}

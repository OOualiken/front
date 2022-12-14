export class Pet {

  private _name: string
  private _type: string
  private _breed: string
  private _sex: string
  private _weight: number
  private _birthDate: Date
  private _vaccinationRecord: any[]
  private _medicalRecord: string[]
  private _id?: string


  constructor(name: string, type: string, breed: string, sex: string, weight: number, birthDate: Date, vaccinationRecord: any[],
              medicalRecord: string[], id?: string) {
    this._name = name;
    this._type = type;
    this._breed = breed;
    this._sex = sex;
    this._weight = weight;
    this._birthDate = birthDate
    this._vaccinationRecord = vaccinationRecord;
    this._medicalRecord = medicalRecord;
    this._id = id
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get breed(): string {
    return this._breed;
  }

  set breed(value: string) {
    this._breed = value;
  }

  get sex(): string {
    return this._sex;
  }

  set sex(value: string) {
    this._sex = value;
  }

  get weight(): number {
    return this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get vaccinationRecord(): any[] {
    return this._vaccinationRecord;
  }

  set vaccinationRecord(value: any[]) {
    this._vaccinationRecord = value;
  }

  get medicalRecord(): string[] {
    return this._medicalRecord;
  }

  set medicalRecord(value: string[]) {
    this._medicalRecord = value;
  }


  get id(): string {
    return <string>this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }
}

import {Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {VetdisponibilityService} from "../services/vetdisponibility-service/vetdisponibility.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../models/user";
import {VetDisponibility} from "../models/vetDisponibility";
import {Pet} from "../models/pet";

interface Horaire {
  heure: string;
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./schaduler.component.css']

})

export class DialogOverviewExampleDialog {
  durationInSeconds = 2;
  selected: Date | null | undefined;
  hours: Horaire = {heure: '8h00'}
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>, private vetdispoService : VetdisponibilityService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private _snackBar: MatSnackBar) {}

  horaire: Horaire[] = [
    {heure: '8h00'},
    {heure: '8h30'},
    {heure: '9h00'},
    {heure: '9h30'},
    {heure: '10h00'},
    {heure: '10h30'},
    {heure: '11h00'},
    {heure: '11h30'},
    {heure: '12h00'},
    {heure: '12h30'},
    {heure: '13h00'},
    {heure: '13h30'},
    {heure: '14h00'},
    {heure: '14h30'},
    {heure: '15h00'},
    {heure: '15h30'},
    {heure: '16h00'},
    {heure: '16h30'},
    {heure: '17h00'},
    {heure: '17h30'},
    {heure: '18h00'},
    {heure: '18h30'},
    {heure: '19h00'},

  ];

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  saveDispo(){
    console.log(this.selected)
    console.log(this.hours)

    let hoursSplit = this.hours.heure.split('h')
    let date = new Date(<number>this.selected?.getFullYear(), <number>this.selected?.getMonth(), this.selected?.getDate(),
      parseInt(hoursSplit[0]), parseInt(hoursSplit[1]), 0)

    this.vetdispoService.postVetDisponibility(date).subscribe(
      data => {
        window.location.reload();

        console.log(data)
      }, error => {
        console.log(error)
      }
    )
  }

}


@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [
    `
    .example-pizza-party {
      color: hotpink;
    }
  `,
  ],
})
export class PizzaPartyComponent {}

export interface DialogData {
  animal: string;
  name: string;
}
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-schaduler',
  templateUrl: './schaduler.component.html',
  styleUrls: ['./schaduler.component.css']

})
export class SchadulerComponent implements OnInit {
  selected: Date = new Date()
  dispoList : any
  selectedPet!: Pet

  dayLisList : any= []

  ngOnInit(): void {
  }

  animal: string;
  name: string;
  selectedValue: any;
  selectedCar: string;
  profile!: User

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor(public dialog: MatDialog, private route: ActivatedRoute, private vetdispoService : VetdisponibilityService) {
    this.route.data.subscribe(data => this.profile = data.profile);
    this.vetdispoService.getMyAppointment().subscribe(data => {
      this.dispoList = data
      console.log(this.dispoList)


    })
  }


  search(){

  }


  getDisponibilityByDate(date: Date){
    this.vetdispoService.getAllDisponibilityByDate(date).subscribe(data => {
      console.log(data)
    }, error => {
      console.log(error)
    })
  }

  deleteVetDisponibility(id: any){
    this.vetdispoService.deleteVetDisponibility(id).subscribe( value => {
      console.log(value)
      window.location.reload();
    },error => {
      console.log(error)
    })
  }

  async getvetDispo(): Promise<void> {
    const result = await this.vetdispoService.getVetDisponibility(this.profile.id, this.selected)
    result.subscribe(async value => {
     this.dayLisList =value.dispoList
      console.log(value.dispoList)
    },error => {
        console.log(error)
    }
    )
  }

    openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }



}


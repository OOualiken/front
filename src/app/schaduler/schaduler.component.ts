import {Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
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

    console.log(date)
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
  selected: Date | null;
  ngOnInit(): void {
  }
  animal: string;
  name: string;
  searchTerm: any;
  selectedValue: any;
  selectedCar: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  constructor(public dialog: MatDialog) {}
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
   // this.cartService.search.next(this.searchTerm);
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


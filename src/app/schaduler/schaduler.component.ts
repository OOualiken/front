import {Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material/datepicker";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";



interface Animal {
  name: string;
  sound: string;
}
interface Horaire {
  heur: string;
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./schaduler.component.css']

})

export class DialogOverviewExampleDialog {
  durationInSeconds = 2;

  selected: Date | null;
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private _snackBar: MatSnackBar) {}

  horaire: Horaire[] = [
    {heur: '8h'},
    {heur: '8.30h'},
    {heur: '9h'},
    {heur: '9.30h'},
    {heur: '10h'},
    {heur: '10h30'},
    {heur: '11H30h'},
    {heur: '12h'},
    {heur: '12h30'},
    {heur: '13h'},
    {heur: '13h30'},
    {heur: '14h'},
    {heur: '14h30'},
    {heur: '15h'},
    {heur: '15h30'},
    {heur: '16h'},
    {heur: '16h30'},
    {heur: '17h'},
    {heur: '17h30'},
    {heur: '18h'},
    {heur: '18h30'},
    {heur: '19h'},

  ];

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
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

  constructor(public dialog: MatDialog) {}

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


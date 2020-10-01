import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mark } from '../../classes/marker.class';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalMapsComponent } from './modal-maps/modal-maps.component';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  marks:Mark[] = [];

  

  constructor(private snackBar: MatSnackBar,
      public dialog: MatDialog) {

    if(localStorage.getItem('marks')){
      this.marks = JSON.parse(localStorage.getItem('marks'))
    };
    
  }

  ngOnInit(): void {
  }

  addMark(info){

    console.log(info.coords);

    let mark = new Mark(info.coords.lat, info.coords.lng);
    
    this.marks.push(mark);

    this.saveMarksLocalStorage();
    this.snackBar.open('Mark added', 'Close', {duration: 2000});
  }

  deleteMark(index:number){
    this.marks.splice(index,1)
    this.saveMarksLocalStorage();
    this.snackBar.open('Mark deleted', 'Close', {duration: 2000});
    
  }

  saveMarksLocalStorage(){
    localStorage.setItem('marks', JSON.stringify(this.marks))
  }

  editMark(mark:Mark){
    const dialogRef = this.dialog.open(ModalMapsComponent, {
      width: '250px',
      data: {title: mark.title, desc: mark.desc}
    });

    dialogRef.afterClosed().subscribe(result => {  
      

      if (!result){
        return;
      }
      mark.title = result.title;
      mark.desc = result.desc;
      this.saveMarksLocalStorage();
      this.snackBar.open('Mark edited', 'Close', {duration: 2000});
      
    });
  }



}

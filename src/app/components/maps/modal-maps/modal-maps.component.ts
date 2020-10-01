import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector: 'app-modal-maps',
  templateUrl: './modal-maps.component.html',
  styleUrls: ['./modal-maps.component.css']
})
export class ModalMapsComponent implements OnInit {

  form:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    public dialogRef: MatDialogRef<ModalMapsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.form = formBuilder.group({
        'title': data.title,
        'desc': data.desc
      })
      

    }

  ngOnInit(): void {
  }

  saveChanges(){
    this.dialogRef.close(this.form.value)
    
  }

  onNoClick():void{
    this.dialogRef.close();
  }

}

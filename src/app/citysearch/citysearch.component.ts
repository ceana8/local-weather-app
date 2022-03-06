import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.css']
})
export class CitysearchComponent implements OnInit {
@Output() searchEvent = new EventEmitter<string>();
  constructor() { }
search = new FormControl('',[Validators.minLength(3)])
  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(1000))
    .subscribe((searchValue: string)=>{
      if(!this.search.invalid){
        this.searchEvent.emit(searchValue)
      }

    })
  }

}

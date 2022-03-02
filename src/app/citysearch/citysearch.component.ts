import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.css']
})
export class CitysearchComponent implements OnInit {

  constructor() { }
search = new FormControl()
  ngOnInit(): void {
  }

}

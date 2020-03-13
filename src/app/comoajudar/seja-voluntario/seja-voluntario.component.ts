import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seja-voluntario',
  templateUrl: './seja-voluntario.component.html',
  styleUrls: ['./seja-voluntario.component.css']
})
export class SejaVoluntarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    // complex calculation
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lista = [
    {id:1,title:'Encuentra tutorial de Angular', link:'https://angular.io/tutorial'},
    {id:2,title:'wikipedia de angular cli', link:'https://github.com/angular/angular-cli/wiki'},
    {id:3,title:'angular blog', link:'https://blog.angular.io/'}
  
  ];
}

import { Component } from '@angular/core';
import { GitSearchService } from './git-search.service' 
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    this.GitSearchService.gitSearch('java').then((response)=>{
      alert('Total repositories found: '+response.total_count);
    },(error) => {
      alert('Error: '+ error.statusText);
    })
  }
  constructor(private GitSearchService: GitSearchService){

  }
  title = 'Otro titulo';
}

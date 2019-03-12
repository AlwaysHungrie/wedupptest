import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private http: HttpClient){}
  title = 'wedupptest';
  illegalArr = [ "the", "a", "of", "and", "in", "is", "to"]
  words = [];
  nfreq = 0;

  onKey(value: number) {
    this.nfreq = value;
  }

	getWords(){
		return this.http.get('/weduppapi?n='+this.nfreq);
	}

	getwords(){
		this.getWords().subscribe((res : any[])=>{
			this.words = res;
		});
	}  

	ngOnInit(){
	}

}

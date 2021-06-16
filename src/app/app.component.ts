import { Component } from '@angular/core';
import { ChatDataService } from './chat-data.service';
import { EmpserviceService } from './services/empservice.service';
import {Employee} from './models/empmodel'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'chatApp';

  Chatdata:any;
  userChatList:any;
  employees: Employee[]
  
  currentDate = new Date();
  time = this.currentDate.getHours() + ":" + this.addLeadingZeros(this.currentDate.getMinutes());
  

  constructor(private data: ChatDataService, private empservice : EmpserviceService) {
    this.Chatdata= data.getData();
    this.userChatList= data.userChat();
    console.log(this.Chatdata[0]);
    console.log(this.time);
    
  }
  ngOnInit() {
    this.getempdata()

  }

  getempdata(){
    return this.empservice.getEmployeData()
      .subscribe((res:Employee[]) => {
        console.log("below db");
        this.employees= res;
        console.log(this.employees[0]);
        
        
      });
    
  }
  addLeadingZeros(n) {
    if (n <= 9) {
      return "0" + n;
    }
    return n
  }
  showUser(){
    console.log('works click..');
    
  }
}

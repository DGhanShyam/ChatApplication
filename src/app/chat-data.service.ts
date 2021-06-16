import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatDataService {

  constructor() { }
  getData(){
    let arr=[
      {
        photo: 'photo',
        name: 'Trump D',
        chat: 'Done with the recruitment process..',
        mail: 'on@mail.com',
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gZAEX71qeKxlCHA5E3itBwHaEK%26pid%3DApi&f=1'
      },
      {
        photo: 'photo',
        name: 'Daniel',
        chat: 'Market mapping can you update us about the process ',
        mail: 'on@mail.com',
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7A_N_DAKftZXO7E0SThDXQHaEK%26pid%3DApi&f=1'
      },
      {
        photo: 'photo',
        name: 'Office Friend',
        chat: 'Coming to work today ?',
        mail: 'on@mail.com',
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.14ybs9H4SbO0JKhLFS6qGwHaLq%26pid%3DApi&f=1'
      },
      {
        photo: 'photo',
        name: 'Cartoon',
        chat: 'LCompleted the pending work and new pictures working on it now',
        mail: 'on@mail.com',
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.14ybs9H4SbO0JKhLFS6qGwHaLq%26pid%3DApi&f=1'
      },
      {
        photo: 'photo',
        name: 'Repair Auto',
        chat: 'total repair cost $87 ',
        mail: 'on@mail.com',
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Xmx2S3wrBL50rCl7sO7KAAHaE0%26pid%3DApi&f=1'
      },
    ];
      return arr;
  }

  userChat() {
    let data= [
      {
        chat:'hii',
        id:1
      },
      {
        chat:'hii',
        id:2
      },
      {
        chat:'how u doing work all done..',
        id:1
      },
      {
        chat:'almost completed yours ?',
        id:2
      },
      {
        chat:'yeah done mate',
        id:1
      },
      {
        chat:"so how's your health",
        id:2
      },
      {
        chat:'all good mate thx for asking',
        id:1
      },
      {
        chat:'talk to you soon..',
        id:2
      },
      {
        chat:'bye take care',
        id:2
      },
      {
        chat:'say hii to your mom',
        id:2
      },
      {
        chat:'say hii to your mom',
        id:1
      },
      {
        chat:'say hii to your mom',
        id:1
      },
      {
        chat:'say hii to your mom',
        id:1
      },
      {
        chat:'say hii to your mom',
        id:1
      },

    ]
    return data;
  }
}

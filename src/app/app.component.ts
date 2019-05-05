import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KoreanFish';
  wantAsk: string;
  messages: Message[] = [];
  keyWordList: Array<string> = ['自經區', '迪士尼', '愛情摩天輪', '九二共識', '兩岸統一', '總統'];

  ngOnInit() {
  }

  addMessage(): void {
    if (this.messages.length >= 6) {
      this.messages.pop();
      this.messages.pop();
    }
    this.messages.push({
      sender: 'Me',
      content: this.wantAsk
    });
    this.kFishResponse();
    this.wantAsk = '';
  }

  kFishResponse(): void {

    this.messages.push({
      sender: 'Kfish',
      content: this.responseDeal(this.wantAsk)
    });
  }

  responseDeal(askContent: string): string {
    let inKeyWord = false;
    let responseKeyWord = '';
    this.keyWordList.forEach(element => {
      if (askContent.includes(element)) {
        responseKeyWord = element;
        inKeyWord = true;
      }
    });
    if (inKeyWord) {
      return `總目標是高雄要發大財，這個${responseKeyWord}只是其中一部分，好不好？謝謝。`;
    }
    return '你說的不是重點，重點是高雄要發大財';

  }
}


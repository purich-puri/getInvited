import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  groups: Observable<any>;

  constructor(
    private authService: AuthService,
    private chatService: ChatService,
    private router: Router
  ) { }

  ngOnInit() {
    this.groups = this.chatService.getGroups(); 
  }



}

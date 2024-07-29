import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ToastModule, 
    ButtonModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-primeng-auth';
}

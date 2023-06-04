import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

declare const grecaptcha: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  email: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadRecaptchaScript();
  }

  loadRecaptchaScript(): void {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6Ld-IBsmAAAAAJuvC4nyQYesf8484kE9nrDmyUgG';
    document.body.appendChild(script);
  }

  handleFormSubmit(event: Event): void {
    event.preventDefault();

    if (this.password !== '0000') {
      alert('Wrong password.');
      return;
    } else {
      grecaptcha.enterprise.ready(() => {
        grecaptcha.enterprise.execute('6Ld-IBsmAAAAAJuvC4nyQYesf8484kE9nrDmyUgG', { action: 'login' }).then((token) => {
          const templateParams = {
            username: this.username,
            email: this.email,
            password: this.password,
            recaptchaToken: token // Include the captcha token in the template params
          };
          this.router.navigate(['/home']);
          // Send the email using EmailJS
          emailjs.send('service_4p0e3wq', 'template_6pfrbr9', templateParams,'lKDAsysENoLDgOq6v')
            .then((response: EmailJSResponseStatus) => {
              console.log('Email sent successfully', response);
              this.router.navigate(['/home']);
            })
            .catch((error) => {
              console.error('Failed to send email:', error);
            });
        });
      });

    }

    
  }

  login(): void {
    console.log('Login form submitted');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}

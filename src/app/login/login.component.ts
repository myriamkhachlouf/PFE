import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

    username: string;
    password: string;
    email: string; 
  
    login() {
      // Logique de connexion
      // Par exemple :
      console.log('Formulaire de connexion soumis');
      console.log('Nom d\'utilisateur :', this.username);
      console.log('Mot de passe :', this.password);
      this.router.navigate(['/typography']);
      // Autres actions à effectuer lors de la soumission du formulaire de connexion
    }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup = new FormGroup({
    user: new FormControl('mafer', [Validators.required]),
    password: new FormControl('1234', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.formulario.valid){
      const user: User = {
        user: this.formulario.value.user,
        password: this.formulario.value.password
      }
      this.authService.startSesion(user);
      this.router.navigate(['inicio'])
    }
  }

}

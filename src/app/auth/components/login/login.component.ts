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
    user: new FormControl('Johanna99', [Validators.required]),
    password: new FormControl('CLy2q8Jh5l5CXMQ', [Validators.required]),
    admin: new FormControl(true)
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    if(this.formulario){
      const user: User = {
        user: this.formulario.value.user,
        password: this.formulario.value.password,
        admin: this.formulario.value.admin,
        id: '1',
      }
      this.authService.startSesion(user);
      this.router.navigate(['inicio'])
    }
  }

}

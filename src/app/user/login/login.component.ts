import { Component, OnInit } from '@angular/core';
import { UserLogin } from './../../models/identity/UserLogin';
import { AccountService } from './../../services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = {} as UserLogin;
  title = 'angular-phrase-example';

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toaster: ToastrService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {}

  public login(): void {
    this.accountService.login(this.model).subscribe(
      () => {
        this.router.navigateByUrl('');
      },
      (error: any) => {
        if (error.status == 401)
          this.toaster.error('usuário ou senha inválido');
        else console.error(error);
      }
    );
  }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { UserUpdate } from 'src/app/models/identity/UserUpdate';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user = {} as UserUpdate;

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  public setFormValue(user: UserUpdate): void {
    this.user = user;
  //   if (this.usuario.imagemURL)
  //     this.imagemURL = environment.apiURL + `resources/perfil/${this.usuario.imagemURL}`;
  //   else
  //     this.imagemURL = './assets/img/perfil.png';

  }

}

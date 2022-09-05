import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../data/service/authentication.service';
import { ToastService } from '../../data/service/toast.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn = false;
  avatarInitial = '';
  username = '';
  authStatus!: Subscription;


  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.authStatus = this.auth.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;

      if (status) {
        this.username = this.auth.getPersistedUser().username;
        this.avatarInitial = this.username[0] || 'Q';
      }
    });
  }

  ngOnDestroy(): void {
    this.authStatus.unsubscribe();
  }

  logout() {
    this.auth.logout();

    this.toast.showSuccess('Successfully logged out.');

    this.router.navigateByUrl('/');
  }
}
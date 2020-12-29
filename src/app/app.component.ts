import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    user: SocialUser;
    loggedIn: boolean;

    constructor(private authService: SocialAuthService) { }
    
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            console.log(user)
            this.user = user;
            this.loggedIn = (user != null);
        });
    }

    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
        this.authService.signOut();
    }
  
}

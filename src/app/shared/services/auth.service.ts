import { Injectable } from '@angular/core';
// import * as Msal from 'msal';

@Injectable()
export class AuthService {

  access_token: string;

  tenantConfig = {
    tenant: 'bushtree.onmicrosoft.com',
    clientID: '3c320127-4b66-4175-afb4-1f01a045eed9',
    signUpSignInPolicy: 'B2C_1_bushtree-test',
    b2cScopes: ['openid']
  };

  // Configure the authority for Azure AD B2C
  authority = `https://login.microsoftonline.com/tfp/${this.tenantConfig.tenant}/${this.tenantConfig.signUpSignInPolicy}`;

  constructor() {
  }

  /*
  * B2C SignIn SignUp Policy Configuration
  */
  clientApplication = new Msal.UserAgentApplication(
    this.tenantConfig.clientID, this.authority,
    function (errorDesc: any, token: any, error: any, tokenType: any) {
      // Called after loginRedirect or acquireTokenPopup
    }
  );

  public signIn(): void {
    const _this = this;
    _this.clientApplication.loginPopup(_this.tenantConfig.b2cScopes).then(function (idToken: any) {
      _this.clientApplication.acquireTokenSilent(_this.tenantConfig.b2cScopes).then(
        function (accessToken: any) {
          _this.access_token = accessToken;
        }, function (error: any) {
          _this.clientApplication.acquireTokenPopup(_this.tenantConfig.b2cScopes).then(
            function (accessToken: any) {
              _this.access_token = accessToken;
            }, function (error: any) {
              // bootbox.alert("Error acquiring the popup:\n" + error);
              console.error('Error acquiring the popup:', error);
            });
        });
    }, function (error: any) {
      // bootbox.alert("Error during login:\n" + error);
      console.error('Error during login:\n', error);
    });
  }

  signOut(): void {
    this.clientApplication.logout();
  }

  isOnline(): boolean {
    return this.clientApplication.getUser() != null;
  }
}

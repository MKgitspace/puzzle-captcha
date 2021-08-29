import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  captcha_verification: boolean = false;
  
  constructor(
  ) {}
  ngOnInit() {}

  show_captcha() {
    this.captcha_verification = true;
  }

  // Recevied captcha authantication event function verifiy: success/failed
  received_captcha_event(verify: String) {
    console.log(verify);
    this.captcha_verification = (verify == "success") ? true : false;
  }
}
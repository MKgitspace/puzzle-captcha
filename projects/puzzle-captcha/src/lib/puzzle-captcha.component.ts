import { Component, EventEmitter, OnInit, Output } from '@angular/core';
declare var $: any;
declare var sliderCaptcha: any;
@Component({
  selector: 'mk-puzzle-captcha',
  templateUrl: './puzzle-captcha.component.html',
  styleUrls: ['./puzzle-captcha.component.css']
})
export class PuzzleCaptchaComponent implements OnInit {

  @Output() public verifiyhandler = new EventEmitter<String>();
  title = 'puzzle-slider-captcha';
  captcha_Subscription: String = "";

  constructor() { }
  ngOnInit() { this.SliderCaptchaFun(); }
  ngDoCheck(): void {

    this.captcha_Subscription = $("#captcha-value").attr("s_captcha");
    if (this.captcha_Subscription == "success") {
      this.verifiyhandler.emit(this.captcha_Subscription);
      this.captcha_Subscription = "0";
      $(".captcha-value").attr("s_captcha", "0");
      this.SliderCaptchaFun();

    } else if (this.captcha_Subscription == "failed") {
      this.verifiyhandler.emit(this.captcha_Subscription);
      this.captcha_Subscription = "0";
      $(".captcha-value").attr("s_captcha", "0");

    } else {
      // this.verifiyhandler.emit(this.captcha_Subscription);
      // this.captcha_Subscription = "0";
      // $(".captcha-value").attr("s_captcha", "0");
    }
  }

  //CAPTHA GENERATE METHOD----------------
  SliderCaptchaFun() {
    $('#captcha').html('')
    sliderCaptcha({
      id: 'captcha',
      onSuccess: function () { //SUCCESS CALLBACK
        $(".captcha-value").attr("s_captcha", "success")
      },
      onFail: function () { //FAILED CALLBACK
        // alertify.error("Failed");
        $(".captcha-value").attr("s_captcha", "failed");
      },

      setSrc: function () {
        return 'http://imgs.blazor.zone/images/Pic' + Math.round(Math.random() * 136) + '.jpg';
      },
      onRefresh: function () { //RELOD CALLBACK
        console.log("refresh");
      },

      // or use local images instead
      // localImages: function () {
      //   return 'images/Pic' + Math.round(Math.random() * 4) + '.jpg';
      // }
    });

  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    styleUrls    :['./home.component.scss']
})
export class LandingHomeComponent implements OnInit {

    list = ['stories', 'experiences', 'projects']

    /**
     * Constructor
     */
    constructor()
    {
    }

    ngOnInit() {
        const rocket = document.getElementById("rocket");
        const phrase = document.getElementById("phrase");

        rocket.addEventListener("click", function() {
            rocket.classList.add("clicked");
            phrase.style.opacity = "0";
            rocket.style.top = "-1000px";
            rocket.style.opacity = "0";

            setTimeout(function() {
            //   window.location.href = "https://www.example.com";
            }, 3000);
          });
    }
}

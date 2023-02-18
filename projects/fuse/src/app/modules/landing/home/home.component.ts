import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    styleUrls    :['./home.component.scss']
})
export class LandingHomeComponent implements OnInit {

    list = ['stories', 'experiences', 'projects']
    signUpLink = 'auth/sign-up';

    /**
     * Constructor
     */
    constructor(public router: Router, private route: ActivatedRoute)
    {
    }

    ngOnInit() {
        this.route.fragment.subscribe(f => {
            const element = document.querySelector("#" + f)
            if (element) element.scrollIntoView({behavior: 'smooth'})
        })
    }

    learnMoreClick(){
        const element = document.querySelector("#learnMore")
        if (element) element.scrollIntoView({behavior: 'smooth'})
    }

    public rocketAnimation(router: Router, signUpLink){
        const rocket = document.getElementById("rocket");
        const phrase = document.getElementById("phrase");
        const overlay = document.getElementById("overlay");

        rocket.classList.add("clicked");
        phrase.style.opacity = "0";
        rocket.style.top = "-1000px";
        rocket.style.opacity = "0";
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";

        setTimeout(function() {
           router.navigate([signUpLink]);
        }, 3000);
    }
}

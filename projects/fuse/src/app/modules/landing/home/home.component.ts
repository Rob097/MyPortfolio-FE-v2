import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import _ from 'lodash';
import { filter, Subject, takeUntil } from 'rxjs';
@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    styleUrls    :['./home.component.scss']
})
export class LandingHomeComponent implements OnInit, OnDestroy {

    destroyed$ = new Subject<void>();

    heroWords: string[] = [];
    signUpLink = 'auth/sign-up';

    /**
     * Constructor
     */
    constructor(
        public router: Router,
        private route: ActivatedRoute,
        private translocoService: TranslocoService
    ){
    }

    ngOnInit() {
        this.route.fragment.subscribe(f => {
            const element = document.querySelector("#" + f)
            if (element) element.scrollIntoView({behavior: 'smooth'})
        });

        this.translocoService.langChanges$.pipe(takeUntil(this.destroyed$)).subscribe((res) => {
            // If the file is empty that means no data found in cache and needs to wait for the data to be loaded successfully
            if (_.isEmpty(this.translocoService.getTranslation(res))) {
                this.translocoService.events$
                    .pipe(
                        filter((e) => e.type === 'translationLoadSuccess'),
                        takeUntil(this.destroyed$),
                    )
                    .subscribe((obj) => {
                        this.heroWords = this.translateHeroWords();
                    });
            } else {
                this.heroWords = this.translateHeroWords();
            }
        });
    }

    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    private translateHeroWords(){
        return [
            this.translocoService.translate('home-page.stories'),
            this.translocoService.translate('home-page.experiences'),
            this.translocoService.translate('home-page.projects'),
        ]
    }

    public learnMoreClick(){
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

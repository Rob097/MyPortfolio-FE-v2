import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from 'libs/auth-lib/src/lib/user.service';
import { Criteria, Operation, View } from 'libs/common-lib/src/lib/models/criteria.model';
import { DiaryQ } from 'libs/common-lib/src/lib/models/diary.model';
import { User } from 'libs/common-lib/src/lib/models/user.model';
import { Subject, takeUntil } from 'rxjs';
import { DiaryService } from '../../../services/diary.service';
import { StoryService } from '../../../services/story.service';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit, OnDestroy
{

    user: User;
    secondUser: User;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _userService: UserService,
        private _storyService: StoryService,
        private _diaryService: DiaryService,
    ){}

    ngOnInit(): void {
        // Subscribe to the user service
        this._userService.user$
            .pipe((takeUntil(this._unsubscribeAll)))
            .subscribe((user: User) => {
                this.user = user;
            });
    }

    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    getUser(){
        this._userService.get(25).subscribe(el => {
            this.secondUser = el.content;


            this._diaryService.getByCriteria(
                new DiaryQ(
                    [
                        new Criteria(DiaryQ.id,Operation.equals,1),
                        new Criteria(DiaryQ.entryDateTime,Operation.lessThan,'23/12/2022 15:43:22')
                    ],
                    View.verbose,
                    0,
                    10,
                    undefined
                )
            ).subscribe((el) => {
                if(el && el.content && el.content.length > 0) {
                    this.secondUser.diaries = el.content;

                    this.secondUser.diaries.forEach(diary => {
                        diary.stories.forEach(story => {
                            this._storyService.getById(story.id).subscribe(detail =>{
                                const i = this.secondUser.diaries.find(d => d.id === diary.id).stories.findIndex(s => s.id === story.id);
                                this.secondUser.diaries.find(d => d.id === diary.id).stories[i] = detail.content;
                            })
                        });
                    });
                }

            });



            /*this._storyService.getByCriteria(
                new StoryQ(
                    [
                        new Criteria(StoryQ.title,Operation.equals,'Titolo della storia'),
                        new Criteria(StoryQ.id,Operation.equals,1),
                        new Criteria(StoryQ.diaryId,Operation.equals,1)
                    ],
                    View.verbose,
                    0,
                    10,
                    new Sort(StoryQ.description)
                )
            ).subscribe((el) => {
                this.secondUser.diaries = [];
                this.secondUser.diaries.push(new Diary());
                this.secondUser.diaries[0].stories = [];
                this.secondUser.diaries[0].stories.push(el.content[0]);
            });*/
        });
    }

}

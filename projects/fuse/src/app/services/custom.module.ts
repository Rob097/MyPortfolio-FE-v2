import { NgModule } from "@angular/core";
import { DiaryService } from "./diary.service";
import { EducationService } from "./education.service";
import { ExperienceService } from "./experience.service";
import { SkillService } from "./skill.service";
import { StoryService } from "./story.service";
import { UserService } from "./user.service";

@NgModule({
    providers: [
        UserService,
        StoryService,
        DiaryService,
        SkillService,
        EducationService,
        ExperienceService
    ]
})
export class CustomModule {
}

import { Filters } from './criteria.model';
import { Diary } from './diary.model';
import { Education } from './education.model';
import { Experience } from './experience.model';
import { Skill } from './skill.model';

export class Story {
    id: number;
    entryDateTime: Date;
    title: string;
    description: string;
    isPrimaryStory: boolean;
    diary: Diary;
    educations?: Education[];
    experiences?: Experience[];
    skills?: Skill[];
}

export class StoryQ extends Filters {
    public static id = 'id';
    public static entryDateTime = 'entryDateTime';
    public static title = 'title';
    public static description = 'description';
    public static isPrimaryStory = 'isPrimaryStory';
    public static diaryId = 'diary.id';
}

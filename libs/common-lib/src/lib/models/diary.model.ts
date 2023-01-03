import { Filters } from './criteria.model';
import { Story } from './story.model';
import { User } from './user.model';

export class Diary {
    id: number;
    entryDateTime: Date;
    user?: User;
    stories?: Story[];
}

export class DiaryQ extends Filters {
    public static id = 'id';
    public static entryDateTime = 'entryDateTime';
    public static userId = 'user.id';
}

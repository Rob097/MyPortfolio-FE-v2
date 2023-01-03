import { Filters } from './criteria.model';
import { Skill } from './skill.model';
import { User } from './user.model';

export class Experience {
    id: number;
    user: User;
    title: string;
    employmentType: string;
    companyName: string;
    location?: string;
    startDate: Date;
    description?: string;
    skills?: Skill[];
}

export class ExperienceQ extends Filters {
    public static id = 'id';
    public static userId = 'user.id';
    public static title = 'title';
    public static employmentType = 'employmentType';
    public static companyName = 'companyName';
    public static location = 'location';
    public static startDate = 'startDate';
    public static description = 'description';
}

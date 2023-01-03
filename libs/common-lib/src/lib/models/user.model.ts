import { Filters } from './criteria.model';
import { Diary } from './diary.model';
import { Education } from './education.model';
import { Experience } from './experience.model';
import { Skill } from './skill.model';

export class User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    age?: number;
    sex?: string;
    nationality?: string;
    nation?: string;
    province?: string;
    city?: string;
    cap?: string;
    address?: string;
    skills?: Skill[];
    educations?: Education[];
    experiences?: Experience[];
    diaries?: Diary[];
    avatar!: string;
    status?: string;
}

export class UserQ extends Filters {
    public static id = 'id';
    public static email = 'email';
    public static firstName = 'firstName';
    public static lastName = 'lastName';
    public static age = 'age';
    public static sex = 'sex';
    public static nationality = 'nationality';
    public static nation = 'nation';
    public static province = 'province';
    public static city = 'city';
    public static cap = 'cap';
    public static address = 'address';
}

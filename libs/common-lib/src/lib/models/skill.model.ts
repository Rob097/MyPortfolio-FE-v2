import { Filters } from './criteria.model';

export class Skill {
    id: number;
    name: string;
}

export class SkillQ extends Filters {
    public static id = 'id';
    public static skillName = 'name';
}

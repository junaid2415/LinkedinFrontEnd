import {EduModel} from './eduModel';
import {ExpModel} from './expModel';
import {SkillsModel} from './skillsModel';
import {Deserializable} from './deserializable';

export  class UserModel implements Deserializable{
    name!: string;
    password!: string;
    firstName!: string;
    lastName!: string;
    tagline!: string;
    backgroundUrl!: string;
    url!: string;
    webExperiences!: ExpModel[];
    webEducations!: EduModel[];
    webSkills!: SkillsModel[];
    deserialize(input: any): this{
      Object.assign(this, input);
      this.webExperiences = input.webExperiences.map( exp => new ExpModel().deserialize(exp));
      this.webEducations = input.webEducations.map( edu=> new EduModel().deserialize(edu));
      this.webSkills = input.webSkills.map( skills => new SkillsModel().deserialize(skills));
      return this;
    }
}

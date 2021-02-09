import {EduModel} from './eduModel';
import {ExpModel} from './expModel';
import {SkillsModel} from './skillsModel';
import {Deserializable} from './deserializable';

export  class UserModel implements Deserializable{
  userName!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  profilePic!: string;

    educations!: EduModel[];
    skills!: SkillsModel[];
    workExperiences!: ExpModel[];
    deserialize(input: any): this{
      Object.assign(this, input);
      this.workExperiences = input.workExperiences.map( exp => new ExpModel().deserialize(exp));
      this.educations = input.educations.map( edu=> new EduModel().deserialize(edu));
      this.skills = input.skills.map( skills => new SkillsModel().deserialize(skills));
      return this;
    }
}

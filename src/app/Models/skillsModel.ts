import {Deserializable} from './deserializable';

export class SkillsModel implements Deserializable{
  skillName!: string;
  deserialize(input: any): any{
  Object.assign(this, input);
  return  this;


  };
}

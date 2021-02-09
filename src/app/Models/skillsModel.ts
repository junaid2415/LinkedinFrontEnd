import {Deserializable} from './deserializable';

export class SkillsModel implements Deserializable{
  name!: string;
  deserialize(input: any): any{
  Object.assign(this, input);
  return  this;


  };
}

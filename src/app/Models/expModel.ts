import {Deserializable} from './deserializable';

export class  ExpModel implements Deserializable{

  company!: string;
  jobTitle!: string;
  deserialize(input: any): any {
    Object.assign(this, input);
    return  this;

  }
}

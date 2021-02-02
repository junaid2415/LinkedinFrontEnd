import {Deserializable} from './deserializable';

export class  ExpModel implements Deserializable{
  title!: string;
  headline!: string;
  startDate!: string;
  endDate!: string;
  employmentType!: string;
  deserialize(input: any): any {
    Object.assign(this, input);
    return  this;

  }
}

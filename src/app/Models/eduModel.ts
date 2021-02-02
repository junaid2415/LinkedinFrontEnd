import {Deserializable} from './deserializable';

export  class EduModel implements Deserializable{
  schoolName!: string;
  degree!: string;
  fieldOfStudy!: string;
  startDate!: string;
  endDate!: string;
  grade!: number;
  deserialize(input: any): this {
    Object.assign(this, input);
    return  this;

  }
}

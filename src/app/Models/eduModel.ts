import {Deserializable} from './deserializable';

export  class EduModel implements Deserializable{
  school!: string;
  degree!: string;
  fos!: string;
  deserialize(input: any): this {
    Object.assign(this, input);
    return  this;

  }
}

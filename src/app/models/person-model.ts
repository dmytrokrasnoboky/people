import { v4 } from 'uuid';

export class PersonModel {
  public firstName: string;
  public lastName: string;
  public age: string;
  public workTitle: string;
  public id?: string;

  constructor(dataIn: any) {
    // TODO: Implement a dataIn object that gets passed in as a JavaScript Object +
    this.firstName = dataIn.firstName;
    this.lastName = dataIn.lastName;
    this.age = dataIn.age;
    this.workTitle = dataIn.workTitle;
    this.id = v4();
  }
}

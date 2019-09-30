export class Project {

  constructor(_id = '', name = '', deadline = new Date(), client = '', description = '', skills = '') {
    this._id = _id;
    this.name = name;
    this.deadline = deadline;
    this.client = client;
    this.description = description;
    this.skills = skills;
  }

  _id: string;
  name: string;
  deadline: Date;
  client: string;
  description: string;
  skills: string;

}

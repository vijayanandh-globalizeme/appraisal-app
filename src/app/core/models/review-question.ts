export class QuestionModel {
  id: number;
  name: string;
  label: string;
  type: string;
  options: any;
  isRequired: boolean;

  constructor(data) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.label = data.label || "";
    this.type = data.type || "";
    this.isRequired = data.isRequired || 0;
    this.options = JSON.parse(data.options) || [];
  }
}

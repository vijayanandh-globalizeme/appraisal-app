export class QuestionModel {
  id: number;
  name: string;
  label: string;
  type: string;
  options: any;
  isRequired: boolean;
  categoryId: number;

  constructor(data) {
    this.id = data.id || "";
    this.name = data.name || "";
    this.label = data.label || "";
    this.type = data.type || "";
    this.isRequired = data.isRequired || 0;
    this.categoryId = data.category_id || 1;
    this.options = JSON.parse(data.options) || [];
  }
}

import { DbCollection} from '../core/Interface/DbCollection';

export class Student implements DbCollection {
  id: number;
  name: string;
  category: Category;
  documents: any;
  dob: Date;
  fathername: string;
  mothername: string;
  lastclassscore: number;
}

export enum Category {
  Domestic= 'Domestic',
  International= 'International'
}

export class Document {
  name: string;
  ismandatory: boolean;
}

export class DocumentList implements DbCollection {
  id: number;
  category: Category;
  documents: Document[];
}



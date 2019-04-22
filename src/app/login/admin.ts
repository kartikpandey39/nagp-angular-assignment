import { DbCollection} from '../core/Interface/DbCollection';

export class Admin implements DbCollection {
  id: number;
  userName: string;
  password?: string;
  displayName: string;
}

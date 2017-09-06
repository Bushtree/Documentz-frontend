import { Attachment } from '../../shared/models/attachment';
import { User } from '../../shared/models/user';

export interface StoredItem {
  id: string;
  name: string;
  tags?: string[];
  creationTime: Date;
  lastModified: Date;
  owner: User;
  sharedWith?: User[];
  attachments?: Attachment[];
  description?: string;
}

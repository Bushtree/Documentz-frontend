import { Attachment } from '../../shared/models/attachment';
import { User } from '../../shared/models/user';
import { Tag } from '../../shared/models/tag';

export interface StoredItem {
  id: string;
  name: string;
  tags?: Tag[];
  creationTime: Date;
  lastModified: Date;
  owner: User;
  sharedWith?: User[];
  attachments?: Attachment[];
  description?: string;
}

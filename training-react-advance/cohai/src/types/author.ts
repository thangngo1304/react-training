import { AUTHOR_STATUS } from '@/constants';

export type TAuthor = {
  _id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
  job: string;
  employed: string;
  status?: AUTHOR_STATUS;
};

export type TFiledAuthor = {
  fields: {
    _id: number;
    name: string;
    email: string;
    avatar?: string;
    role: string;
    job: string;
    status?: AUTHOR_STATUS;
    employed: string;
  };
};

export interface TRecordAuthor {
  id: string;
  createdTime: string;
  fields: TAuthor;
}

export type TAuthorRequest = {
  records: TRecordAuthor;
};

export type AuthorFormData = {
  _id: number;
  name: string;
  avatar: string;
  email: string;
  role: string;
  job: string;
  employed: string;
};

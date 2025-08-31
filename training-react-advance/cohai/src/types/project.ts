import { PROJECT_STATUS } from '@/constants';

export type TProject = {
  _id: string;
  projectName: string;
  avatar: string;
  budget: number;
  status: PROJECT_STATUS;
  completion: number;
  image: string;
  description: string;
};

export type TFiledProject = {
  fields: {
    _id: string;
    projectName: string;
    avatar: string;
    budget: number;
    status: PROJECT_STATUS;
    completion: number;
    description: string;
    image: string;
  };
};

export interface TRecordProject {
  id: string;
  createdTime: string;
  fields: TProject;
}

export type TProjectRequest = {
  records: TRecordProject;
};

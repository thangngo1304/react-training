import {
  TAuthor,
  TDataSource,
  TProject,
  TRecordAuthor,
  TRecordProject,
} from '../types';

export const COLUMNS_AUTHOR = (
  onRenderHead: (title: string, key: string) => void,
  onRenderBody: ({ _id, name, avatar, email }: TDataSource) => void,
  onRenderFunction: ({ role, job }: TAuthor) => void,
  onRenderStatus: (status: TDataSource) => void,
  onRenderEmployed: (employed: TAuthor) => void,
  onRenderActionIcon: (data: TRecordAuthor) => void,
) => [
  {
    title: 'AUTHOR',
    key: 'author',
    renderHead: onRenderHead,
    renderBody: onRenderBody,
  },
  {
    title: 'FUNCTION',
    key: 'function',
    renderHead: onRenderHead,
    renderBody: onRenderFunction,
  },
  {
    title: 'STATUS',
    key: 'status',
    renderHead: onRenderHead,
    renderBody: onRenderStatus,
  },
  {
    title: 'EMPLOYED',
    key: 'employed',
    renderHead: onRenderHead,
    renderBody: onRenderEmployed,
  },
  {
    title: '',
    key: 'action',
    renderBody: onRenderActionIcon,
    renderHead: onRenderHead,
  },
];

export const COLUMNS_PROJECT = (
  onRenderHead: (title: string, key: string) => void,
  onRenderBody: ({ id, avatar, projectName }: TDataSource) => void,
  onRenderBudget: (budget: TProject) => void,
  onRenderStatus: (status: TDataSource) => void,
  onRenderCompletion: (completion: TProject) => void,
  onRenderActionIcon: (data: TRecordProject) => void,
) => [
  {
    title: 'COMPANIES',
    key: 'companies',
    renderHead: onRenderHead,
    renderBody: onRenderBody,
  },
  {
    title: 'BUDGET',
    key: 'budget',
    renderHead: onRenderHead,
    renderBody: onRenderBudget,
  },
  {
    title: 'STATUS',
    key: 'status',
    renderHead: onRenderHead,
    renderBody: onRenderStatus,
  },
  {
    title: 'COMPLETION',
    key: 'completion',
    renderHead: onRenderHead,
    renderBody: onRenderCompletion,
  },
  {
    title: '',
    key: 'action',
    renderBody: onRenderActionIcon,
    renderHead: onRenderHead,
  },
];

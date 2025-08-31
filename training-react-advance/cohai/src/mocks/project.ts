import { AxiosRequestHeaders } from 'axios';

// Constants
import { PROJECT_STATUS } from '@/constants';

// Types
import { TRecordProject } from '@/types';

export const PROJECT: TRecordProject[] = [
  {
    id: 'rec393ALcB4az1FUZ',
    createdTime: '2024-08-11T17:08:32.000Z',
    fields: {
      completion: 12,
      projectName: 'Project ',
      image: 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg',
      avatar:
        'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg',
      _id: '7',
      status: PROJECT_STATUS.WORKING,
      budget: 123213,
      description: 'asdasd',
    },
  },
];

export const PROJECT_DATA_MOCK: TRecordProject = {
  id: 'rec393ALcB4az1FUZ',
  createdTime: '2024-08-11T17:08:32.000Z',
  fields: {
    completion: 12,
    projectName: 'Project ',
    image: 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg',
    avatar: 'https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/enhancer/3.jpg',
    _id: '7',
    status: PROJECT_STATUS.WORKING,
    budget: 123213,
    description: 'asdasd',
  },
};

export const MOCK_ADD_PROJECT_PAYLOAD = {
  records: [
    {
      fields: {
        projectName: 'Chakra Soft UI Version',
        avatar: 'https://nhatnghe.net/uploads/news/ms.jpg',
        budget: 14000,
        status: 'Working',
        completion: 60,
        description:
          'As Uber works through a huge amount of internal management turmoil.',
      },
    },
  ],
};

export const MOCK_UPDATE_PROJECT_PAYLOAD = {
  name: 'Update name',
  productId: PROJECT[0].id,
};

export const MOCK_PROJECTS_SUCCESS_RES = {
  data: { records: PROJECT },
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {
    headers: {} as AxiosRequestHeaders,
  },
};

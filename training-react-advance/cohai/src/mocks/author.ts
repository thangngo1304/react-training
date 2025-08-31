import { AxiosRequestHeaders, AxiosResponse } from 'axios';

// Types
import { TRecordAuthor } from '@/types';

export const AUTHORS: TRecordAuthor[] = [
  {
    id: 'recHDaE4CFAyrZJHd',
    createdTime: '2024-08-13T03:06:55.000Z',
    fields: {
      job: 'asd',
      employed: '2024-08-01',
      avatar:
        'https://tiki.vn/blog/wp-content/uploads/2023/02/o0XKdJdOcSuXoo3NbsjzNdn00-7PcHzNpAuQ85LIrsC2qwi4oEykPVZGDPskjmOQvd85etOVIPb4f0rprNu_dGGbslg_L4kUHgra7v...',
      name: 'Thang',
      email: 'asd@gmail.com',
      _id: 38,
      role: 'asd',
    },
  },
  {
    id: 'recGNv1CktJkp7cbU',
    createdTime: '2024-08-12T10:37:40.000Z',
    fields: {
      job: 'sad',
      employed: '2024-01-08',
      avatar:
        'https://tiki.vn/blog/wp-content/uploads/2023/02/o0XKdJdOcSuXoo3NbsjzNdn00-7PcHzNpAuQ85LIrsC2qwi4oEykPVZGDPskjmOQvd85etOVIPb4f0rprNu_dGGbslg_L4kUHgra7v...',
      name: 'asdasd',
      email: 'asd@gmail.com',
      _id: 37,
      role: 'asd',
    },
  },
];

export const MOCK_UPDATE_AUTHOR_PAYLOAD = {
  name: 'Update name',
  productId: AUTHORS[0].id,
};

export const MOCK_ADD_AUTHOR_PAYLOAD = {
  records: [
    {
      fields: {
        name: 'asdasd',
        email: 'asd@gmail.com',
        avatar:
          'https://tiki.vn/blog/wp-content/uploads/2023/02/o0XKdJdOcSuXoo3NbsjzNdn00-7PcHzNpAuQ85LIrsC2qwi4oEykPVZGDPskjmOQvd85etOVIPb4f0rprNu_dGGbslg_L4kUHgra7v...',
        role: 'asd',
        job: 'sad',
        employed: '2024-01-08',
      },
    },
  ],
};

export const MOCK_AUTHORS_SUCCESS_RES = {
  data: { records: AUTHORS },
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {
    headers: {} as AxiosRequestHeaders,
  },
};

export const MOCK_UPDATE_SUCCESS_RES: AxiosResponse<string> = {
  data: 'success',
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {
    headers: {} as AxiosRequestHeaders,
  },
};

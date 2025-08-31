import { AxiosRequestHeaders } from 'axios';

// Types
import { TRecordUser } from '@/types';

export const USER: TRecordUser[] = [
  {
    id: 'rec2xKttJK1hFsGSO',
    createdTime: '2024-07-17T04:16:17.000Z',
    fields: {
      name: 'Thang12',
      phone: '(077) 712-3456',
      email: 'thang@gmail.com',
      avatar:
        'https://gcs.tripi.vn/public-tripi/tripi-feed/img/474094mGh/avatar-anime-nam-co-don-dep_085121210.jpg',
      password: 'Abcd@1234',
      location: 'United States',
    },
  },
];

export const MOCK_ADD_USER_PAYLOAD = [
  {
    fields: {
      name: 'text',
      email: 'text@gmail.com',
      password: 'Abcd@1234',
    },
  },
];

export const MOCK_UPDATE_USER_PAYLOAD = {
  name: 'Update name',
  productId: USER[0].id,
};

export const MOCK_USER_SUCCESS_RES = {
  data: { records: USER },
  status: 200,
  statusText: 'Ok',
  headers: {},
  config: {
    headers: {} as AxiosRequestHeaders,
  },
};

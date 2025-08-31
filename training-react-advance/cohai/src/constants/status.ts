import { Status } from '../types';

export const STATUS_LABEL = {
  [Status.ONLINE]: 'primary',
  [Status.OFFLINE]: 'secondary',
  [Status.WORKING]: 'tertiary',
  [Status.CANCELED]: 'tertiary',
  [Status.TODO]: 'tertiary',
  [Status.DONE]: 'tertiary',
};

export const STATUS_SUBMIT = {
  PENDING: 'pending',
  ERROR: 'error',
  SUCCESS: 'success',
};

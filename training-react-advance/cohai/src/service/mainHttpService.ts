// Service
import { HttpService } from './httpService';

// Constants
import { STATISTICAL_API } from '@/constants';

export const mainHttpService = new HttpService(STATISTICAL_API);

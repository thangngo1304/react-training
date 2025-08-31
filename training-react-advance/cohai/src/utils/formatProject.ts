// Types
import { TRecordProject } from '@/types';

// Utils
import { formatDecimalNumber } from './formatNumber';

export const formatProjectResponse = (projects: TRecordProject[] = []) =>
  projects.map((project) => {
    const { id, fields, createdTime } = project || {};
    const {
      _id,
      projectName,
      avatar,
      budget,
      status,
      completion,
      description,
      image,
    } = fields || {};

    return {
      id,
      createdTime,
      fields: {
        _id,
        projectName,
        avatar: avatar || '/imgs/avatar-default.svg',
        budget,
        status,
        projectStatus: status,
        completion,
        description,
        image: image || '/imgs/image-project-default.jpg',
      },
      projectName,
      avatar: avatar || '/imgs/avatar-default.svg',
      budget: `$${formatDecimalNumber(budget)}`,
      status,
      projectStatus: status,
      completion,
      description,
      image: image || '/imgs/image-project-default.jpg',
    };
  });

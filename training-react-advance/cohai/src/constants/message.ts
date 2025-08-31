export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  EMPTY_DATA: 'No data found',
  EMAIL_INVALID: 'Email is invalid',
  EMAIL_FAILED: 'Email is not in correct format (example: @test.com)',
  TEXT_FAILED: 'There must be no space in front',
  PASSWORD_NOT_MATCH: 'Password does not match',
  AUTH_INCORRECT: 'Email or password is incorrect',
  IMAGE_INVALID: 'Image is invalid',
  IMAGE_FAILED:
    'Images are links with (https:// and the extension is .jpg or png, etc.)',
  BUDGET_INVALID: 'Budget is invalid',
  COMPLETION_INVALID: 'Completion is invalid',
  LIMIT_BUDGET: 'Budget must not exceed 1 million',
  LIMIT_COMPLETION: 'Budget must not exceed 100%',
  SOMETHING_ERROR: 'Something went wrong!!',
  PHONE_NUMBER_INVALID: 'Phone number is invalid',
  CREATE_ACCOUNT: 'Account creation failed',
  ACCOUNT_CREATED: 'This email has been created.',
  REQUEST:
    'Request failed with error. Please help contact team to identify issue',
};

export const SUCCESS_MESSAGE = {
  TITLE_MESSAGE_CREATE: (fieldName: string) => `${fieldName} created.`,
  TITLE_MESSAGE_UPDATE: (fieldName: string) => `${fieldName} updated.`,
  PROJECT_SUCCESS: 'Project created successfully',
  AUTHOR_SUCCESS: 'Author created successfully',
  USER_UPDATE: 'User update successfully',
  AUTHOR_UPDATE: 'Author update successfully',
  PROJECT_UPDATE: 'Project update successfully',
  ACCOUNT_SUCCESS: 'Account created successfully',
};

export enum ErrorCodes {
    GENERIC_ERROR = 999,
    BAD_REQUEST = 400,
    USR_NOT_EXST = 250,
    USR_PSWRD_FAILED = 260,
    PSSWRD_ENCRPT_ERR = 100,
    MONGO_DUPLICATE_INDEX = 11000,
    USR_ALRDY_EXST = 200,
  }
  
  export enum ErrorMessages {
    GENERIC_ERROR = 'An error ocurred',
    BAD_REQUEST = 'Bad request',
    USR_NOT_EXST = 'User is not registered',
    USR_PSWRD_FAILED = 'The password is incorrect',
    PSSWRD_ENCRPT_ERR = 'Error hash password',
    USR_ALRDY_EXST = 'User Already Exist',
  }
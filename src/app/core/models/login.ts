export interface Login {
    message: string;
    isSuccess: boolean;
    isUpdated: boolean;
    isExists: boolean;
    isNotFound: boolean;
    isActive: boolean;
    data: {
      userName: string;
      email: string;
      token: string;
      isAuthenticated: boolean;
      roleName: string;
      expiresOn: string;
      errors: Array<string>;
    };
    errors: [];
  }
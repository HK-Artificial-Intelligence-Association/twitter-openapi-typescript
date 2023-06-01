import * as i from 'twitter-openapi-typescript-generated/src';

export type UserApiUtilsResponse = {
  raw: UserApiUtilsRaw;
  header: ApiUtilsHeader;
  data: i.User;
};

export type UserApiUtilsRaw = {
  response: Response;
};

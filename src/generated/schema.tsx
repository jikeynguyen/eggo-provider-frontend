import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type BetaCustomer = {
  __typename?: 'BetaCustomer';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Booking = {
  __typename?: 'Booking';
  createdAt: Scalars['DateTime']['output'];
  endTime: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  playgroundUnit: PlaygroundUnit;
  review?: Maybe<Review>;
  startTime: Scalars['DateTime']['output'];
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BulkCreatePlaygroundUnitInput = {
  capacity: Scalars['Float']['input'];
  defaultPrice: Scalars['Float']['input'];
  labelIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  name: Scalars['String']['input'];
  playgroundId: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
  startNumber?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateBetaCustomerInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateBookingInput = {
  endTime: Scalars['DateTime']['input'];
  playgroundUnitId: Scalars['Float']['input'];
  startTime: Scalars['DateTime']['input'];
};

export type CreateFinderInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateLabelInput = {
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreatePlaygroundInput = {
  address: Scalars['String']['input'];
  closeHour: Scalars['Float']['input'];
  coverImageId?: InputMaybe<Scalars['Float']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  openDates: Array<Scalars['String']['input']>;
  openHour: Scalars['Float']['input'];
  phone: Scalars['String']['input'];
  timeSlotUnit: Scalars['Float']['input'];
  type: Scalars['String']['input'];
};

export type CreatePlaygroundUnitInput = {
  capacity: Scalars['Float']['input'];
  defaultPrice: Scalars['Float']['input'];
  labelIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  name: Scalars['String']['input'];
  playgroundId: Scalars['Float']['input'];
};

export type CreateProviderInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CreateReviewInput = {
  content: Scalars['String']['input'];
  playgroundId: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
};

export type DateTimeOperations = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FindAvailablePlaygroundInput = {
  from: Scalars['DateTime']['input'];
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  radius: Scalars['Float']['input'];
  to: Scalars['DateTime']['input'];
  type: PlaygroundType;
};

export type FindPlaygroundWithinRangeInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  radius: Scalars['Float']['input'];
};

export type Finder = {
  __typename?: 'Finder';
  billingPlan: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GeometryPoint = {
  __typename?: 'GeometryPoint';
  coordinates: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type Image = {
  __typename?: 'Image';
  createdAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imageCloudId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  variants?: Maybe<Array<Scalars['String']['output']>>;
};

export type ImageFilter = {
  createdAt?: InputMaybe<DateTimeOperations>;
  filename?: InputMaybe<StringOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type Label = {
  __typename?: 'Label';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LabelFilter = {
  code?: InputMaybe<StringOperations>;
  createdAt?: InputMaybe<DateTimeOperations>;
  name?: InputMaybe<StringOperations>;
  providerId?: InputMaybe<NumberOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type Mutation = {
  __typename?: 'Mutation';
  bulkCreatePlaygroundUnits: Scalars['Boolean']['output'];
  createBetaCustomer: BetaCustomer;
  createBooking: Booking;
  createLabel: Label;
  createPlayground: Playground;
  createPlaygroundUnit: PlaygroundUnit;
  createReview: Review;
  deleteBooking: Booking;
  deleteImage: Image;
  deleteLabel: Scalars['Boolean']['output'];
  deleteReview: Scalars['Boolean']['output'];
  loginFinder: UserSession;
  loginProvider: UserSession;
  logoutFinder: Scalars['Boolean']['output'];
  logoutProvider: Scalars['Boolean']['output'];
  registerFinder: Finder;
  registerProvider: Provider;
  restoreLabel: Scalars['Boolean']['output'];
  suggestPlayground: SuggestPlayground;
  updateLabel: Label;
  uploadMultiple: Array<Image>;
  uploadSingle: Image;
};

export type MutationBulkCreatePlaygroundUnitsArgs = {
  input: BulkCreatePlaygroundUnitInput;
};

export type MutationCreateBetaCustomerArgs = {
  createBetaCustomerInput: CreateBetaCustomerInput;
};

export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput;
};

export type MutationCreateLabelArgs = {
  input: CreateLabelInput;
};

export type MutationCreatePlaygroundArgs = {
  input: CreatePlaygroundInput;
};

export type MutationCreatePlaygroundUnitArgs = {
  input: CreatePlaygroundUnitInput;
};

export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};

export type MutationDeleteBookingArgs = {
  id: Scalars['Int']['input'];
};

export type MutationDeleteImageArgs = {
  id: Scalars['Float']['input'];
};

export type MutationDeleteLabelArgs = {
  id: Scalars['Float']['input'];
};

export type MutationDeleteReviewArgs = {
  reviewId: Scalars['Float']['input'];
};

export type MutationLoginFinderArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationLoginProviderArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationRegisterFinderArgs = {
  registerFinderInput: CreateFinderInput;
};

export type MutationRegisterProviderArgs = {
  registerProviderInput: CreateProviderInput;
};

export type MutationRestoreLabelArgs = {
  id: Scalars['Float']['input'];
};

export type MutationSuggestPlaygroundArgs = {
  suggestPlaygroundInput: SuggestPlaygroundInput;
};

export type MutationUpdateLabelArgs = {
  id: Scalars['Float']['input'];
  input: UpdateLabelInput;
};

export type MutationUploadMultipleArgs = {
  files: Array<Scalars['Upload']['input']>;
};

export type MutationUploadSingleArgs = {
  file: Scalars['Upload']['input'];
};

export type NumberOperations = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PaginateImageOptions = {
  filter?: InputMaybe<ImageFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginateImages = {
  __typename?: 'PaginateImages';
  items: Array<Image>;
  total: Scalars['Int']['output'];
};

export type PaginateLabelOptions = {
  filter?: InputMaybe<LabelFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginateLabels = {
  __typename?: 'PaginateLabels';
  items: Array<Label>;
  total: Scalars['Int']['output'];
};

export type PaginatePlaygroundFilter = {
  createdAt?: InputMaybe<DateTimeOperations>;
  name?: InputMaybe<StringOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type PaginatePlaygroundOptions = {
  filter?: InputMaybe<PaginatePlaygroundFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginatePlaygroundUnitOptions = {
  filter?: InputMaybe<PlaygroundUnitFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortOrderInput>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginatePlaygroundUnits = {
  __typename?: 'PaginatePlaygroundUnits';
  items: Array<PlaygroundUnit>;
  total: Scalars['Int']['output'];
};

export type PaginatePlaygrounds = {
  __typename?: 'PaginatePlaygrounds';
  items: Array<Playground>;
  total: Scalars['Int']['output'];
};

export type Playground = {
  __typename?: 'Playground';
  address: Scalars['String']['output'];
  closeHour: Scalars['Float']['output'];
  coverImg?: Maybe<Image>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  location: GeometryPoint;
  name: Scalars['String']['output'];
  openDates: Array<Scalars['String']['output']>;
  openHour: Scalars['Float']['output'];
  phone: Scalars['String']['output'];
  provider: Provider;
  rating: Scalars['Float']['output'];
  reviews?: Maybe<Array<Review>>;
  timeSlotUnit: Scalars['Float']['output'];
  type: Scalars['String']['output'];
  units?: Maybe<Array<PlaygroundUnit>>;
  updatedAt: Scalars['DateTime']['output'];
};

export enum PlaygroundType {
  Badminton = 'BADMINTON',
  Basketball = 'BASKETBALL',
  Billiard = 'BILLIARD',
  Pickleball = 'PICKLEBALL',
  Soccer = 'SOCCER',
  TableTennis = 'TABLE_TENNIS',
  Tennis = 'TENNIS',
  Volleyball = 'VOLLEYBALL',
}

export type PlaygroundUnit = {
  __typename?: 'PlaygroundUnit';
  bookings?: Maybe<Array<Booking>>;
  capacity: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  defaultPrice: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  labels?: Maybe<Array<Label>>;
  name: Scalars['String']['output'];
  playground: Playground;
  updatedAt: Scalars['DateTime']['output'];
};

export type PlaygroundUnitFilter = {
  capacity?: InputMaybe<NumberOperations>;
  createdAt?: InputMaybe<DateTimeOperations>;
  defaultPrice?: InputMaybe<NumberOperations>;
  labelId?: InputMaybe<NumberOperations>;
  name?: InputMaybe<StringOperations>;
  playgroundId?: InputMaybe<NumberOperations>;
  updatedAt?: InputMaybe<DateTimeOperations>;
};

export type Provider = {
  __typename?: 'Provider';
  billingPlan: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  availablePlayground: Array<Playground>;
  betaCustomerCount: Scalars['Float']['output'];
  findPlaygroundsWithinRange: Array<Playground>;
  findSuggestPlaygroundsBySearchText: Array<SuggestPlayground>;
  finder: Finder;
  image: Image;
  label: Label;
  meFinder: UserSession;
  meProvider: UserSession;
  paginateImages: PaginateImages;
  paginateLabels: PaginateLabels;
  paginatePlaygroundUnits: PaginatePlaygroundUnits;
  paginatePlaygrounds: PaginatePlaygrounds;
  playground: Playground;
  playgroundUnit: PlaygroundUnit;
  playgrounds: Array<Playground>;
  provider: Provider;
  review: Review;
};

export type QueryAvailablePlaygroundArgs = {
  findAvailablePlaygroundInput: FindAvailablePlaygroundInput;
};

export type QueryFindPlaygroundsWithinRangeArgs = {
  input: FindPlaygroundWithinRangeInput;
};

export type QueryFindSuggestPlaygroundsBySearchTextArgs = {
  searchText: Scalars['String']['input'];
};

export type QueryFinderArgs = {
  id: Scalars['Float']['input'];
};

export type QueryImageArgs = {
  id: Scalars['Float']['input'];
};

export type QueryLabelArgs = {
  id: Scalars['Float']['input'];
};

export type QueryPaginateImagesArgs = {
  options: PaginateImageOptions;
};

export type QueryPaginateLabelsArgs = {
  options: PaginateLabelOptions;
};

export type QueryPaginatePlaygroundUnitsArgs = {
  options?: InputMaybe<PaginatePlaygroundUnitOptions>;
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryPaginatePlaygroundsArgs = {
  options: PaginatePlaygroundOptions;
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryPlaygroundArgs = {
  id: Scalars['Float']['input'];
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryPlaygroundUnitArgs = {
  id: Scalars['Float']['input'];
};

export type QueryPlaygroundsArgs = {
  relations?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QueryProviderArgs = {
  id: Scalars['Float']['input'];
};

export type QueryReviewArgs = {
  playgroundId: Scalars['Float']['input'];
};

export type Review = {
  __typename?: 'Review';
  booking: Booking;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  playground: Playground;
  rating: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type SortOrderInput = {
  createdAt?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type StringOperations = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  negative?: InputMaybe<Scalars['Boolean']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SuggestPlayground = {
  __typename?: 'SuggestPlayground';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type SuggestPlaygroundInput = {
  address: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type UpdateLabelInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UserSession = {
  __typename?: 'UserSession';
  billingPlan: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  jwt: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type RegisterProviderMutationVariables = Exact<{
  registerProviderInput: CreateProviderInput;
}>;

export type RegisterProviderMutation = {
  __typename?: 'Mutation';
  registerProvider: { __typename?: 'Provider'; id: number };
};

export type LoginProviderMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type LoginProviderMutation = {
  __typename?: 'Mutation';
  loginProvider: { __typename?: 'UserSession'; id: number };
};

export type MeProviderQueryVariables = Exact<{ [key: string]: never }>;

export type MeProviderQuery = {
  __typename?: 'Query';
  meProvider: {
    __typename?: 'UserSession';
    firstName: string;
    billingPlan: string;
    jwt: string;
    id: number;
    lastName: string;
  };
};

export type PaginateImagesQueryVariables = Exact<{
  options: PaginateImageOptions;
}>;

export type PaginateImagesQuery = {
  __typename?: 'Query';
  paginateImages: {
    __typename?: 'PaginateImages';
    total: number;
    items: Array<{
      __typename?: 'Image';
      id: number;
      filename: string;
      variants?: Array<string> | null;
    }>;
  };
};

export type UploadImageMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;

export type UploadImageMutation = {
  __typename?: 'Mutation';
  uploadSingle: {
    __typename?: 'Image';
    id: number;
    variants?: Array<string> | null;
    filename: string;
  };
};

export type CreateLabelMutationVariables = Exact<{
  input: CreateLabelInput;
}>;

export type CreateLabelMutation = {
  __typename?: 'Mutation';
  createLabel: {
    __typename?: 'Label';
    id: number;
    code: string;
    name: string;
    description?: string | null;
  };
};

export type PaginateLabelsQueryVariables = Exact<{
  options: PaginateLabelOptions;
}>;

export type PaginateLabelsQuery = {
  __typename?: 'Query';
  paginateLabels: {
    __typename?: 'PaginateLabels';
    total: number;
    items: Array<{
      __typename?: 'Label';
      id: number;
      name: string;
      code: string;
      description?: string | null;
    }>;
  };
};

export type CreatePlaygroundUnitMutationVariables = Exact<{
  input: CreatePlaygroundUnitInput;
}>;

export type CreatePlaygroundUnitMutation = {
  __typename?: 'Mutation';
  createPlaygroundUnit: { __typename?: 'PlaygroundUnit'; id: number };
};

export type BulkCreatePlaygroundUnitsMutationVariables = Exact<{
  input: BulkCreatePlaygroundUnitInput;
}>;

export type BulkCreatePlaygroundUnitsMutation = {
  __typename?: 'Mutation';
  bulkCreatePlaygroundUnits: boolean;
};

export type PaginatePlaygroundUnitsQueryVariables = Exact<{
  relations?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
  options?: InputMaybe<PaginatePlaygroundUnitOptions>;
}>;

export type PaginatePlaygroundUnitsQuery = {
  __typename?: 'Query';
  paginatePlaygroundUnits: {
    __typename?: 'PaginatePlaygroundUnits';
    total: number;
    items: Array<{
      __typename?: 'PlaygroundUnit';
      id: number;
      capacity: number;
      defaultPrice: number;
      name: string;
      labels?: Array<{ __typename?: 'Label'; id: number; name: string }> | null;
    }>;
  };
};

export type CreatePlaygroundMutationVariables = Exact<{
  input: CreatePlaygroundInput;
}>;

export type CreatePlaygroundMutation = {
  __typename?: 'Mutation';
  createPlayground: {
    __typename?: 'Playground';
    id: number;
    createdAt: any;
    name: string;
    address: string;
    phone: string;
  };
};

export type PlaygroundDetailQueryVariables = Exact<{
  playgroundId: Scalars['Float']['input'];
  relations?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
}>;

export type PlaygroundDetailQuery = {
  __typename?: 'Query';
  playground: {
    __typename?: 'Playground';
    id: number;
    closeHour: number;
    address: string;
    name: string;
    openDates: Array<string>;
    openHour: number;
    phone: string;
    timeSlotUnit: number;
    type: string;
    location: { __typename?: 'GeometryPoint'; coordinates: Array<number> };
    coverImg?: {
      __typename?: 'Image';
      id: number;
      variants?: Array<string> | null;
    } | null;
  };
};

export type PaginatePlaygroundsQueryVariables = Exact<{
  options: PaginatePlaygroundOptions;
  relations?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
}>;

export type PaginatePlaygroundsQuery = {
  __typename?: 'Query';
  paginatePlaygrounds: {
    __typename?: 'PaginatePlaygrounds';
    total: number;
    items: Array<{
      __typename?: 'Playground';
      id: number;
      type: string;
      name: string;
      closeHour: number;
      address: string;
      openHour: number;
      coverImg?: {
        __typename?: 'Image';
        variants?: Array<string> | null;
        id: number;
      } | null;
    }>;
  };
};

export const RegisterProviderDocument = gql`
  mutation RegisterProvider($registerProviderInput: CreateProviderInput!) {
    registerProvider(registerProviderInput: $registerProviderInput) {
      id
    }
  }
`;
export type RegisterProviderMutationFn = Apollo.MutationFunction<
  RegisterProviderMutation,
  RegisterProviderMutationVariables
>;
export type RegisterProviderComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    RegisterProviderMutation,
    RegisterProviderMutationVariables
  >,
  'mutation'
>;

export const RegisterProviderComponent = (
  props: RegisterProviderComponentProps
) => (
  <ApolloReactComponents.Mutation<
    RegisterProviderMutation,
    RegisterProviderMutationVariables
  >
    mutation={RegisterProviderDocument}
    {...props}
  />
);

/**
 * __useRegisterProviderMutation__
 *
 * To run a mutation, you first call `useRegisterProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerProviderMutation, { data, loading, error }] = useRegisterProviderMutation({
 *   variables: {
 *      registerProviderInput: // value for 'registerProviderInput'
 *   },
 * });
 */
export function useRegisterProviderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterProviderMutation,
    RegisterProviderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    RegisterProviderMutation,
    RegisterProviderMutationVariables
  >(RegisterProviderDocument, options);
}
export type RegisterProviderMutationHookResult = ReturnType<
  typeof useRegisterProviderMutation
>;
export type RegisterProviderMutationResult =
  Apollo.MutationResult<RegisterProviderMutation>;
export type RegisterProviderMutationOptions = Apollo.BaseMutationOptions<
  RegisterProviderMutation,
  RegisterProviderMutationVariables
>;
export const LoginProviderDocument = gql`
  mutation LoginProvider($email: String!, $password: String!) {
    loginProvider(email: $email, password: $password) {
      id
    }
  }
`;
export type LoginProviderMutationFn = Apollo.MutationFunction<
  LoginProviderMutation,
  LoginProviderMutationVariables
>;
export type LoginProviderComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    LoginProviderMutation,
    LoginProviderMutationVariables
  >,
  'mutation'
>;

export const LoginProviderComponent = (props: LoginProviderComponentProps) => (
  <ApolloReactComponents.Mutation<
    LoginProviderMutation,
    LoginProviderMutationVariables
  >
    mutation={LoginProviderDocument}
    {...props}
  />
);

/**
 * __useLoginProviderMutation__
 *
 * To run a mutation, you first call `useLoginProviderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginProviderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginProviderMutation, { data, loading, error }] = useLoginProviderMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginProviderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginProviderMutation,
    LoginProviderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    LoginProviderMutation,
    LoginProviderMutationVariables
  >(LoginProviderDocument, options);
}
export type LoginProviderMutationHookResult = ReturnType<
  typeof useLoginProviderMutation
>;
export type LoginProviderMutationResult =
  Apollo.MutationResult<LoginProviderMutation>;
export type LoginProviderMutationOptions = Apollo.BaseMutationOptions<
  LoginProviderMutation,
  LoginProviderMutationVariables
>;
export const MeProviderDocument = gql`
  query MeProvider {
    meProvider {
      firstName
      billingPlan
      jwt
      id
      lastName
    }
  }
`;
export type MeProviderComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    MeProviderQuery,
    MeProviderQueryVariables
  >,
  'query'
>;

export const MeProviderComponent = (props: MeProviderComponentProps) => (
  <ApolloReactComponents.Query<MeProviderQuery, MeProviderQueryVariables>
    query={MeProviderDocument}
    {...props}
  />
);

/**
 * __useMeProviderQuery__
 *
 * To run a query within a React component, call `useMeProviderQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeProviderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeProviderQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeProviderQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MeProviderQuery,
    MeProviderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeProviderQuery, MeProviderQueryVariables>(
    MeProviderDocument,
    options
  );
}
export function useMeProviderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeProviderQuery,
    MeProviderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeProviderQuery, MeProviderQueryVariables>(
    MeProviderDocument,
    options
  );
}
export function useMeProviderSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    MeProviderQuery,
    MeProviderQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MeProviderQuery, MeProviderQueryVariables>(
    MeProviderDocument,
    options
  );
}
export type MeProviderQueryHookResult = ReturnType<typeof useMeProviderQuery>;
export type MeProviderLazyQueryHookResult = ReturnType<
  typeof useMeProviderLazyQuery
>;
export type MeProviderSuspenseQueryHookResult = ReturnType<
  typeof useMeProviderSuspenseQuery
>;
export type MeProviderQueryResult = Apollo.QueryResult<
  MeProviderQuery,
  MeProviderQueryVariables
>;
export const PaginateImagesDocument = gql`
  query PaginateImages($options: PaginateImageOptions!) {
    paginateImages(options: $options) {
      items {
        id
        filename
        variants
      }
      total
    }
  }
`;
export type PaginateImagesComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PaginateImagesQuery,
    PaginateImagesQueryVariables
  >,
  'query'
> &
  (
    | { variables: PaginateImagesQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const PaginateImagesComponent = (
  props: PaginateImagesComponentProps
) => (
  <ApolloReactComponents.Query<
    PaginateImagesQuery,
    PaginateImagesQueryVariables
  >
    query={PaginateImagesDocument}
    {...props}
  />
);

/**
 * __usePaginateImagesQuery__
 *
 * To run a query within a React component, call `usePaginateImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginateImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginateImagesQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function usePaginateImagesQuery(
  baseOptions: Apollo.QueryHookOptions<
    PaginateImagesQuery,
    PaginateImagesQueryVariables
  > &
    (
      | { variables: PaginateImagesQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PaginateImagesQuery, PaginateImagesQueryVariables>(
    PaginateImagesDocument,
    options
  );
}
export function usePaginateImagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaginateImagesQuery,
    PaginateImagesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PaginateImagesQuery, PaginateImagesQueryVariables>(
    PaginateImagesDocument,
    options
  );
}
export function usePaginateImagesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PaginateImagesQuery,
    PaginateImagesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PaginateImagesQuery,
    PaginateImagesQueryVariables
  >(PaginateImagesDocument, options);
}
export type PaginateImagesQueryHookResult = ReturnType<
  typeof usePaginateImagesQuery
>;
export type PaginateImagesLazyQueryHookResult = ReturnType<
  typeof usePaginateImagesLazyQuery
>;
export type PaginateImagesSuspenseQueryHookResult = ReturnType<
  typeof usePaginateImagesSuspenseQuery
>;
export type PaginateImagesQueryResult = Apollo.QueryResult<
  PaginateImagesQuery,
  PaginateImagesQueryVariables
>;
export const UploadImageDocument = gql`
  mutation uploadImage($file: Upload!) {
    uploadSingle(file: $file) {
      id
      variants
      filename
    }
  }
`;
export type UploadImageMutationFn = Apollo.MutationFunction<
  UploadImageMutation,
  UploadImageMutationVariables
>;
export type UploadImageComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    UploadImageMutation,
    UploadImageMutationVariables
  >,
  'mutation'
>;

export const UploadImageComponent = (props: UploadImageComponentProps) => (
  <ApolloReactComponents.Mutation<
    UploadImageMutation,
    UploadImageMutationVariables
  >
    mutation={UploadImageDocument}
    {...props}
  />
);

/**
 * __useUploadImageMutation__
 *
 * To run a mutation, you first call `useUploadImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageMutation, { data, loading, error }] = useUploadImageMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadImageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UploadImageMutation,
    UploadImageMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UploadImageMutation, UploadImageMutationVariables>(
    UploadImageDocument,
    options
  );
}
export type UploadImageMutationHookResult = ReturnType<
  typeof useUploadImageMutation
>;
export type UploadImageMutationResult =
  Apollo.MutationResult<UploadImageMutation>;
export type UploadImageMutationOptions = Apollo.BaseMutationOptions<
  UploadImageMutation,
  UploadImageMutationVariables
>;
export const CreateLabelDocument = gql`
  mutation CreateLabel($input: CreateLabelInput!) {
    createLabel(input: $input) {
      id
      code
      name
      description
    }
  }
`;
export type CreateLabelMutationFn = Apollo.MutationFunction<
  CreateLabelMutation,
  CreateLabelMutationVariables
>;
export type CreateLabelComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreateLabelMutation,
    CreateLabelMutationVariables
  >,
  'mutation'
>;

export const CreateLabelComponent = (props: CreateLabelComponentProps) => (
  <ApolloReactComponents.Mutation<
    CreateLabelMutation,
    CreateLabelMutationVariables
  >
    mutation={CreateLabelDocument}
    {...props}
  />
);

/**
 * __useCreateLabelMutation__
 *
 * To run a mutation, you first call `useCreateLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLabelMutation, { data, loading, error }] = useCreateLabelMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLabelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateLabelMutation,
    CreateLabelMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateLabelMutation, CreateLabelMutationVariables>(
    CreateLabelDocument,
    options
  );
}
export type CreateLabelMutationHookResult = ReturnType<
  typeof useCreateLabelMutation
>;
export type CreateLabelMutationResult =
  Apollo.MutationResult<CreateLabelMutation>;
export type CreateLabelMutationOptions = Apollo.BaseMutationOptions<
  CreateLabelMutation,
  CreateLabelMutationVariables
>;
export const PaginateLabelsDocument = gql`
  query PaginateLabels($options: PaginateLabelOptions!) {
    paginateLabels(options: $options) {
      total
      items {
        id
        name
        code
        description
      }
    }
  }
`;
export type PaginateLabelsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PaginateLabelsQuery,
    PaginateLabelsQueryVariables
  >,
  'query'
> &
  (
    | { variables: PaginateLabelsQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const PaginateLabelsComponent = (
  props: PaginateLabelsComponentProps
) => (
  <ApolloReactComponents.Query<
    PaginateLabelsQuery,
    PaginateLabelsQueryVariables
  >
    query={PaginateLabelsDocument}
    {...props}
  />
);

/**
 * __usePaginateLabelsQuery__
 *
 * To run a query within a React component, call `usePaginateLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginateLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginateLabelsQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function usePaginateLabelsQuery(
  baseOptions: Apollo.QueryHookOptions<
    PaginateLabelsQuery,
    PaginateLabelsQueryVariables
  > &
    (
      | { variables: PaginateLabelsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PaginateLabelsQuery, PaginateLabelsQueryVariables>(
    PaginateLabelsDocument,
    options
  );
}
export function usePaginateLabelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaginateLabelsQuery,
    PaginateLabelsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PaginateLabelsQuery, PaginateLabelsQueryVariables>(
    PaginateLabelsDocument,
    options
  );
}
export function usePaginateLabelsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PaginateLabelsQuery,
    PaginateLabelsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PaginateLabelsQuery,
    PaginateLabelsQueryVariables
  >(PaginateLabelsDocument, options);
}
export type PaginateLabelsQueryHookResult = ReturnType<
  typeof usePaginateLabelsQuery
>;
export type PaginateLabelsLazyQueryHookResult = ReturnType<
  typeof usePaginateLabelsLazyQuery
>;
export type PaginateLabelsSuspenseQueryHookResult = ReturnType<
  typeof usePaginateLabelsSuspenseQuery
>;
export type PaginateLabelsQueryResult = Apollo.QueryResult<
  PaginateLabelsQuery,
  PaginateLabelsQueryVariables
>;
export const CreatePlaygroundUnitDocument = gql`
  mutation CreatePlaygroundUnit($input: CreatePlaygroundUnitInput!) {
    createPlaygroundUnit(input: $input) {
      id
    }
  }
`;
export type CreatePlaygroundUnitMutationFn = Apollo.MutationFunction<
  CreatePlaygroundUnitMutation,
  CreatePlaygroundUnitMutationVariables
>;
export type CreatePlaygroundUnitComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreatePlaygroundUnitMutation,
    CreatePlaygroundUnitMutationVariables
  >,
  'mutation'
>;

export const CreatePlaygroundUnitComponent = (
  props: CreatePlaygroundUnitComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreatePlaygroundUnitMutation,
    CreatePlaygroundUnitMutationVariables
  >
    mutation={CreatePlaygroundUnitDocument}
    {...props}
  />
);

/**
 * __useCreatePlaygroundUnitMutation__
 *
 * To run a mutation, you first call `useCreatePlaygroundUnitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaygroundUnitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaygroundUnitMutation, { data, loading, error }] = useCreatePlaygroundUnitMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlaygroundUnitMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePlaygroundUnitMutation,
    CreatePlaygroundUnitMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePlaygroundUnitMutation,
    CreatePlaygroundUnitMutationVariables
  >(CreatePlaygroundUnitDocument, options);
}
export type CreatePlaygroundUnitMutationHookResult = ReturnType<
  typeof useCreatePlaygroundUnitMutation
>;
export type CreatePlaygroundUnitMutationResult =
  Apollo.MutationResult<CreatePlaygroundUnitMutation>;
export type CreatePlaygroundUnitMutationOptions = Apollo.BaseMutationOptions<
  CreatePlaygroundUnitMutation,
  CreatePlaygroundUnitMutationVariables
>;
export const BulkCreatePlaygroundUnitsDocument = gql`
  mutation BulkCreatePlaygroundUnits($input: BulkCreatePlaygroundUnitInput!) {
    bulkCreatePlaygroundUnits(input: $input)
  }
`;
export type BulkCreatePlaygroundUnitsMutationFn = Apollo.MutationFunction<
  BulkCreatePlaygroundUnitsMutation,
  BulkCreatePlaygroundUnitsMutationVariables
>;
export type BulkCreatePlaygroundUnitsComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    BulkCreatePlaygroundUnitsMutation,
    BulkCreatePlaygroundUnitsMutationVariables
  >,
  'mutation'
>;

export const BulkCreatePlaygroundUnitsComponent = (
  props: BulkCreatePlaygroundUnitsComponentProps
) => (
  <ApolloReactComponents.Mutation<
    BulkCreatePlaygroundUnitsMutation,
    BulkCreatePlaygroundUnitsMutationVariables
  >
    mutation={BulkCreatePlaygroundUnitsDocument}
    {...props}
  />
);

/**
 * __useBulkCreatePlaygroundUnitsMutation__
 *
 * To run a mutation, you first call `useBulkCreatePlaygroundUnitsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkCreatePlaygroundUnitsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkCreatePlaygroundUnitsMutation, { data, loading, error }] = useBulkCreatePlaygroundUnitsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkCreatePlaygroundUnitsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BulkCreatePlaygroundUnitsMutation,
    BulkCreatePlaygroundUnitsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    BulkCreatePlaygroundUnitsMutation,
    BulkCreatePlaygroundUnitsMutationVariables
  >(BulkCreatePlaygroundUnitsDocument, options);
}
export type BulkCreatePlaygroundUnitsMutationHookResult = ReturnType<
  typeof useBulkCreatePlaygroundUnitsMutation
>;
export type BulkCreatePlaygroundUnitsMutationResult =
  Apollo.MutationResult<BulkCreatePlaygroundUnitsMutation>;
export type BulkCreatePlaygroundUnitsMutationOptions =
  Apollo.BaseMutationOptions<
    BulkCreatePlaygroundUnitsMutation,
    BulkCreatePlaygroundUnitsMutationVariables
  >;
export const PaginatePlaygroundUnitsDocument = gql`
  query PaginatePlaygroundUnits(
    $relations: [String!]
    $options: PaginatePlaygroundUnitOptions
  ) {
    paginatePlaygroundUnits(relations: $relations, options: $options) {
      items {
        id
        capacity
        defaultPrice
        name
        labels {
          id
          name
        }
      }
      total
    }
  }
`;
export type PaginatePlaygroundUnitsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PaginatePlaygroundUnitsQuery,
    PaginatePlaygroundUnitsQueryVariables
  >,
  'query'
>;

export const PaginatePlaygroundUnitsComponent = (
  props: PaginatePlaygroundUnitsComponentProps
) => (
  <ApolloReactComponents.Query<
    PaginatePlaygroundUnitsQuery,
    PaginatePlaygroundUnitsQueryVariables
  >
    query={PaginatePlaygroundUnitsDocument}
    {...props}
  />
);

/**
 * __usePaginatePlaygroundUnitsQuery__
 *
 * To run a query within a React component, call `usePaginatePlaygroundUnitsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatePlaygroundUnitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatePlaygroundUnitsQuery({
 *   variables: {
 *      relations: // value for 'relations'
 *      options: // value for 'options'
 *   },
 * });
 */
export function usePaginatePlaygroundUnitsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PaginatePlaygroundUnitsQuery,
    PaginatePlaygroundUnitsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaginatePlaygroundUnitsQuery,
    PaginatePlaygroundUnitsQueryVariables
  >(PaginatePlaygroundUnitsDocument, options);
}
export function usePaginatePlaygroundUnitsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaginatePlaygroundUnitsQuery,
    PaginatePlaygroundUnitsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaginatePlaygroundUnitsQuery,
    PaginatePlaygroundUnitsQueryVariables
  >(PaginatePlaygroundUnitsDocument, options);
}
export function usePaginatePlaygroundUnitsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PaginatePlaygroundUnitsQuery,
    PaginatePlaygroundUnitsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PaginatePlaygroundUnitsQuery,
    PaginatePlaygroundUnitsQueryVariables
  >(PaginatePlaygroundUnitsDocument, options);
}
export type PaginatePlaygroundUnitsQueryHookResult = ReturnType<
  typeof usePaginatePlaygroundUnitsQuery
>;
export type PaginatePlaygroundUnitsLazyQueryHookResult = ReturnType<
  typeof usePaginatePlaygroundUnitsLazyQuery
>;
export type PaginatePlaygroundUnitsSuspenseQueryHookResult = ReturnType<
  typeof usePaginatePlaygroundUnitsSuspenseQuery
>;
export type PaginatePlaygroundUnitsQueryResult = Apollo.QueryResult<
  PaginatePlaygroundUnitsQuery,
  PaginatePlaygroundUnitsQueryVariables
>;
export const CreatePlaygroundDocument = gql`
  mutation CreatePlayground($input: CreatePlaygroundInput!) {
    createPlayground(input: $input) {
      id
      createdAt
      name
      address
      phone
    }
  }
`;
export type CreatePlaygroundMutationFn = Apollo.MutationFunction<
  CreatePlaygroundMutation,
  CreatePlaygroundMutationVariables
>;
export type CreatePlaygroundComponentProps = Omit<
  ApolloReactComponents.MutationComponentOptions<
    CreatePlaygroundMutation,
    CreatePlaygroundMutationVariables
  >,
  'mutation'
>;

export const CreatePlaygroundComponent = (
  props: CreatePlaygroundComponentProps
) => (
  <ApolloReactComponents.Mutation<
    CreatePlaygroundMutation,
    CreatePlaygroundMutationVariables
  >
    mutation={CreatePlaygroundDocument}
    {...props}
  />
);

/**
 * __useCreatePlaygroundMutation__
 *
 * To run a mutation, you first call `useCreatePlaygroundMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaygroundMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaygroundMutation, { data, loading, error }] = useCreatePlaygroundMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePlaygroundMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePlaygroundMutation,
    CreatePlaygroundMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePlaygroundMutation,
    CreatePlaygroundMutationVariables
  >(CreatePlaygroundDocument, options);
}
export type CreatePlaygroundMutationHookResult = ReturnType<
  typeof useCreatePlaygroundMutation
>;
export type CreatePlaygroundMutationResult =
  Apollo.MutationResult<CreatePlaygroundMutation>;
export type CreatePlaygroundMutationOptions = Apollo.BaseMutationOptions<
  CreatePlaygroundMutation,
  CreatePlaygroundMutationVariables
>;
export const PlaygroundDetailDocument = gql`
  query PlaygroundDetail($playgroundId: Float!, $relations: [String!]) {
    playground(id: $playgroundId, relations: $relations) {
      id
      location {
        coordinates
      }
      coverImg {
        id
        variants
      }
      closeHour
      address
      name
      openDates
      openHour
      phone
      timeSlotUnit
      type
    }
  }
`;
export type PlaygroundDetailComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PlaygroundDetailQuery,
    PlaygroundDetailQueryVariables
  >,
  'query'
> &
  (
    | { variables: PlaygroundDetailQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const PlaygroundDetailComponent = (
  props: PlaygroundDetailComponentProps
) => (
  <ApolloReactComponents.Query<
    PlaygroundDetailQuery,
    PlaygroundDetailQueryVariables
  >
    query={PlaygroundDetailDocument}
    {...props}
  />
);

/**
 * __usePlaygroundDetailQuery__
 *
 * To run a query within a React component, call `usePlaygroundDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaygroundDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaygroundDetailQuery({
 *   variables: {
 *      playgroundId: // value for 'playgroundId'
 *      relations: // value for 'relations'
 *   },
 * });
 */
export function usePlaygroundDetailQuery(
  baseOptions: Apollo.QueryHookOptions<
    PlaygroundDetailQuery,
    PlaygroundDetailQueryVariables
  > &
    (
      | { variables: PlaygroundDetailQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PlaygroundDetailQuery, PlaygroundDetailQueryVariables>(
    PlaygroundDetailDocument,
    options
  );
}
export function usePlaygroundDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PlaygroundDetailQuery,
    PlaygroundDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PlaygroundDetailQuery,
    PlaygroundDetailQueryVariables
  >(PlaygroundDetailDocument, options);
}
export function usePlaygroundDetailSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PlaygroundDetailQuery,
    PlaygroundDetailQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PlaygroundDetailQuery,
    PlaygroundDetailQueryVariables
  >(PlaygroundDetailDocument, options);
}
export type PlaygroundDetailQueryHookResult = ReturnType<
  typeof usePlaygroundDetailQuery
>;
export type PlaygroundDetailLazyQueryHookResult = ReturnType<
  typeof usePlaygroundDetailLazyQuery
>;
export type PlaygroundDetailSuspenseQueryHookResult = ReturnType<
  typeof usePlaygroundDetailSuspenseQuery
>;
export type PlaygroundDetailQueryResult = Apollo.QueryResult<
  PlaygroundDetailQuery,
  PlaygroundDetailQueryVariables
>;
export const PaginatePlaygroundsDocument = gql`
  query PaginatePlaygrounds(
    $options: PaginatePlaygroundOptions!
    $relations: [String!]
  ) {
    paginatePlaygrounds(options: $options, relations: $relations) {
      items {
        id
        coverImg {
          variants
          id
        }
        type
        name
        closeHour
        address
        openHour
      }
      total
    }
  }
`;
export type PaginatePlaygroundsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    PaginatePlaygroundsQuery,
    PaginatePlaygroundsQueryVariables
  >,
  'query'
> &
  (
    | { variables: PaginatePlaygroundsQueryVariables; skip?: boolean }
    | { skip: boolean }
  );

export const PaginatePlaygroundsComponent = (
  props: PaginatePlaygroundsComponentProps
) => (
  <ApolloReactComponents.Query<
    PaginatePlaygroundsQuery,
    PaginatePlaygroundsQueryVariables
  >
    query={PaginatePlaygroundsDocument}
    {...props}
  />
);

/**
 * __usePaginatePlaygroundsQuery__
 *
 * To run a query within a React component, call `usePaginatePlaygroundsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatePlaygroundsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatePlaygroundsQuery({
 *   variables: {
 *      options: // value for 'options'
 *      relations: // value for 'relations'
 *   },
 * });
 */
export function usePaginatePlaygroundsQuery(
  baseOptions: Apollo.QueryHookOptions<
    PaginatePlaygroundsQuery,
    PaginatePlaygroundsQueryVariables
  > &
    (
      | { variables: PaginatePlaygroundsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    PaginatePlaygroundsQuery,
    PaginatePlaygroundsQueryVariables
  >(PaginatePlaygroundsDocument, options);
}
export function usePaginatePlaygroundsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PaginatePlaygroundsQuery,
    PaginatePlaygroundsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    PaginatePlaygroundsQuery,
    PaginatePlaygroundsQueryVariables
  >(PaginatePlaygroundsDocument, options);
}
export function usePaginatePlaygroundsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    PaginatePlaygroundsQuery,
    PaginatePlaygroundsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    PaginatePlaygroundsQuery,
    PaginatePlaygroundsQueryVariables
  >(PaginatePlaygroundsDocument, options);
}
export type PaginatePlaygroundsQueryHookResult = ReturnType<
  typeof usePaginatePlaygroundsQuery
>;
export type PaginatePlaygroundsLazyQueryHookResult = ReturnType<
  typeof usePaginatePlaygroundsLazyQuery
>;
export type PaginatePlaygroundsSuspenseQueryHookResult = ReturnType<
  typeof usePaginatePlaygroundsSuspenseQuery
>;
export type PaginatePlaygroundsQueryResult = Apollo.QueryResult<
  PaginatePlaygroundsQuery,
  PaginatePlaygroundsQueryVariables
>;

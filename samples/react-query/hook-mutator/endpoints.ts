/**
 * Generated by orval v6.14.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useMutation } from 'react-query';
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from 'react-query';
import type {
  Pets,
  Error,
  ListPetsParams,
  Pet,
  CreatePetsBody,
} from './models';
import { useCustomInstance } from './use-custom-instance';

type AwaitedInput<T> = PromiseLike<T> | T;

type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;

/**
 * @summary List all pets
 */
export const useListPetsHook = () => {
  const listPets = useCustomInstance<Pets>();

  return (params?: ListPetsParams, signal?: AbortSignal) => {
    return listPets({ url: `/pets`, method: 'get', params, signal });
  };
};

export const getListPetsQueryKey = (params?: ListPetsParams) =>
  [`/pets`, ...(params ? [params] : [])] as const;

export const useListPetsQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError = Error,
>(
  params?: ListPetsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getListPetsQueryKey(params);

  const listPets = useListPetsHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>
  > = ({ signal }) => listPets(params, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>
>;
export type ListPetsQueryError = Error;

export const useListPets = <
  TData = Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
  TError = Error,
>(
  params?: ListPetsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useListPetsHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useListPetsQueryOptions(params, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

/**
 * @summary Create a pet
 */
export const useCreatePetsHook = () => {
  const createPets = useCustomInstance<Pet>();

  return (createPetsBody: CreatePetsBody) => {
    return createPets({
      url: `/pets`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: createPetsBody,
    });
  };
};

export const useCreatePetsMutationOptions = <
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
  TError,
  { data: CreatePetsBody },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const createPets = useCreatePetsHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    { data: CreatePetsBody }
  > = (props) => {
    const { data } = props ?? {};

    return createPets(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = Error;

export const useCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useCreatePetsHook>>>,
    TError,
    { data: CreatePetsBody },
    TContext
  >;
}) => {
  const mutationOptions = useCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Info for a specific pet
 */
export const useShowPetByIdHook = () => {
  const showPetById = useCustomInstance<Pet>();

  return (petId: string, signal?: AbortSignal) => {
    return showPetById({ url: `/pets/${petId}`, method: 'get', signal });
  };
};

export const getShowPetByIdQueryKey = (petId: string) =>
  [`/pets/${petId}`] as const;

export const useShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError = Error,
>(
  petId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
      TError,
      TData
    >;
  },
): UseQueryOptions<
  Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId);

  const showPetById = useShowPetByIdHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>
  > = ({ signal }) => showPetById(petId, signal);

  return { queryKey, queryFn, enabled: !!petId, ...queryOptions };
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>
>;
export type ShowPetByIdQueryError = Error;

export const useShowPetById = <
  TData = Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
  TError = Error,
>(
  petId: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useShowPetByIdHook>>>,
      TError,
      TData
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useShowPetByIdQueryOptions(petId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

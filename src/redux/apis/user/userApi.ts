import { baseApi } from "../baseApi";

// Define types for the API response
interface User {
  id: string;
  fullName: string | null;
  userName: string;
  email: string;
  role: "USER" | "ADMIN" | string;
  profilePicture: string | null;
  coverPicture: string | null;
  userStatus: "ACTIVE" | "INACTIVE" | string;
  isOnline: boolean;
  isDeleted: boolean;
  otp: string | null;
  otpExpiry: string | null;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

interface UsersResponse {
  success: boolean;
  message: string;
  meta: Meta;
  data: User[];
}

interface UsersQueryParams {
  page?: number;
  limit?: number;
  searchTerm?: string;
  sort?: string;
}

export const UserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UsersResponse, UsersQueryParams>({
      query: (params) => ({
        url: "user",
        method: "GET",
        params: {
          page: params.page || 1,
          limit: params.limit || 10,
          ...(params.searchTerm && { searchTerm: params.searchTerm }),
          ...(params.sort && { sort: params.sort }),
        },
      }),
      providesTags: ["Users"], // For cache invalidation
    }),
  }),
});

export const { useGetUsersQuery } = UserApi;

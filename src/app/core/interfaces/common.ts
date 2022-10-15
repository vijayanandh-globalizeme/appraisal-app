export interface SuccessResponse {
  message: string;
}

export interface ErrorResponse {
  error: any;
  statusText: string;
  status: number;
}

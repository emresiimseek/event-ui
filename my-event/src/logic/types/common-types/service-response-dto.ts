export interface ServiceResponseDto<T = any> {
  model: T;
  errors: ErrorDto[];
}

export interface ErrorDto {
  errors: string[];
  statusCode: number;
}

export interface ServiceResponseDto<T> {
  model: T[];
  errors: ErrorDto[];
}

export interface ErrorDto {
  errors: string[];
  statusCode: number;
}

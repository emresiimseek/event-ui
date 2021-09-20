export interface ServiceResponseDto {
  model: any;
  errors: ErrorDto[];
}

export interface ErrorDto {
  errors: string[];
  statusCode: number;
}

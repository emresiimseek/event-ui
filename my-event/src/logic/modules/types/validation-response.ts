export interface ValidationResponse {
  errors: Record<string, string[]>;
  type: string;
  title: string;
  status: number;
  traceId: string;
}

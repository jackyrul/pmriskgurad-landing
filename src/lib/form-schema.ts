import * as z from "zod";

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(1, "This field is required"),
});

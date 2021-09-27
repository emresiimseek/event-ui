export interface UserProfileActivityDto {
  title: string;
  description: string;
  eventDate: string;
  activityCategories: CategoryDto[];
}

export interface CategoryDto {
  title: string;
  id: number;
}

import { UseFormSetValue } from 'react-hook-form';

type EventFormValues = {
  title: string;
  description: string;
  date: Date;
  location: string;
  image: string;
  isPublished: boolean;
  isFeatured: boolean;
  // Add other form fields as needed
};

type HandleCheckboxChange = (
  checked: boolean,
  field: keyof Pick<EventFormValues, 'isPublished' | 'isFeatured'>,
  setValue: UseFormSetValue<EventFormValues>
) => void;

export const handleCheckboxChange: HandleCheckboxChange = (checked, field, setValue) => {
  setValue(field, checked, { shouldDirty: true });
};

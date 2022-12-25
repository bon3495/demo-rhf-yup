import { SelectObjProps } from './components/FormController/models';

export interface FormDataProps {
  firstName: string;
  lastName: string;
  email: string;
  price: number;
  selectSong: SelectObjProps | null;
  startDate: Date | null;
  isEndDate: boolean;
  endDate: Date | null;
  linkUrl: string;
  awards: { title: string }[];
}

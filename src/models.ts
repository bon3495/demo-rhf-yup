import { SelectObjProps } from './components/FormController/models';

export interface FormDataProps {
  firstName: string;
  lastName: string;
  email: string;
  price: string;
  selectSong: SelectObjProps | null;
  startDate: Date | null;
  endDate: Date | null;
  linkUrl: string;
  awards: { title: string }[];
}

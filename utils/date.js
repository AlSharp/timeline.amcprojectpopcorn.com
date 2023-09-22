import { parse, format } from 'date-fns';

export const formatDate = (date, formatString) => {
  if (!formatString) return format(parse(date, 'MM/dd/yyyy', new Date()), 'MMM dd, yyyy')
  return format(parse(date), formatString);
}
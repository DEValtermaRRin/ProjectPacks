import { DateTime } from "luxon";

function getDateDiff(dateFrom, dateTo) {

  if (dateFrom > dateTo) {
    [dateFrom, dateTo] = [dateTo, dateFrom]
  }
  const dateFromObj = DateTime.fromISO(dateFrom);
  const dateToObj = DateTime.fromISO(dateTo)

  return dateToObj.diff(dateFromObj, ['years', 'months', 'days']).toObject()
}

export default getDateDiff;
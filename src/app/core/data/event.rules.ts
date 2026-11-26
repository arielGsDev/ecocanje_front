import { Status } from './event.model';

interface Schedulable {
  status: Status;
  /** First day of the item as an ISO date (YYYY-MM-DD). */
  startsOn?: string;
}

/** Local date as YYYY-MM-DD, so it compares with `startsOn` without time zone surprises. */
function toIsoDate(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

/**
 * An activity or stage can show photos only once it has actually happened:
 * - done and ongoing items have already taken place;
 * - a live item counts only when its start date has arrived (no date means we cannot tell, so no);
 * - soon and in-preparation items never show photos.
 */
export function hasTakenPlace(item: Schedulable, today: Date = new Date()): boolean {
  switch (item.status) {
    case 'done':
    case 'ongoing':
      return true;
    case 'live':
      return !!item.startsOn && item.startsOn <= toIsoDate(today);
    default:
      return false;
  }
}

import { hasTakenPlace } from './event.rules';

describe('hasTakenPlace', () => {
  const today = new Date(2026, 10, 26); // 26 Nov 2026 (local)

  it('allows photos for done and ongoing items', () => {
    expect(hasTakenPlace({ status: 'done' }, today)).toBe(true);
    expect(hasTakenPlace({ status: 'ongoing' }, today)).toBe(true);
  });

  it('never allows photos for soon or in-preparation items', () => {
    expect(hasTakenPlace({ status: 'soon', startsOn: '2026-01-01' }, today)).toBe(false);
    expect(hasTakenPlace({ status: 'prep' }, today)).toBe(false);
  });

  it('allows a live item only when its start date has arrived', () => {
    expect(hasTakenPlace({ status: 'live', startsOn: '2026-11-28' }, today)).toBe(false);
    expect(hasTakenPlace({ status: 'live', startsOn: '2026-11-26' }, today)).toBe(true);
    expect(hasTakenPlace({ status: 'live', startsOn: '2026-11-01' }, today)).toBe(true);
  });

  it('does not guess when a live item has no date', () => {
    expect(hasTakenPlace({ status: 'live' }, today)).toBe(false);
  });
});

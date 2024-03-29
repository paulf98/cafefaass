import React from 'react';

const OPENING_HOURS = [
  {
    day: 'Montag',
    openingHours: '05:30 - 18:00',
  },
  {
    day: 'Dienstag',
    openingHours: 'GESCHLOSSEN',
  },
  {
    day: 'Mittwoch',
    openingHours: '05:30 - 18:00',
  },
  {
    day: 'Donnerstag',
    openingHours: '05:30 - 18:00',
  },
  {
    day: 'Freitag',
    openingHours: '05:30 - 18:00',
  },
  {
    day: 'Samstag',
    openingHours: '05:30 - 18:00',
  },
  {
    day: 'Sonntag',
    openingHours: '06:30  - 12:00',
    openingHours2: '14:00  - 18:00',
  },
];

export default function OpeningHours() {
  return (
    <div>
      <h2 className="mb-4 text-center text-xl font-bold">Öffnungszeiten</h2>
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Tag</th>
            <th>Uhrzeit</th>
          </tr>
        </thead>
        <tbody>
          {OPENING_HOURS.map((openingHour) => {
            if (openingHour.openingHours2) {
              return (
                <React.Fragment key={openingHour.day}>
                  <tr key={openingHour.day}>
                    <td className="py-2">{openingHour.day}</td>
                    <td className="py-2">{openingHour.openingHours}</td>
                  </tr>
                  <tr key={openingHour.day + '_2'}>
                    <td className="py-2"></td>
                    <td className="py-2">{openingHour.openingHours2}</td>
                  </tr>
                </React.Fragment>
              );
            }
            return (
              <tr key={openingHour.day}>
                <td className="py-2">{openingHour.day}</td>
                <td className="py-2">{openingHour.openingHours}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

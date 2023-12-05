import { storyblokEditable } from '@storyblok/react';
import { BrotkalenderItemStoryblok } from '../types/component-types-sb';

export default function BrotkalenderItem({ blok }: { blok: BrotkalenderItemStoryblok }) {
  return (
    <tr {...storyblokEditable(blok)}>
      <th>{blok.name}</th>
      {blok.vorbestellung ? (
        <td colSpan={7} className="text-center font-medium text-teal-700">
          Nur auf Vorbestellung
        </td>
      ) : (
        <WochentageRows wochentage={blok.wochentage} />
      )}
    </tr>
  );
}

function CheckedItem() {
  return (
    <td>
      <span>&#9989;</span>
    </td>
  );
}

function UnCheckedItem() {
  return (
    <td>
      <span>&#10060;</span>
    </td>
  );
}

function WochentageRows({ wochentage }: any) {
  return (
    <>
      {wochentage.includes('mo') ? <CheckedItem /> : <UnCheckedItem />}
      {wochentage.includes('di') ? <CheckedItem /> : <UnCheckedItem />}
      {wochentage.includes('mi') ? <CheckedItem /> : <UnCheckedItem />}
      {wochentage.includes('do') ? <CheckedItem /> : <UnCheckedItem />}
      {wochentage.includes('fr') ? <CheckedItem /> : <UnCheckedItem />}
      {wochentage.includes('sa') ? <CheckedItem /> : <UnCheckedItem />}
      {wochentage.includes('so') ? <CheckedItem /> : <UnCheckedItem />}
    </>
  );
}

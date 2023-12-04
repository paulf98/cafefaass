import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import {
  type BrotkalenderItemStoryblok,
  type BrotkalenderStoryblok,
} from '../../component-types-sb';

export default function Brotkalender(blok: BrotkalenderStoryblok) {
  return (
    <div className="mx-auto max-w-xl overflow-x-auto" {...storyblokEditable(blok)}>
      <table className="table table-zebra table-pin-rows table-pin-cols table-sm">
        <thead>
          <tr>
            <th>Name</th>
            <td>MO</td>
            <td>DI</td>
            <td>MI</td>
            <td>DO</td>
            <td>FR</td>
            <td>SA</td>
            <td>SO</td>
          </tr>
        </thead>
        <tbody>
          {blok.items &&
            blok.items
              .sort((a: BrotkalenderItemStoryblok, b: BrotkalenderItemStoryblok) =>
                (a.name || '').localeCompare(b.name || ''),
              )
              .map((item: any, index: number) => (
                <>
                  {index !== 0 && index % 10 === 0 && (
                    <tr key={index}>
                      <th></th>
                      <td>MO</td>
                      <td>DI</td>
                      <td>MI</td>
                      <td>DO</td>
                      <td>FR</td>
                      <td>SA</td>
                      <td>SO</td>
                    </tr>
                  )}
                  <StoryblokComponent blok={item} key={item._uid} />
                </>
              ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Name</th>
            <td>MO</td>
            <td>DI</td>
            <td>MI</td>
            <td>DO</td>
            <td>FR</td>
            <td>SA</td>
            <td>SO</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

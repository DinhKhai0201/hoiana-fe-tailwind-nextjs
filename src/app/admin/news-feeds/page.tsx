'use client';

import NewsFeedItem from 'components/admin/default/NewsFeedItem';

const NEWSFEEDS = [
  {
    id: 1,
    uri: 'https://hoiana-testing.vercel.app/img/example/pdf.pdf',
    type: 'pdf',
    description: "Hoiana Resort & Golf combines stylish accommodation, world-class golf and exhilarating entertainment in Vietnam's first and finest integrated resort."
  },
  {
    id: 3,
    uri: 'https://hoiana-testing.vercel.app/img/example/1.webp',
    type: 'jpg',
    description: "Hoiana Resort & Golf combines stylish accommodation, world-class golf and exhilarating entertainment in Vietnam's first and finest integrated resort."
  },
  {
    id: 4,
    uri: 'https://hoiana-testing.vercel.app/img/example/gif.gif',
    type: 'gif',
    description: "gif"
  },
  {
    id: 5,
    uri: 'https://hoiana-testing.vercel.app/img/example/mp4.mp4',
    type: 'mp4',
    description: "mp4"
  },
  {
    id: 6,
    uri:'https://hoiana-testing.vercel.app/img/example/xlsx.xlsx',
    type: 'xlsx',
    description: "xlsx"
  },
  {
    id: 6,
    uri:'https://hoiana-testing.vercel.app/img/example/docx.docx',
    type: 'docx',
    description: "docx"
  },
  {
    id: 7,
    uri:'https://hoiana-testing.vercel.app/img/example/ppt.ppt',
    type: 'ppt',
    description: "ppt"
  },
];

export default function NewsFeedPage({}) {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div className="col-span-4 xl:col-span-3">
          <div className="mb-5">
            <div className="flex flex-col h-full gap-10">
              {NEWSFEEDS.map((item) => {
                return <NewsFeedItem key={item.id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

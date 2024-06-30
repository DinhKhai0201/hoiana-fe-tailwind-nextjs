'use client';

import NewsFeedItem from 'components/admin/default/NewsFeedItem';

const ANNOUNCEMENT = [
  {
    id: 1,
    uri: 'https://hoiana-testing.vercel.app/img/example/1.webp',
    type: 'jpg',
    description: "important announcement"
  },
  {
    id: 2,
    uri: 'https://hoiana-testing.vercel.app/img/example/sample.pdf',
    type: 'pdf',
    description: "Monthly report"
  },
];

export default function AnnouncementPage({}) {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div className="col-span-3">
          <div className="mb-5">
            <div className="flex flex-col h-full gap-10">
              {ANNOUNCEMENT.map((item) => {
                return <NewsFeedItem key={item.id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

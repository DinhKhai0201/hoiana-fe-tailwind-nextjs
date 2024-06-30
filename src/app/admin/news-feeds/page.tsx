'use client';

import NewsFeedItem from 'components/admin/default/NewsFeedItem';

const NEWSFEEDS = [
  {
    id: 1,
    uri: 'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf',
    type: 'pdf',
    description: "Hoiana Resort & Golf combines stylish accommodation, world-class golf and exhilarating entertainment in Vietnam's first and finest integrated resort."
  },
  {
    id: 2,
    uri: 'https://pdfobject.com/pdf/sample.pdf',
    type: 'pdf',
    description: "Hoiana Resort & Golf combines stylish accommodation, world-class golf and exhilarating entertainment in Vietnam's first and finest integrated resort."
  },
  {
    id: 3,
    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blank_page_intentionally_end_of_book.jpg/640px-Blank_page_intentionally_end_of_book.jpg',
    type: 'jpg',
    description: "Hoiana Resort & Golf combines stylish accommodation, world-class golf and exhilarating entertainment in Vietnam's first and finest integrated resort."
  },
  {
    id: 4,
    uri: 'https://res.cloudinary.com/cloudinary-marketing/images/c_fill,w_700/f_auto,q_auto/v1649720751/Web_Assets/blog/Mario_1/Mario_1-gif?_i=AA',
    type: 'gif',
    description: "Hoiana Resort & Golf combines stylish accommodation, world-class golf and exhilarating entertainment in Vietnam's first and finest integrated resort."
  },
  {
    id: 5,
    uri: 'https://freetestdata.com/wp-content/uploads/2022/02/Free_Test_Data_2MB_MP4.mp4',
    type: 'mp4',
    description: "Hoiana Resort & Golf combines stylish accommodation, world-class golf and exhilarating entertainment in Vietnam's first and finest integrated resort."
  },
  {
    id: 6,
    uri: 'https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_300KB_XLSX.xlsx',
    type: 'xlsx',
    description: "Hoiana Resort & Golf combines stylish accommodation, world-class golf and exhilarating entertainment in Vietnam's first and finest integrated resort."
  },
];

export default function NewsFeedPage({}) {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-4">
        <div className="col-span-3">
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

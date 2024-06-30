import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import '@cyntler/react-doc-viewer/dist/index.css';
import Card from 'components/card';
import { Image } from 'components/image/Image';
import { AiOutlineLike } from 'react-icons/ai';
import { CiCircleCheck } from 'react-icons/ci';

interface INewsFeedItem {
  uri?: string;
  type?: string;
  description?: string;
  disableHeader?: boolean;
}
const NewsFeedItem = ({
  uri = 'https://hoiana-testing.vercel.app/img/example/4.webp',
  type = 'png',
  description = '',
  disableHeader = false,
}: INewsFeedItem) => {
  return (
    <Card extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white`}>
      <div>
        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="flex items-center gap-2">
            <div className=" h-8 w-8 rounded-full border border-white dark:!border-navy-800">
              <Image
                width="2"
                height="20"
                className="h-full w-full rounded-full object-cover"
                src={
                  'https://hoiana.com/wp-content/uploads/2024/06/Nox-Hero-Slider.jpg'
                }
                alt=""
              />
            </div>
            <p>
              <strong>Human Recources Divison</strong> posted
            </p>
          </div>
          <div className="mb-2">
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              2d ago
            </p>
          </div>
        </div>
        <div className="mt-b">{description}</div>
        <div> <DocViewer
          prefetchMethod="GET"
          config={{
            header: {
              disableHeader,
              disableFileName: true,
              retainURLParams: false,
            },
            csvDelimiter: ',', // "," as default,
            pdfZoom: {
              defaultZoom: 1.1, // 1 as default,
              zoomJump: 0.2, // 0.1 as default,
            },
            pdfVerticalScrollByDefault: true, // false as default
          }}
          documents={[{ uri }]}
          pluginRenderers={DocViewerRenderers}
        /></div>
       
        {/* <img
          className="rounded-xl "
          src={
            url
          }
          alt=""
        /> */}
        <div className="mt-4 flex items-center gap-10">
          <div className="flex items-center gap-2">
            <CiCircleCheck className="h-8 w-8" />
            <p>399</p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineLike className="h-8 w-8" />
            <p>720</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default NewsFeedItem;

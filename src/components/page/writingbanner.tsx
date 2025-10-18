import React from 'react';
import { Banner } from 'fumadocs-ui/components/banner';

export const WritingBanner: React.FC = () => {
  return (
    <Banner
      variant="rainbow"
      rainbowColors={[
        '#FFFCF0',
      ]}
      changeLayout={false}
      className="text-[#F43900] dark:text-[#fff] rounded-2xl "
    >
      此文档正在编写...
    </Banner>
  );
};

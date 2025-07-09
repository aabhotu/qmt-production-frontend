import { IMenuItem, ISocials } from '@/types';

export const footerDetails: {
  subheading: string;
  quickLinks: IMenuItem[];
  email: string;
  facebook: string;
  telephone: string;
  socials: ISocials;
  address: string;
} = {
  subheading:
    'Với những thành công bước đầu cùng nền tảng vững chắc về kỹ thuật công nghệ, đặc biệt là được sự tin tưởng yêu mến của quý khách hàng. Toàn thể cán bộ nhân viên công ty tin tưởng thương hiệu sơn sẽ ngày càng phát triển trở thành một trong những thương hiệu hàng đầu tại Việt Nam.',
  quickLinks: [
    {
      text: 'Giới thiệu',
      url: '#about',
    },
    {
      text: 'Sản phẩm',
      url: '#products',
    },
    {
      text: 'Dự án',
      url: '#projects',
    },
    {
      text: 'Liên hệ',
      url: 'contract',
    },
  ],
  email: 'congtyquangminh20a@gmail.com',
  facebook:
    'https://www.facebook.com/people/Vikko-V%E1%BA%ADt-li%E1%BB%87u-chu%E1%BA%A9n-C%C3%B4ng-tr%C3%ACnh-ch%E1%BA%A5t/61576805484571/',
  telephone: '0825098189',
  socials: {
    website: 'https://vikko.vn',
  },
  address: 'Số nhà 20A, Tổ 8, Phường Chùa Hang, Thành phố Thái Nguyên, Tỉnh Thái Nguyên',
};

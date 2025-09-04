export type ServiceType = {
  category: string;
  items: string[];
};

export const SERVICE_LIST: ServiceType[] = [
  {
    category: 'Bán cam tươi',
    items: [
      'Bán lẻ theo kg (1kg, 3kg, 5kg, 10kg)',
      'Combo gia đình (cam loại 1 + cam loại 2 giá ưu đãi)',
      'Cam tuyển chọn để biếu tặng (đóng hộp/giỏ quà)',
      'Cam giao tận nơi trong ngày',
    ],
  },
  {
    category: 'Nước ép cam sành',
    items: [
      'Nước ép chai 330ml – 500ml (dùng cá nhân)',
      'Nước ép chai 1L – 2L (gia đình, nhóm bạn)',
      'Giao nước ép tận nơi (giữ lạnh, giao trong vòng 2–4h)',
      'Nước ép đặt theo số lượng lớn cho văn phòng, sự kiện, hội nghị',
      'Nước ép cho tiệc sinh nhật, cưới hỏi',
    ],
  },
  {
    category: 'Combo & gói dịch vụ',
    items: [
      "Combo 'Cam + Nước ép': Mua cam tươi kèm nước ép",
      'Gói văn phòng: Giao định kỳ hàng tuần cam tươi hoặc nước ép',
      'Gói biếu tặng sức khỏe: Cam + mật ong + gừng (đóng hộp)',
    ],
  },
  {
    category: 'Dịch vụ kèm theo',
    items: [
      'Đặt trước & giao theo giờ yêu cầu',
      'Đóng gói đẹp, sang trọng cho quà tặng',
      'Bán kèm dụng cụ ép cam mini hoặc cốc giữ nhiệt',
      'Chương trình khách hàng thân thiết (mua X lần tặng 1 lần)',
    ],
  },
];

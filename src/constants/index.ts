import tinh_tp from './tinh_tp.json';
export const HEIGHT_EACH_PAGE_REVIEW = 1500;

export const ProvinceData = Object.values(tinh_tp).map((el) => el.name_with_type);

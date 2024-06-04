export type ILightNodeItem = {
  base_batch_number: number;
  per_page: number;
  total: number;
  total_pages: number;
  batch_data: any;
};

export type ILightNodeStatusResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ILightNodeItem[];
};

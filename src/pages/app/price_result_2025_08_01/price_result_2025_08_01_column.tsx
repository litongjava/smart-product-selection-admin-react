import { ProColumns } from '@ant-design/pro-components';

export const price_result_2025_08_01_columns = (): ProColumns<any>[] => [
  {
    title: 'Image Url',
    dataIndex: 'image_url',
    valueType: 'image',
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    valueType: 'text',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    valueType: 'text',
  },
  {
    title: 'Upc',
    dataIndex: 'upc',
    valueType: 'text',
  },
  {
    title: 'Asin',
    dataIndex: 'asin',
    valueType: 'text',
  },
  {
    title: 'Profit',
    dataIndex: 'profit',
    valueType: 'text',
  },
  {
    title: 'Kehe Price',
    dataIndex: 'kehe_price',
    valueType: 'text',
  },
  {
    title: 'Uom',
    dataIndex: 'uom',
    valueType: 'text',
  },
  {
    title: 'Case Pack',
    dataIndex: 'case_pack',
    valueType: 'text',
  },
  {
    title: 'Pack Count',
    dataIndex: 'pack_count',
    valueType: 'text',
  },
  {
    title: 'Actual Price',
    dataIndex: 'actual_price',
    valueType: 'text',
  },
  {
    title: 'Actual Cost',
    dataIndex: 'actual_cost',
    valueType: 'text',
  },
  {
    title: 'Commission',
    dataIndex: 'commission',
    valueType: 'text',
  },
  {
    title: 'Amazon Price',
    dataIndex: 'amazon_price',
    valueType: 'text',
  },
  {
    title: 'Amazon Ref Percent',
    dataIndex: 'amazon_ref_percent',
    valueType: 'text',
  },
  {
    title: 'Amazon Fba Fees',
    dataIndex: 'amazon_fba_fees',
    valueType: 'text',
  },
  {
    title: 'Kehe Url',
    dataIndex: 'kehe_url',
    valueType: 'text',
    ellipsis: true,
    copyable: true,
  },
  {
    title: 'Amazon Url',
    dataIndex: 'amazon_url',
    valueType: 'text',
    ellipsis: true,
    copyable: true,
  },

  // --- 更新时间（展示 & 筛选）---
  {
    title: 'Update Time',
    dataIndex: 'update_time',
    valueType: 'dateTime',
    hideInTable: false,
    hideInSearch: true,
    hideInForm: true,
  },
  {
    key: 'update_time',
    title: 'Update Time',
    dataIndex: 'update_time_range',
    valueType: 'dateTimeRange',
    hideInTable: true, // 仅用于搜索
    hideInForm: true,
    hideInDescriptions: true,
  },
];

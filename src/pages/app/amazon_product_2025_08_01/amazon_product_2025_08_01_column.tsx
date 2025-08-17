import { ProColumns } from '@ant-design/pro-components';

const trueFalseOptions = [
  { label: 'true', value: true },
  { label: 'false', value: false },
];

export const amazon_product_2025_08_01_columns = (): ProColumns<any>[] => [
  {
    title: 'Main Image Url',
    dataIndex: 'main_image_url',
    valueType: 'image',
  },
  {
    "title": "Asin",
    "dataIndex": "asin",
    "valueType": "text",
    ellipsis: true,
    copyable: true,

  },
  {
    "title": "Upc",
    "dataIndex": "upc",
    "valueType": "text",
    ellipsis: true,
    copyable: true,
  },
  {
    "title": "amazon_url",
    "dataIndex": "amazon_url",
    "valueType": "text",
    ellipsis: true,
    copyable: true,
  },
  {
    "title": "kehe_url",
    "dataIndex": "kehe_url",
    "valueType": "text",
    ellipsis: true,
    copyable: true,
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
    valueType: 'text',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    valueType: 'textarea',
    ellipsis: true,
    copyable: true,
  },
  {
    title: 'Category Breadcrumb',
    dataIndex: 'category_breadcrumb',
    valueType: 'textarea',
    ellipsis: true,
    copyable: true,
  },
  {
    title: 'Uom',
    dataIndex: 'uom',
    valueType: 'text',
  },
  {
    title: 'Uom Size',
    dataIndex: 'uom_size',
    valueType: 'text',
  },
  {
    title: 'Pack Count',
    dataIndex: 'pack_count',
    valueType: 'text',
  },
  {
    title: 'Sale Price',
    dataIndex: 'sale_price',
    valueType: 'text',
  },
  {
    title: 'Coupon Amount',
    dataIndex: 'coupon_amount',
    valueType: 'text',
    hideInTable: true,
  },
  {
    title: 'Coupon Percent',
    dataIndex: 'coupon_percent',
    valueType: 'text',
    hideInTable: true,
  },
  {
    title: 'Subscribe Save Percent',
    dataIndex: 'subscribe_save_percent',
    valueType: 'text',
    hideInTable: true,
  },
  {
    title: 'Deal Badge',
    dataIndex: 'deal_badge',
    valueType: 'text',
    hideInTable: true,
  },
  {
    title: 'Seller',
    dataIndex: 'seller',
    valueType: 'text',
    hideInTable: true,
  },
  {
    title: 'Fulfillment',
    dataIndex: 'fulfillment',
    valueType: 'text',
  },
  {
    title: 'Prime Eligible',
    dataIndex: 'prime_eligible',
    valueType: 'text',
    hideInTable: true,
  },
  {
    title: 'Availability Status',
    dataIndex: 'availability_status',
    valueType: 'text',
    ellipsis: true,
    copyable: true,
  },
  {
    title: 'In Stock',
    dataIndex: 'in_stock',
    "valueType": "select",
    fieldProps:{
      options:trueFalseOptions
    }
  },
  {
    title: 'Rating',
    dataIndex: 'rating',
    valueType: 'text',
  },
  {
    title: 'Reviews Count',
    dataIndex: 'reviews_count',
    valueType: 'text',
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

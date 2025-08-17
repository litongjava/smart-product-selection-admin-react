import { ProColumns } from '@ant-design/pro-components';

export const kehe_product_2025_08_10_columns = (): ProColumns<any>[] => [
  {
    title: 'Image',
    dataIndex: 'thumbnail_image_url',
    valueType: 'image',
    width: 72,
    hideInTable: false,
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
    title: 'Name',
    dataIndex: 'name',
    valueType: 'text',
    ellipsis: true,
    copyable: true,
    hideInTable: false,
  },
  {
    title: 'Brand',
    dataIndex: 'brand_name',
    valueType: 'text',
    hideInTable: false,
  },
  {
    title: 'KeHE ID',
    dataIndex: 'kehe_id',
    valueType: 'text',
    hideInTable: false,
  },

  // --- 分类信息（展示精简，筛选更好用）---
  {
    title: 'Category',
    dataIndex: 'category_name',
    valueType: 'text',
    ellipsis: true,
    hideInTable: false,
  },
  {
    title: 'Sub Category',
    dataIndex: 'sub_category_name',
    valueType: 'text',
    ellipsis: true,
    hideInTable: false,
  },

  // --- 规格 ---
  {
    title: 'Pack Size',
    dataIndex: 'pack_size',
    valueType: 'text',
    hideInTable: false,
  },
  {
    title: 'Case Pack',
    dataIndex: 'case_pack',
    valueType: 'text',
    hideInTable: false,
  },
  {
    title: 'UOM',
    dataIndex: 'uom',
    valueType: 'text',
    hideInTable: false,
  },
  {
    title: 'UOM Size',
    dataIndex: 'uom_size',
    valueType: 'text',
    hideInTable: false,
  },

  // --- 价格（核心字段）---
  {
    title: 'Wholesale',
    dataIndex: 'wholesale_price',
    valueType: 'money',
    hideInTable: false,
  },
  {
    title: 'Retail',
    dataIndex: 'retail_price',
    valueType: 'money',
    hideInTable: false,
  },
  {
    title: 'Catalog',
    dataIndex: 'catalog_price',
    valueType: 'money',
    hideInTable: false,
  },
  {
    title: 'Customer Price',
    dataIndex: 'customer_price',
    valueType: 'money',
    hideInTable: false,
  },

  // --- 库存与促销 ---
  {
    title: 'On Hand',
    dataIndex: 'quantity_on_hand',
    valueType: 'digit',
    hideInTable: false,
  },
  {
    title: 'Available',
    dataIndex: 'available_count',
    valueType: 'digit',
    hideInTable: true,
  },
  {
    title: 'Promo',
    dataIndex: 'item_on_promotion',
    valueType: 'switch',
    hideInTable: false,
  },
  {
    title: 'Future Promo',
    dataIndex: 'item_on_future_promotion',
    valueType: 'switch',
    hideInTable: false,
  },

  // --- 合规/状态 ---
  {
    title: 'Status',
    dataIndex: 'status',
    valueType: 'text',
    hideInTable: false,
  },
  {
    title: 'Perishable',
    dataIndex: 'is_perishable',
    valueType: 'text',
    hideInTable: true,
  },
  {
    title: 'Active',
    dataIndex: 'is_active',
    valueType: 'text',
    hideInTable: true,
  },

  // --- 其它有用信息（精简展示）---
  {
    title: 'Traits',
    dataIndex: 'product_traits',
    valueType: 'textarea',
    ellipsis: true,
    hideInTable: false,
  },
  {
    title: 'Country',
    dataIndex: 'country_of_origin',
    valueType: 'text',
    hideInTable: false,
  },
  {
    title: 'Supplier',
    dataIndex: 'primary_supplier_name',
    valueType: 'text',
    ellipsis: true,
    hideInTable: true,
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
    hideInTable: true,         // 仅用于搜索
    hideInForm: true,
    hideInDescriptions: true,
  },

  // --- 仅用于搜索的隐藏列（根据需要保留）---
  { title: 'DC', dataIndex: 'dc', valueType: 'text', hideInTable: true },
  { title: 'Buyer', dataIndex: 'buyer_name', valueType: 'text', hideInTable: true },
  { title: 'GBB', dataIndex: 'good_better_best', valueType: 'text', hideInTable: true },
  { title: 'Category Code', dataIndex: 'category_code', valueType: 'text', hideInTable: true },
  { title: 'Shipping Cond.', dataIndex: 'shipping_condition_code', valueType: 'text', hideInTable: true },
  { title: 'Is New', dataIndex: 'is_new', valueType: 'text', hideInTable: true },
  { title: 'Is Constrained', dataIndex: 'is_constrained', valueType: 'text', hideInTable: true },
  { title: 'In Customer DC', dataIndex: 'is_in_customer_dc', valueType: 'text', hideInTable: true },
];

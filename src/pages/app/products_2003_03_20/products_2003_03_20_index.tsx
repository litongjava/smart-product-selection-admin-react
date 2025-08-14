import ApiTable from '@/components/common/ApiTable';
import { products_2003_03_20_columns } from '@/pages/app/products_2003_03_20/products_2003_03_20_column';

export default () => {
  const from = 'products_2003_03_20';
  const beforePageRequest = (params: any, isRecoveryMode?: boolean) => {
    params.idType = 'long';

    if (isRecoveryMode) {
      params.deleted = 1;
    } else {
      params.deleted = 0;
    }
    params.remarkOp = 'ct';
    params.orderBy = 'update_time';
    params.isAsc = 'false';
    params.update_time_type = 'string[]';
    params.update_time_op = 'bt';

    params.keyNameOp = 'ct';
    params.keyValueOp = 'ct';

    return params;
  };

  const beforeCreateRequest = (formValues: any) => {
    return {
      ...formValues,
      idType: 'long',
    };
  };
  return (
    <ApiTable
      from={from}
      columns={products_2003_03_20_columns()}
      beforePageRequest={beforePageRequest}
      beforeCreateRequest={beforeCreateRequest}
    />
  );
};

import ApiTable from '@/components/common/ApiTable';
import { price_result_2025_08_01_columns } from '@/pages/app/price_result_2025_08_01/price_result_2025_08_01_column';

export default () => {
  const from = 'price_result_2025_08_01';
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
      columns={price_result_2025_08_01_columns()}
      beforePageRequest={beforePageRequest}
      beforeCreateRequest={beforeCreateRequest}
      editable={false}
      removable={false}
    />
  );
};

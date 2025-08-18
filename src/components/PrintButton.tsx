import { PrinterOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import {buildPrintHTML} from "@/components/common/utils";

export interface PrintButtonProps {
  data: Record<string, any>;
  keys: string[];
  hideEmpty: boolean;
  titleMap?: Record<string, React.ReactNode>;
  title?: React.ReactNode;
  printTitle?: string;
  text?: string;
}

export const PrintButton: React.FC<PrintButtonProps> = ({
  data,
  keys,
  hideEmpty,
  titleMap,
  title,
  printTitle,
  text = 'Print',
}) => {
  const onPrint = React.useCallback(() => {
    const win = window.open('', '_blank');
    if (!win) return;
    const html = buildPrintHTML({ data, keys, hideEmpty, titleMap, title, printTitle });
    win.document.open();
    win.document.write(html);
    win.document.close();
  }, [data, keys, hideEmpty, titleMap, title, printTitle]);

  return (
    <Button icon={<PrinterOutlined />} onClick={onPrint}>
      {text}
    </Button>
  );
};

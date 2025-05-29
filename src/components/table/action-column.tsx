import { useCommonTranslation } from '@/hooks';
import { Popconfirm } from 'antd';

interface IActionColumn {
  onEdit: () => void;
  onDelete: () => void;
}

export default function ActionColumn(props: IActionColumn) {
  const commonTrans = useCommonTranslation();
  return (
    <div className="flex gap-2">
      <Popconfirm
        onConfirm={props.onDelete}
        title={commonTrans('Are you sure you want to delete this item?')}
      >
        <button className="text-zinc-400 hover:text-red-500 transition-all duration-300">
          {commonTrans('Delete')}
        </button>
      </Popconfirm>
      <button
        className="text-zinc-400 hover:text-primary transition-all duration-300"
        onClick={props.onEdit}
      >
        {commonTrans('Edit')}
      </button>
    </div>
  );
}

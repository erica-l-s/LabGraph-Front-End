import React from 'react';
import { ListingTableProps } from '../types/ListiningTable';


const ListingTable: React.FC<ListingTableProps> = ({ items }) => {
  return (
    <div className='flex flex-col justify-between w-full h-min'>
      <table className='hidden border border-double rounded-lg shadow-md border-textSecondary bg-background md:table'>
        <thead className='bg-muted'>
          <tr>
            <th className='border-b border-border px-4 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-textSecondary md:text-xs'>
              Date
            </th>
            <th className='border-b border-border px-4 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-textSecondary md:text-xs'>
              Test
            </th>
            <th className='border-b border-border px-4 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-textSecondary md:text-xs'>
              Level
            </th>
            <th className='border-b border-border px-4 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-textSecondary md:text-xs'>
              Lot
            </th>
            <th className='border-b border-border px-4 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-textSecondary md:text-xs'>
              Standard Deviation
            </th>
            <th className='border-b border-border px-4 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-textSecondary md:text-xs'>
              Mean
            </th>
            <th className='border-b border-border px-4 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-textSecondary md:text-xs'>
              Values
            </th>
            <th className='border-b border-border px-4 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-textSecondary md:text-xs'>
              Unit
            </th>
            <th className='border-b border-border px-4 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-textSecondary md:text-xs'>
              Rules
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className='transition-colors duration-200 hover:bg-muted'>
              <td className='border-b border-border px-4 py-3 text-[6px] text-textPrimary md:text-sm'>
                {item.date}
              </td>
              <td className='border-b border-border px-4 py-3 text-[6px] text-textPrimary md:text-sm'>
                {item.name}
              </td>
              <td className='border-b border-border px-4 py-3 text-[6px] text-textPrimary md:text-sm'>
                {item.level}
              </td>
              <td className='border-b border-border px-4 py-3 text-[6px] text-textPrimary md:text-sm'>
                {item.level_lot}
              </td>
              <td className='border-b border-border px-4 py-3 text-[6px] text-textPrimary md:text-sm'>
                {item.sd.toFixed(2)}
              </td>
              <td className='border-b border-border px-4 py-3 text-[6px] text-textPrimary md:text-sm'>
                {item.mean.toFixed(2)}
              </td>
              <td className='border-b border-border px-4 py-3 text-[6px] text-textPrimary md:text-sm'>
                {item.value.toFixed(2)}
              </td>
              <td className='border-b border-border px-4 py-3 text-[6px] text-textPrimary md:text-sm'>
                {item.unit_value}
              </td>
              <td className='border-b border-border px-4 py-3 text-[6px] text-textPrimary md:text-sm'>
                {item.rules}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='grid content-center justify-center grid-cols-4 gap-4 px-2 text-center md:hidden'>
        {items.map((item, index) => (
          <div key={index} className='p-2 border rounded-md shadow-md border-border bg-surface'>
            <p className='text-[6px] font-semibold text-textSecondary'>
              Test: <span className='text-textPrimary'>{item.name}</span>
            </p>
            <p className='text-[6px] font-semibold text-textSecondary'>
              Level: <span className='text-textPrimary'>{item.level}</span>
            </p>
            <p className='text-[6px] font-semibold text-textSecondary'>
              Standard Deviation: <span className='text-textPrimary'>{item.sd.toFixed(2)}</span>
            </p>
            <p className='text-[6px] font-semibold text-textSecondary'>
              Mean: <span className='text-textPrimary'>{item.mean.toFixed(2)}</span>
            </p>
            <p className='text-[6px] font-semibold text-textSecondary'>
              Date: <span className='text-textPrimary'>{item.date}</span>
            </p>
            <p className='text-[6px] font-semibold text-textSecondary'>
              Values: <span className='text-textPrimary'>{item.value.toFixed(2)}</span>
            </p>
            <p className='text-[6px] font-semibold text-textSecondary'>
              Unit: <span className='text-textPrimary'>{item.unit_value}</span>
            </p>
            <p className='text-[6px] font-semibold text-textSecondary'>
              Rules: <span className='text-textPrimary'>{item.rules}</span>
            </p>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className='py-2 text-center bg-background text-muted'>No items to display</div>
      )}


    </div>
  );
};

export default ListingTable;

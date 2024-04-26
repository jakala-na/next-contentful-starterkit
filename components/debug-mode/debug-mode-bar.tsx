'use client';

import { useState } from 'react';

import { Table, TableBody, TableCell, TableRow } from '../ui/table';
import { DebugModeTrigger } from './debug-mode-trigger';

export const DebugModeBar = ({ rows }: { rows: [string, string][] }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <DebugModeTrigger
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      />
      {isActive ? (
        <div className="fixed inset-x-0 bottom-0 z-40 bg-white p-4 shadow-lg">
          <Table>
            <TableBody>
              {rows.map(([label, value]) => (
                <TableRow key={label}>
                  <TableCell className="font-semibold">{label}</TableCell>
                  <TableCell>{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : null}
    </>
  );
};

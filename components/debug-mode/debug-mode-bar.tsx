"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import { DebugModeTrigger } from "./debug-mode-trigger";

export const DebugModeBar = ({
  slug,
}: {
  isDraftMode: boolean;
  slug: string;
}) => {
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
              <TableRow>
                <TableCell className="font-semibold">Page Slug</TableCell>
                <TableCell>{slug}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Render time: </TableCell>
                <TableCell>{new Date().toTimeString()}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : null}
    </>
  );
};

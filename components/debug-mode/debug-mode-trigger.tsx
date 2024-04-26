import { Bug, BugOff } from 'lucide-react';

import { Button } from '../ui/button';

export function DebugModeTrigger({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button className="p-4" onClick={onClick}>
        {isActive ? <BugOff /> : <Bug />}
      </Button>
    </div>
  );
}

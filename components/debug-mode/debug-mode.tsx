import { DebugModeBar } from "./debug-mode-bar";

export default function DebugMode({ slug }: { slug: string }) {
  return (
    <DebugModeBar
      rows={[
        ["Slug", slug],
        ["Render time", new Date().toUTCString()],
      ]}
    />
  );
}

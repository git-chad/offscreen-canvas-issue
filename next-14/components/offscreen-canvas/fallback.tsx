export default function Fallback(): any {
  console.log("offscreen canvas failed to render worker, falling back");
  return null;
}

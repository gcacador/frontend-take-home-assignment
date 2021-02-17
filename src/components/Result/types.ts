export interface ResultProps {
  label: string;
  value: number;
  elRef: React.MutableRefObject<HTMLDivElement | null>;
  text?: string | JSX.Element;
}

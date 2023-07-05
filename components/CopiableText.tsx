import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy } from "react-icons/fi";

export default function CopiableText({ text, value }) {

  return (
    <CopyToClipboard text={value}>
      <span className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-slate-50 transition-all duration-300">
        {text}
        <FiCopy className="ml-4" />
      </span>
    </CopyToClipboard>
  );
}

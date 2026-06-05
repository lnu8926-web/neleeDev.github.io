"use client";

import { Mail } from "lucide-react";
import { toast } from "sonner";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  idleLabel?: string;
}

export default function CopyEmailButton({
  email,
  className = "",
  idleLabel = "Email 복사",
}: CopyEmailButtonProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("이메일이 복사되었습니다.", {
        style: {
          background: "#FF85B3",
          color: "#111111",
          border: "1px solid rgba(17, 17, 17, 0.35)",
        },
      });
    } catch {
      toast.error("복사에 실패했습니다. 다시 시도해 주세요.", {
        style: {
          background: "#3A111F",
          color: "#F0F0F0",
          border: "1px solid rgba(255, 133, 179, 0.35)",
        },
      });
    }
  };

  return (
    <button type="button" onClick={handleCopy} className={className}>
      <Mail size={13} strokeWidth={2.5} />
      {idleLabel}
    </button>
  );
}

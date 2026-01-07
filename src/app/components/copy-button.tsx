"use client";

import { Check, Copy } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useLanguage } from "../contexts/language-context";
import { getContent } from "../../lib/content";

interface CopyButtonProps {
  text: string;
  label?: string;
}

export function CopyButton({ text, label }: CopyButtonProps) {
  const { language } = useLanguage();
  const { ui } = getContent(language);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      const labelText = label || ui.copyButton.textLabel;
      const message = ui.copyButton.copiedToast.replace("{label}", labelText);
      toast.success(message);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error(ui.copyButton.failed);
    }
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        className="gap-2"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-green-500" />
            {ui.copyButton.copied}
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            {ui.copyButton.copy}
          </>
        )}
      </Button>
    </motion.div>
  );
}

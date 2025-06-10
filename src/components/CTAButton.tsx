import Link from "next/link";
import { Button } from "./ui/button";
interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
}

export default function CTAButton({ children, href = "#" }: CTAButtonProps) {
  return (
    <Button variant="cta" asChild>
      <Link href={href}>
        {children}
      </Link>
    </Button>
  );
}

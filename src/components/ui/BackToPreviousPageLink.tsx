import { Button, Icons } from "@instill-ai/design-system";
import { useRouter } from "next/router";

export type BackToPreviousPageLinkProps = {
  url: string;
  marginBottom?: string;
  label?: string;
};

export const BackToPreviousPageLink = ({
  url,
  label,
}: BackToPreviousPageLinkProps) => {
  const router = useRouter();
  return (
    <div className="group mb-5 flex flex-row gap-x-5">
      <Button
        variant="tertiaryColour"
        className="gap-x-2 hover:!bg-[#F7F6F8]"
        size="lg"
        onClick={() => router.push(url)}
      >
        <Icons.ChevronLeft className="my-auto h-4 w-4 stroke-semantic-accent-default" />
        <span className="my-auto">{label || "Tutorials"}</span>
      </Button>
    </div>
  );
};

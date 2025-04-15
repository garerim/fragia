import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Item {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  time: string;
}

export default function GameEvent({ name, description, icon: Icon, color, time }: Item) {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-3 mb-3",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[102%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div
          className="flex size-9 items-center justify-center rounded-xl"
          style={{
            backgroundColor: color,
          }}
        >
          <Icon className="size-4 text-white" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-base font-medium dark:text-white">
            <span className="text-sm">{name}</span>
            <span className="mx-1 text-xs">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs font-normal dark:text-white/60 line-clamp-1">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
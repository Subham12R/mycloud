"use client";

import Image from "next/image";
import { Progress } from "@/components/ui/progress"
import { HugeiconsIcon } from "@hugeicons/react";
import { UserCircleIcon, Notification01Icon } from "@hugeicons/core-free-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";
import * as React from "react";
import { SlashIcon } from "lucide-react"

export default function NavBar() {
    const pathname = usePathname();
    const pathParts = pathname.split("/").filter(Boolean);
    return (
        <nav className="w-full flex flex-col relative ">
            <div className="w-full p-4 border-b border-zinc-700/50 flex items-center justify-between">
             {/* Storage */}
            <div className="flex gap-2">
                <div className="bg-zinc-700 rounded-full p-2">
                    <Image src="/icon.png" alt="Logo" width={24} height={24} />
              
                </div>
                      <div>
                        <div className="gap-2 flex">
                            <span className="text-white">Basic Storage</span>
                            <div className=""><span className="text-zinc-400">50GB </span><span className="text-white">/ 100GB</span></div>
                        </div>
                        <Progress className="w-full mt-2" value={50} max={100} />
                    </div>

            </div>

            {/* User Info */}
            <div className="flex items-center gap-4">
                
                <div className="flex gap-2 text-white">
                    
                    <HugeiconsIcon icon={Notification01Icon} size={24} />
                    <HugeiconsIcon icon={UserCircleIcon} size={24} />
                </div>
            </div>

            </div>
    

            {/* BreadCrumb */}
            <div className="border-b border-zinc-700 px-4 py-2  ">
            <Breadcrumb className="flex items-center text-center gap-1">
            <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-zinc-400 ">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {pathParts.map((part, idx) => {
                const href = "/" + pathParts.slice(0, idx + 1).join("/");
                const isLast = idx === pathParts.length - 1;
                return (
                <React.Fragment key={href}>
                <BreadcrumbSeparator >
                    <SlashIcon className="size-3.5" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    {isLast ? (
                    <BreadcrumbPage>
                        {part.charAt(0).toUpperCase() + part.slice(1)}
                    </BreadcrumbPage>
                    ) : (
                    <BreadcrumbLink href={href}>
                        {part.charAt(0).toUpperCase() + part.slice(1)}
                    </BreadcrumbLink>
                    )}
                </BreadcrumbItem>
                </React.Fragment>
                );
            })}
            </Breadcrumb>
            </div>
        </nav>

    );
}
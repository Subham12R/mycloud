"use client";

import {
  ArrowDown01Icon,
  ArrowRight01Icon,
  PanelLeftIcon,
  SearchIcon,
  Home01Icon,
  Folder01Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const navLinks = [
    { href: "/dashboard", label: "Overview", icon: Home01Icon,
      subLinks: [
        { href: "/dashboard/recent", label: "Recent" },
        { href: "/dashboard/usage", label: "Usage Report" },
      ],
     },
    { href: "/files", label: "Files", icon: Folder01Icon },
    { href: "/settings", label: "Settings", icon: Settings01Icon },
  ];

  return (
    <div
      className={clsx(
        " relative min-h-screen  text-white h-full  flex flex-col transition-all duration-300",
        collapsed ? "w-20 p-6" : "w-72 p-4"
      )}
    >
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={clsx(
              "bg-zinc-700 p-2 rounded-full text-white hover:bg-zinc-600 transition-colors duration-200",
                collapsed && "rotate-180"

            )}
          >
            <HugeiconsIcon icon={PanelLeftIcon} size={20} />
          </button>

          {!collapsed && (
            <h2 className="text-xl font-semibold">Dashboard</h2>
          )}
        </div>

        {!collapsed && (
          <div className="bg-zinc-700 p-2 rounded-full text-white">
            <HugeiconsIcon icon={SearchIcon} size={20} />
          </div>
        )}
      </div>

      <nav>
        <ul className="space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            const hasSubLinks = !!link.subLinks;
            const isExpanded = expanded === link.href;
            return (
              <li key={link.href}>
                <div
                  className={clsx(
                    "flex items-center w-full py-2 px-4 gap-3 transition-colors duration-200 backdrop-blur-xl rounded-lg cursor-pointer",
                    collapsed ? "justify-center" : "justify-between",
                    isActive
                      ? "text-white font-medium bg-zinc-700"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                  )}
                  onClick={() => {
                    if (hasSubLinks) {
                      setExpanded(isExpanded ? null : link.href);
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <HugeiconsIcon icon={link.icon} size={20} />
                    {!collapsed && <span>{link.label}</span>}
                  </div>
                  {!collapsed && hasSubLinks && (
                    <HugeiconsIcon
                      icon={isExpanded ? ArrowDown01Icon : ArrowRight01Icon}
                      size={16}
                      className="opacity-70"
                    />
                  )}
                </div>
              {hasSubLinks && isExpanded && !collapsed && (
              <ul className="mt-2">
                {link.subLinks.map((subLink, idx) => (
                  <li key={subLink.href} className="relative pl-8 pb-2 ">
                    
                    <div className="absolute left-0 top-0 h-full w-px bg-bg-border" />
                    <div className="relative">
                      {/* Corner */}
                      <div className="absolute -left-5 top-0 w-4 h-5 border-l border-b border-bg-border rounded-bl-lg" />
                      <Link
                        href={subLink.href}
                        className={clsx(
                          "text-sm text-text-muted block py-2 px-2 rounded-lg hover:bg-zinc-700 transition-colors duration-200",
                          isActive &&
                          pathname === subLink.href
                            ? "text-white font-medium bg-zinc-700"
                            : "text-zinc-400 hover:text-white"
                        )}
                      >
                        {subLink.label}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

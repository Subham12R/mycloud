import NavBar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import { Delete02Icon, Download01Icon, Download02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


export default function Dashboard() {
  return (
    <>
    
    <div className="bg-zinc-900 relative z-10 h-full overflow-hidden p-4 ">
        <div className=" border-b border-bg-border mb-4">
          <h1 className="text-white">Recent Uploaded</h1>
          <div className="h-48"></div>
        </div>

        <div className=" border-b border-bg-border mb-4">
          <h1 className="text-white">Favourites</h1>
          <div className="h-48"></div>
        </div>

        <div className="">
          <h1 className="text-white mb-4">All Files</h1>
          <div className="overflow-y-scroll overflow-x-auto w-full h-full">
            <table className="min-w-full bg-zinc-900 rounded-md shadow">
              <thead>
                <tr className="border-b border-zinc-700 bg-zinc-700 rounded-t-xl">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-400 uppercase"><input type="checkbox" /></th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-400 uppercase">File Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-400 uppercase">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-400 uppercase">Date Uploaded</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-zinc-400 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                
                <tr className="hover:bg-zinc-800 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" /></td>
                  <td className="px-6 py-4 text-white font-medium">Project Brief.docx</td>
                  <td className="px-6 py-4 text-zinc-300">1.2 MB</td>
                  <td className="px-6 py-4 text-zinc-300">2026-01-07</td>
                  <td className="px-6 py-4 gap-2">
                    <button className=" text-white text-xs  rounded-full">
                      <HugeiconsIcon icon={Download02Icon} size={24}  />
                    </button>
                    <button className="  text-xs  text-red-500 rounded-full">
                      <HugeiconsIcon icon={Delete02Icon} size={24}  />
                    </button>
                  </td>
                </tr>

               
              </tbody>
            </table>
          </div>
        </div>
    </div>
    </>
  );
}
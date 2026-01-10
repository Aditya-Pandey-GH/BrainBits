import {
  LayoutDashboard,
  BookOpen,
  Code2,
  MessageSquare
} from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-card border-r border-borderDark
      ${open ? "w-72" : "w-20"}
      transition-all duration-300 ease-in-out
      flex flex-col p-4 z-50`}
    >
      {/* Logo */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 cursor-pointer mb-10"
      >
        <span className="text-2xl">🧠</span>
        {open && (
          <span className="text-xl font-bold whitespace-nowrap">
            BrainBits
          </span>
        )}
      </div>

      {/* User */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold">
          S
        </div>
        {open && (
          <div>
            <p className="font-semibold">Sahil Kumar</p>
            <p className="text-xs text-textSecondary">@Sahil-Kumar</p>
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="space-y-2 text-sm">
        <MenuItem icon={<LayoutDashboard />} label="Dashboard" open={open} />
        <MenuItem icon={<BookOpen />} label="Study Plan" open={open} />
        <MenuItem icon={<Code2 />} label="Coding Lab" open={open} />
        <MenuItem icon={<MessageSquare />} label="Chatbot" open={open} />
      </nav>
    </aside>
  );
}

function MenuItem({ icon, label, open }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-textSecondary hover:bg-cardLight hover:text-white">
      {icon}
      {open && <span>{label}</span>}
    </div>
  );
}

import { Home, MessageSquare, BarChart3, Trophy, BookOpen, User, Settings } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Нүүр хуудас', icon: Home },
    { id: 'quiz', label: 'Өнөөдрийн сорил', icon: BookOpen },
    { id: 'chat', label: 'AI багш', icon: MessageSquare },
    { id: 'analytics', label: 'Статистик', icon: BarChart3 },
    { id: 'levels', label: 'Түвшин & XP', icon: Trophy },
  ];

  return (
    <div className="w-64 bg-card border-r border-border p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-primary text-2xl font-bold mb-2">EduMongolia</h1>
        <p className="text-muted-foreground text-sm">Ухаалаг сургалтын систем</p>
      </div>
      
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={`w-full justify-start gap-3 h-12 transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-primary text-primary-foreground glow-effect' 
                  : 'hover:bg-secondary hover:text-secondary-foreground'
              }`}
              onClick={() => onSectionChange(item.id)}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>
      
      <div className="mt-auto pt-6 border-t border-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <p className="font-medium">Батбаяр</p>
            <p className="text-sm text-muted-foreground">10-р анги</p>
          </div>
        </div>
        
        <Button variant="ghost" className="w-full justify-start gap-3 mt-3">
          <Settings className="w-5 h-5" />
          Тохиргоо
        </Button>
      </div>
    </div>
  );
}
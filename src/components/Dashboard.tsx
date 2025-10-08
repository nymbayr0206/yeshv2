import { Calendar, Target, Zap, Star, BookOpen, Clock, Trophy } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

export function Dashboard() {
  const currentDate = new Date().toLocaleDateString('mn-MN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dailyGoals = [
    { id: 1, title: 'Математик - 5 бодлого', completed: true },
    { id: 2, title: 'Физик - 3 бодлого', completed: true },
    { id: 3, title: 'Химийн нэгдэл - 2 бодлого', completed: false },
    { id: 4, title: 'Англи хэл - 10 үг', completed: false },
  ];

  const achievements = [
    { title: 'Тэргүүн оюутан', description: '7 хоног дараалан сорилд оролцсон', icon: '🏆' },
    { title: 'Математикч', description: 'Математикийн 50 бодлого шийдсэн', icon: '🧮' },
    { title: 'Идэвхтэн', description: '30 хоног дараалан орж ирсэн', icon: '⚡' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Сайн байна уу, Батбаяр!</h1>
          <p className="text-muted-foreground">{currentDate}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-bold text-2xl text-primary">2,840 XP</span>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Түвшин 12
          </Badge>
        </div>
      </div>

      {/* AI Teacher Message */}
      <Card className="glass-morphism gradient-border p-6 float-animation">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center pulse-soft">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Star className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-primary mb-2">AI Багшийн зөвлөгөө</h3>
            <p className="text-foreground mb-3">
              "Өчигдөр та маш сайн ажилласан! Математикийн дүнтэй байна. 
              Өнөөдөр химийн нэгдлүүдэд анхаарлаа хандуулаарай. 
              Та чадна гэдэгт итгэлтэй байна! 💪"
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              2 минутын өмнө
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Progress Overview */}
        <Card className="lg:col-span-2 p-6 bg-card border-border">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Өнөөдрийн зорилго
          </h2>
          
          <div className="space-y-4">
            {dailyGoals.map((goal) => (
              <div 
                key={goal.id} 
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 ${
                  goal.completed 
                    ? 'bg-primary/10 border-primary/20 text-primary' 
                    : 'bg-secondary/50 border-border hover:border-primary/30'
                }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  goal.completed 
                    ? 'bg-primary border-primary' 
                    : 'border-muted-foreground'
                }`}>
                  {goal.completed && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <span className={goal.completed ? 'line-through opacity-75' : ''}>{goal.title}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Өнөөдрийн ахиц</span>
              <span className="text-sm font-semibold text-primary">2/4 (50%)</span>
            </div>
            <Progress value={50} className="h-3 glow-effect" />
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="space-y-4">
          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Энэ долоо хоног</p>
                <p className="text-2xl font-bold text-primary">1,240 XP</p>
              </div>
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Шийдсэн бодлого</p>
                <p className="text-2xl font-bold text-blue-400">127</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Зөв хариулт</p>
                <p className="text-2xl font-bold text-green-400">89%</p>
              </div>
              <Target className="w-8 h-8 text-green-400" />
            </div>
          </Card>
        </div>
      </div>

      {/* Recent Achievements */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          Сүүлийн амжилтууд
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl mb-2">{achievement.icon}</div>
              <h3 className="font-semibold text-primary mb-1">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
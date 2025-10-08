import { useState } from "react";
import { Trophy, Star, Zap, Crown, Medal, Award, TrendingUp, Gift } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface Level {
  level: number;
  title: string;
  xpRequired: number;
  xpCurrent: number;
  rewards: string[];
  unlocked: boolean;
  icon: React.ReactNode;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xp: number;
  unlocked: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export function LevelsXP() {
  const [showLevelUp, setShowLevelUp] = useState(false);

  const currentLevel = 12;
  const currentXP = 2840;
  const nextLevelXP = 3200;
  const progressPercentage = ((currentXP % 400) / 400) * 100;

  const levels: Level[] = [
    {
      level: 1,
      title: "Шинэ оюутан",
      xpRequired: 0,
      xpCurrent: 400,
      rewards: ["Анхны багаж", "Сургалтын материал"],
      unlocked: true,
      icon: <Star className="w-6 h-6" />
    },
    {
      level: 5,
      title: "Хичээлч",
      xpRequired: 1600,
      xpCurrent: 1600,
      rewards: ["Тусгай урамшуулал", "Нэмэлт XP +10%"],
      unlocked: true,
      icon: <Medal className="w-6 h-6" />
    },
    {
      level: 10,
      title: "Мэргэжилтэн",
      xpRequired: 3600,
      xpCurrent: 3600,
      rewards: ["AI багшийн нэмэлт чадвар", "Тусгай сорилууд"],
      unlocked: true,
      icon: <Award className="w-6 h-6" />
    },
    {
      level: 12,
      title: "Мастер",
      xpRequired: 4400,
      xpCurrent: 2840,
      rewards: ["Эксклюзив контент", "Багшийн эрх"],
      unlocked: false,
      icon: <Trophy className="w-6 h-6" />
    },
    {
      level: 15,
      title: "Ухаантан",
      xpRequired: 5600,
      xpCurrent: 0,
      rewards: ["Судалгааны боломж", "Шинэ хичээлүүд"],
      unlocked: false,
      icon: <Crown className="w-6 h-6" />
    },
    {
      level: 20,
      title: "Гранд Мастер",
      xpRequired: 8000,
      xpCurrent: 0,
      rewards: ["Тэргүүлэгчийн эрх", "Бүх контент нээгдэнэ"],
      unlocked: false,
      icon: <Crown className="w-6 h-6" />
    }
  ];

  const achievements: Achievement[] = [
    {
      id: "first_quiz",
      title: "Анхны алхам",
      description: "Анхны сорилыг амжилттай дуусгасан",
      icon: "🎯",
      xp: 50,
      unlocked: true,
      rarity: "common"
    },
    {
      id: "week_streak",
      title: "Тэргүүн оюутан",
      description: "7 хоног дараалан сорилд оролцсон",
      icon: "🏆",
      xp: 200,
      unlocked: true,
      rarity: "rare"
    },
    {
      id: "math_master",
      title: "Математикч",
      description: "Математикийн 50 бодлого шийдсэн",
      icon: "🧮",
      xp: 300,
      unlocked: true,
      rarity: "epic"
    },
    {
      id: "perfect_score",
      title: "Төгс оноо",
      description: "Сорилд 100% оноо авсан",
      icon: "⭐",
      xp: 150,
      unlocked: true,
      rarity: "rare"
    },
    {
      id: "speed_demon",
      title: "Хурдан ухаантан",
      description: "Сорилыг 2 минут дотор дуусгасан",
      icon: "⚡",
      xp: 100,
      unlocked: false,
      rarity: "epic"
    },
    {
      id: "month_active",
      title: "Идэвхтэн",
      description: "30 хоног дараалан орж ирсэн",
      icon: "🔥",
      xp: 500,
      unlocked: true,
      rarity: "legendary"
    },
    {
      id: "ai_helper",
      title: "AI найз",
      description: "AI багштай 100 удаа харилцсан",
      icon: "🤖",
      xp: 250,
      unlocked: false,
      rarity: "epic"
    },
    {
      id: "knowledge_seeker",
      title: "Мэдлэгийн эрэлтэн",
      description: "Бүх хичээлээс сорилд оролцсон",
      icon: "📚",
      xp: 400,
      unlocked: false,
      rarity: "legendary"
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400 border-gray-400/20 bg-gray-400/10';
      case 'rare': return 'text-blue-400 border-blue-400/20 bg-blue-400/10';
      case 'epic': return 'text-purple-400 border-purple-400/20 bg-purple-400/10';
      case 'legendary': return 'text-orange-400 border-orange-400/20 bg-orange-400/10';
      default: return 'text-gray-400 border-gray-400/20 bg-gray-400/10';
    }
  };

  const simulateLevelUp = () => {
    setShowLevelUp(true);
    setTimeout(() => setShowLevelUp(false), 3000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Level Up Animation */}
      {showLevelUp && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <Card className="p-8 text-center glass-morphism gradient-border max-w-md mx-4">
            <div className="mb-6">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4 float-animation" />
              <h1 className="text-3xl font-bold text-primary mb-2">Түвшин ахилаа!</h1>
              <p className="text-xl text-foreground">Түвшин {currentLevel + 1} - Мастер</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Gift className="w-5 h-5" />
                <span className="font-semibold">Шинэ урамшуулал олж авлаа!</span>
              </div>
              <p className="text-sm text-muted-foreground">Эксклюзив контент, Багшийн эрх</p>
            </div>
          </Card>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Түвшин & XP Систем</h1>
          <p className="text-muted-foreground">Таны ахиц дэвшил ба амжилтууд</p>
        </div>
        <Button onClick={simulateLevelUp} variant="outline" className="glow-effect">
          <Zap className="w-4 h-4 mr-2" />
          Түвшин ахих дэмо
        </Button>
      </div>

      {/* Current Level Status */}
      <Card className="p-6 glass-morphism gradient-border">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center glow-effect">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary">Түвшин {currentLevel}</h2>
              <p className="text-muted-foreground">Мастер</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-primary">{currentXP.toLocaleString()} XP</p>
            <p className="text-sm text-muted-foreground">
              Дараагийн түвшин хүртэл: {(nextLevelXP - currentXP).toLocaleString()} XP
            </p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Түвшин {currentLevel + 1} хүртэлх ахиц</span>
            <span className="text-sm font-semibold text-primary">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-4 glow-effect" />
        </div>
      </Card>

      {/* Levels Roadmap */}
      <Card className="p-6 glass-morphism">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Түвшингийн зам
        </h3>
        
        <div className="space-y-4">
          {levels.map((level, index) => (
            <div 
              key={level.level}
              className={`p-4 rounded-lg border transition-all duration-300 ${
                level.level === currentLevel
                  ? 'border-primary bg-primary/10 glow-effect'
                  : level.unlocked
                    ? 'border-green-500/20 bg-green-500/5'
                    : 'border-border bg-card/50 opacity-75'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    level.level === currentLevel
                      ? 'bg-primary text-primary-foreground'
                      : level.unlocked
                        ? 'bg-green-500 text-white'
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {level.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">Түвшин {level.level} - {level.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {level.xpRequired.toLocaleString()} XP шаардлагатай
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={level.unlocked ? "default" : "secondary"}
                    className={level.unlocked ? "bg-green-500" : ""}
                  >
                    {level.unlocked ? 'Нээгдсэн' : 'Түгжээтэй'}
                  </Badge>
                  {level.level === currentLevel && (
                    <p className="text-sm text-primary mt-1">Одоогийн түвшин</p>
                  )}
                </div>
              </div>
              
              {level.rewards.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Урамшуулал:</p>
                  <div className="flex flex-wrap gap-2">
                    {level.rewards.map((reward, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {reward}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6 glass-morphism">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Амжилтууд
          <Badge variant="secondary" className="ml-2">
            {achievements.filter(a => a.unlocked).length}/{achievements.length}
          </Badge>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                achievement.unlocked
                  ? `${getRarityColor(achievement.rarity)} hover:border-opacity-40`
                  : 'border-border bg-card/30 opacity-50 grayscale'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <h4 className="font-semibold mb-1">{achievement.title}</h4>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getRarityColor(achievement.rarity)}`}
                  >
                    {achievement.rarity}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs">
                    <Zap className="w-3 h-3 text-primary" />
                    <span className="text-primary font-medium">+{achievement.xp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* XP Sources */}
      <Card className="p-6 glass-morphism">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-primary" />
          XP олох аргууд
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
            <h4 className="font-semibold text-blue-400 mb-2">Өдрийн сорил</h4>
            <p className="text-sm text-muted-foreground mb-2">Өдөр бүр шинэ сорилууд шийдэх</p>
            <div className="flex items-center gap-1 text-blue-400">
              <Zap className="w-4 h-4" />
              <span className="font-medium">20-60 XP</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
            <h4 className="font-semibold text-green-400 mb-2">AI багштай ярилцах</h4>
            <p className="text-sm text-muted-foreground mb-2">Асуулт асууж, хариулт авах</p>
            <div className="flex items-center gap-1 text-green-400">
              <Zap className="w-4 h-4" />
              <span className="font-medium">5-15 XP</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
            <h4 className="font-semibold text-purple-400 mb-2">Амжилт олж авах</h4>
            <p className="text-sm text-muted-foreground mb-2">Тусгай даалгавар биелүүлэх</p>
            <div className="flex items-center gap-1 text-purple-400">
              <Zap className="w-4 h-4" />
              <span className="font-medium">50-500 XP</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20">
            <h4 className="font-semibold text-orange-400 mb-2">Өдөр тутмын зорилго</h4>
            <p className="text-sm text-muted-foreground mb-2">Өдрийн даалгавар биелүүлэх</p>
            <div className="flex items-center gap-1 text-orange-400">
              <Zap className="w-4 h-4" />
              <span className="font-medium">30-100 XP</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-red-500/10 to-red-500/5 border border-red-500/20">
            <h4 className="font-semibold text-red-400 mb-2">Сорилын зөв хариулт</h4>
            <p className="text-sm text-muted-foreground mb-2">Асуултад зөв хариулах</p>
            <div className="flex items-center gap-1 text-red-400">
              <Zap className="w-4 h-4" />
              <span className="font-medium">10-25 XP</span>
            </div>
          </div>
          
          <div className="p-4 rounded-lg bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/20">
            <h4 className="font-semibold text-teal-400 mb-2">Дараалсан өдрүүд</h4>
            <p className="text-sm text-muted-foreground mb-2">Өдөр тутам орж ирэх</p>
            <div className="flex items-center gap-1 text-teal-400">
              <Zap className="w-4 h-4" />
              <span className="font-medium">10-50 XP</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
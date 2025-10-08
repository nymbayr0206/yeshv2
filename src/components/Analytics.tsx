import { BarChart3, TrendingUp, Calendar, Award, Clock, Target } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

export function Analytics() {
  // Sample data for charts
  const weeklyProgress = [
    { day: 'Да', xp: 180, quizzes: 3, accuracy: 85 },
    { day: 'Мя', xp: 220, quizzes: 4, accuracy: 90 },
    { day: 'Лх', xp: 150, quizzes: 2, accuracy: 75 },
    { day: 'Пү', xp: 280, quizzes: 5, accuracy: 95 },
    { day: 'Ба', xp: 320, quizzes: 6, accuracy: 88 },
    { day: 'Ны', xp: 190, quizzes: 3, accuracy: 82 },
    { day: 'Бя', xp: 250, quizzes: 4, accuracy: 91 }
  ];

  const subjectPerformance = [
    { subject: 'Математик', score: 92, improvement: 8 },
    { subject: 'Физик', score: 87, improvement: 5 },
    { subject: 'Хими', score: 79, improvement: -2 },
    { subject: 'Биологи', score: 94, improvement: 12 },
    { subject: 'Газарзүй', score: 85, improvement: 3 },
    { subject: 'Түүх', score: 88, improvement: 6 }
  ];

  const skillsRadar = [
    { skill: 'Математик', A: 92, fullMark: 100 },
    { skill: 'Физик', A: 87, fullMark: 100 },
    { skill: 'Хими', A: 79, fullMark: 100 },
    { skill: 'Биологи', A: 94, fullMark: 100 },
    { skill: 'Газарзүй', A: 85, fullMark: 100 },
    { skill: 'Түүх', A: 88, fullMark: 100 }
  ];

  const monthlyActivity = [
    { month: '9-р сар', hours: 45, quizzes: 32 },
    { month: '10-р сар', hours: 52, quizzes: 41 },
    { month: '11-р сар', hours: 38, quizzes: 28 },
    { month: '12-р сар', hours: 67, quizzes: 53 }
  ];

  const achievements = [
    { title: 'Тэргүүн оюутан', date: '2024-12-01', category: 'Ерөнхий' },
    { title: 'Математикч', date: '2024-11-28', category: 'Математик' },
    { title: 'Идэвхтэн', date: '2024-11-25', category: 'Ерөнхий' },
    { title: 'Физик мастер', date: '2024-11-20', category: 'Физик' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Статистик & Шинжилгээ</h1>
          <p className="text-muted-foreground">Суралцагчийн ахиц дэвшил</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Calendar className="w-3 h-3 mr-1" />
            Энэ сар
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 gradient-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Нийт XP</p>
              <p className="text-3xl font-bold text-primary">2,840</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-500">+12% энэ сар</span>
              </div>
            </div>
            <Award className="w-8 h-8 text-primary" />
          </div>
        </Card>

        <Card className="p-6 gradient-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Шийдсэн сорил</p>
              <p className="text-3xl font-bold text-blue-400">127</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-500">+8% энэ сар</span>
              </div>
            </div>
            <Target className="w-8 h-8 text-blue-400" />
          </div>
        </Card>

        <Card className="p-6 gradient-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Дундаж оноо</p>
              <p className="text-3xl font-bold text-green-400">89%</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-500">+5% энэ сар</span>
              </div>
            </div>
            <BarChart3 className="w-8 h-8 text-green-400" />
          </div>
        </Card>

        <Card className="p-6 gradient-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Суралцсан цаг</p>
              <p className="text-3xl font-bold text-orange-400">67ц</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-500">+15% энэ сар</span>
              </div>
            </div>
            <Clock className="w-8 h-8 text-orange-400" />
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Progress Chart */}
        <Card className="p-6 glass-morphism">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            7 хоногийн ахиц
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="day" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #8B5CF6',
                  borderRadius: '8px',
                  color: '#FFFFFF'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="xp" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Subject Performance */}
        <Card className="p-6 glass-morphism">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Хичээлийн үр дүн
          </h3>
          <div className="space-y-4">
            {subjectPerformance.map((subject, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{subject.subject}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{subject.score}%</span>
                    <Badge 
                      variant={subject.improvement > 0 ? "default" : "secondary"}
                      className={subject.improvement > 0 ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}
                    >
                      {subject.improvement > 0 ? '+' : ''}{subject.improvement}%
                    </Badge>
                  </div>
                </div>
                <Progress value={subject.score} className="h-2" />
              </div>
            ))}
          </div>
        </Card>

        {/* Skills Radar */}
        <Card className="p-6 glass-morphism">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Чадварын шинжилгээ
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={skillsRadar}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="skill" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
              <PolarRadiusAxis 
                angle={30} 
                domain={[0, 100]} 
                tick={{ fill: '#9CA3AF', fontSize: 10 }} 
              />
              <Radar
                name="Чадвар"
                dataKey="A"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.2}
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        {/* Monthly Activity */}
        <Card className="p-6 glass-morphism">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Сарын идэвхжил
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #8B5CF6',
                  borderRadius: '8px',
                  color: '#FFFFFF'
                }} 
              />
              <Bar dataKey="hours" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card className="p-6 glass-morphism">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          Сүүлийн амжилтууд
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <Award className="w-5 h-5 text-primary" />
                <Badge variant="secondary" className="text-xs">
                  {achievement.category}
                </Badge>
              </div>
              <h4 className="font-semibold text-primary mb-1">{achievement.title}</h4>
              <p className="text-xs text-muted-foreground">
                {new Date(achievement.date).toLocaleDateString('mn-MN')}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Learning Insights */}
      <Card className="p-6 glass-morphism">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          Сургалтын дүгнэлт
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <h4 className="font-semibold text-green-400 mb-2">Хамгийн сайн хичээл</h4>
            <p className="text-2xl font-bold text-green-400">Биологи</p>
            <p className="text-sm text-muted-foreground">94% дундаж оноо</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
            <h4 className="font-semibold text-orange-400 mb-2">Анхаарах хичээл</h4>
            <p className="text-2xl font-bold text-orange-400">Хими</p>
            <p className="text-sm text-muted-foreground">79% дундаж оноо</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <h4 className="font-semibold text-blue-400 mb-2">Хамгийн идэвхтэй</h4>
            <p className="text-2xl font-bold text-blue-400">Пүрэв</p>
            <p className="text-sm text-muted-foreground">6 сорил шийдсэн</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
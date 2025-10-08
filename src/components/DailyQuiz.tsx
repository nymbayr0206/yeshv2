import { useState, useEffect } from "react";
import { Clock, Zap, ChevronRight, RotateCcw, Trophy } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

interface Question {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  xp: number;
}

export function DailyQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      subject: "Математик",
      question: "Дараах тэгшитгэлийг бод: 2x + 5 = 13",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      correct: 1,
      explanation: "2x + 5 = 13 → 2x = 8 → x = 4",
      xp: 50
    },
    {
      id: 2,
      subject: "Физик",
      question: "Дууны хурд агаарт хэдэн м/с вэ?",
      options: ["330 м/с", "340 м/с", "350 м/с", "360 м/с"],
      correct: 1,
      explanation: "Дууны хурд агаарт ойролцоогоор 340 м/с байдаг.",
      xp: 40
    },
    {
      id: 3,
      subject: "Хими",
      question: "Усны химийн томьёо юу вэ?",
      options: ["H₂O", "CO₂", "NaCl", "CH₄"],
      correct: 0,
      explanation: "Усны химийн томьёо H₂O - 2 устөрөгч, 1 хүчилтөрөгч атом.",
      xp: 30
    },
    {
      id: 4,
      subject: "Газарзүй",
      question: "Монгол Улсын нийслэл хот аль нь вэ?",
      options: ["Эрдэнэт", "Дархан", "Улаанбаatar", "Чойбалсан"],
      correct: 2,
      explanation: "Монгол Улсын нийслэл хот бол Улаанбаатар хот юм.",
      xp: 20
    },
    {
      id: 5,
      subject: "Түүх",
      question: "Чингис хаан хэдэн онд төрсөн бэ?",
      options: ["1155", "1162", "1167", "1170"],
      correct: 1,
      explanation: "Чингис хаан 1162 онд төрсөн гэж тооцогддог.",
      xp: 60
    }
  ];

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleQuizComplete();
    }
  }, [timeLeft, quizCompleted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
      setEarnedXP(earnedXP + questions[currentQuestion].xp);
    }
    
    setShowResult(false);
    setSelectedAnswer(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTimeLeft(300);
    setQuizCompleted(false);
    setEarnedXP(0);
  };

  const handleSubmitAnswer = () => {
    setShowResult(true);
  };

  if (quizCompleted) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <Card className="p-8 text-center glass-morphism gradient-border">
          <div className="mb-6">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-4 float-animation" />
            <h1 className="text-3xl font-bold text-primary mb-2">Баяр хүргэе!</h1>
            <p className="text-xl text-foreground">Та өнөөдрийн сорилыг дуусгалаа</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary">{score}/{questions.length}</h3>
              <p className="text-muted-foreground">Зөв хариулт</p>
            </div>
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <h3 className="text-2xl font-bold text-green-400">+{earnedXP} XP</h3>
              <p className="text-muted-foreground">Цуглуулсан</p>
            </div>
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-blue-400">{Math.round((score/questions.length)*100)}%</h3>
              <p className="text-muted-foreground">Амжилт</p>
            </div>
          </div>
          
          <Button onClick={restartQuiz} className="glow-effect">
            <RotateCcw className="w-4 h-4 mr-2" />
            Дахин оролдох
          </Button>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Өнөөдрийн сорил</h1>
          <p className="text-muted-foreground">Өдөр тутмын үндсэн сорилууд</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border">
            <Clock className="w-4 h-4 text-primary" />
            <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Zap className="w-3 h-3 mr-1" />
            {earnedXP} XP
          </Badge>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Ахиц</span>
          <span className="text-sm font-semibold text-primary">
            {currentQuestion + 1}/{questions.length}
          </span>
        </div>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="p-8 mb-6 glass-morphism float-animation">
        <div className="mb-6">
          <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
            {question.subject}
          </Badge>
          <h2 className="text-2xl font-semibold text-foreground leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
                selectedAnswer === index
                  ? showResult
                    ? index === question.correct
                      ? 'border-green-500 bg-green-500/10 text-green-400'
                      : 'border-red-500 bg-red-500/10 text-red-400'
                    : 'border-primary bg-primary/10 text-primary'
                  : showResult && index === question.correct
                    ? 'border-green-500 bg-green-500/10 text-green-400'
                    : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5'
              } ${showResult ? 'cursor-default' : 'cursor-pointer hover:scale-105'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                  selectedAnswer === index
                    ? showResult
                      ? index === question.correct
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-red-500 bg-red-500 text-white'
                      : 'border-primary bg-primary text-white'
                    : showResult && index === question.correct
                      ? 'border-green-500 bg-green-500 text-white'
                      : 'border-muted-foreground'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="flex-1">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="mb-6 p-4 rounded-lg bg-muted/30 border border-muted">
            <h3 className="font-semibold text-primary mb-2">Тайлбар:</h3>
            <p className="text-foreground">{question.explanation}</p>
            <div className="flex items-center gap-2 mt-3">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">+{question.xp} XP олж авлаа!</span>
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-end">
          {!showResult ? (
            <Button 
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="glow-effect"
            >
              Хариуг илгээх
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="glow-effect">
              {currentQuestion < questions.length - 1 ? 'Дараагийн асуулт' : 'Сорил дуусгах'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
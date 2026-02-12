
import React from 'react';
import { motion } from 'framer-motion';
import { Background3D, Hero3D } from './components/ThreeScene';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ChevronLeft, MessageSquare, Briefcase, Star, Users, Clock, FileText } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Background3D />
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass border-b-0">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-black tracking-tighter gradient-text">CVEEEZ</div>
          <div className="hidden md:flex gap-8 font-medium">
            <a href="#features" className="hover:text-blue-400 transition-colors">المميزات</a>
            <a href="#how" className="hover:text-blue-400 transition-colors">كيف نعمل</a>
            <a href="#pricing" className="hover:text-blue-400 transition-colors">الباقات</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors">الأسئلة</a>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-all">
            ابدأ الآن
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 px-6 overflow-hidden">
        <Hero3D />
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              سيرتك الذاتية هي <span className="gradient-text">تذكرتك</span> لأكبر الشركات
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              CVEEEZ بيحول مهاراتك لإنجازات بيفهمها الـ ATS والمديرين، عشان تضمن مكالمة الإنترفيو وتعدي من أي فلتر.
            </p>
            <div className="space-y-4 mb-10">
              {['تصميم احترافي متوافق مع أنظمة الـ ATS', 'صياغة ذكية للإنجازات والكلمات المفتاحية', 'دعم كامل باللغتين العربية والإنجليزية'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  </div>
                  <span className="text-lg text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-500/20 transition-all transform hover:-translate-y-1">
                صمم سيرتك الآن
              </button>
              <button className="glass px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white/5 transition-all">
                شوف النماذج
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 glass border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around gap-8 text-center">
          <div className="flex flex-col">
            <span className="text-4xl font-black gradient-text">+[عدد]</span>
            <span className="text-gray-500 font-bold">مستخدم سعيد</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black gradient-text">[نسبة]%</span>
            <span className="text-gray-500 font-bold">زيادة في المكالمات</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-black gradient-text">[مدة]</span>
            <span className="text-gray-500 font-bold">وقت التجهيز</span>
          </div>
          <div className="flex items-center gap-2 glass px-6 py-2 rounded-full">
            <ShieldCheckIcon className="text-blue-400" />
            <span className="font-bold">ATS-Friendly</span>
          </div>
          <div className="flex items-center gap-2 glass px-6 py-2 rounded-full">
            <CpuIcon className="text-purple-400" />
            <span className="font-bold">AI-Assisted</span>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 glass p-10 rounded-[3rem] relative">
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
          <h3 className="text-3xl font-bold mb-6">ليه الـ CV العادي بيترفض؟</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="bg-red-500/10 p-3 rounded-2xl h-fit">
                <Users className="text-red-400" />
              </div>
              <div>
                <h4 className="font-bold mb-1">الزحمة في التقديم</h4>
                <p className="text-gray-400 text-sm">الشركات بيجيلها آلاف الطلبات، وعين المدير مش بتشوف غير 6 ثواني بس.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="bg-orange-500/10 p-3 rounded-2xl h-fit">
                <Clock className="text-orange-400" />
              </div>
              <div>
                <h4 className="font-bold mb-1">فلاتر الـ ATS الصارمة</h4>
                <p className="text-gray-400 text-sm">لو التنسيق مش صح أو الكلمات المفتاحية ناقصة، الـ CV بيترفض تلقائياً.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">إحنا بنخلي الـ CV بتاعك <span className="gradient-text">قوة ضاربة</span></h2>
          <p className="text-lg text-gray-400 mb-8">
            في CVEEEZ، بنستخدم خوارزميات متطورة وخبراء توظيف عشان نضمن إن كل سطر في سيرتك الذاتية بيخدم هدفك. بنركز على الإنجازات القابلة للقياس والكلمات اللي بيبحث عنها الـ Recruiters.
          </p>
          <button className="flex items-center gap-3 text-blue-400 font-bold text-xl group">
            اعرف إزاي بنغير اللعبة <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <Features />

      {/* How it Works */}
      <section id="how" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">إزاي بنبدأ <span className="gradient-text">الرحلة</span>؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            <div className="relative">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">1</div>
              <h3 className="text-2xl font-bold mb-2">ارفع بياناتك</h3>
              <p className="text-gray-400">ارفع الـ CV القديم أو املا بياناتك ببساطة في ثواني.</p>
              <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-l from-transparent via-white/20 to-transparent -translate-x-1/2" />
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">2</div>
              <h3 className="text-2xl font-bold mb-2">حدد هدفك</h3>
              <p className="text-gray-400">اختار التخصص أو الشركة اللي بتستهدفها واحنا بنقوم بالباقي.</p>
              <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-l from-transparent via-white/20 to-transparent -translate-x-1/2" />
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">3</div>
              <h3 className="text-2xl font-bold mb-2">استلم الـ PDF</h3>
              <p className="text-gray-400">حمل سيرتك الذاتية الجديدة بجودة بريميوم وجاهزة للتقديم.</p>
            </div>
          </div>
          <button className="mt-16 bg-white text-black px-12 py-4 rounded-2xl text-xl font-bold hover:scale-105 transition-all">
            جرب الخدمة دلوقتي
          </button>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">خدماتنا <span className="gradient-text">المتكاملة</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'AI CV Builder', desc: 'منشئ سير ذاتية ذكي يعتمد على أفضل ممارسات التوظيف.', icon: <CpuIcon /> },
            { title: 'كتابة CV احترافية', desc: 'مراجعة وصياغة بشرية كاملة لضمان التفرد والتميز.', icon: <Briefcase /> },
            { title: 'Cover Letter', desc: 'خطاب مخصص يظهر شغفك ومؤهلاتك بوضوح.', icon: <MessageSquare /> },
            { title: 'تحسين بروفايل LinkedIn', desc: 'خلي الشركات هي اللي تدور عليك مش العكس.', icon: <Star /> },
            { title: 'Interview Prep', desc: 'جلسات كوتشينج للتدريب على أصعب الأسئلة.', icon: <Users /> },
            { title: 'بناء Portfolio', desc: 'اعرض أعمالك بشكل بصري يبهر أي مدير فني.', icon: <FileText /> }
          ].map((s, i) => (
            <div key={i} className="glass p-8 rounded-3xl hover:border-blue-500/30 transition-all cursor-default">
              <div className="text-blue-400 mb-4">{s.icon}</div>
              <h4 className="text-2xl font-bold mb-2">{s.title}</h4>
              <p className="text-gray-400 mb-6">{s.desc}</p>
              <button className="text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                تعرف على المزيد <ChevronLeft className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">قالوا إيه عن <span className="gradient-text">CVEEEZ</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass p-10 rounded-[2.5rem] relative">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, star) => <Star key={star} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "بصراحة التجربة كانت ممتازة. الـ CV اتغير 180 درجة، ومن أول أسبوع بدأ يجيلي مكالمات لإنترفيوهات في شركات إنترناشونال مكنتش بحلم بيها."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                <div>
                  <h5 className="font-bold">عميل مستخدم [ {i} ]</h5>
                  <span className="text-sm text-gray-500">مهندس برمجيات</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full translate-y-1/2" />
        <div className="max-w-4xl mx-auto glass p-16 rounded-[4rem] text-center relative z-10 border-blue-500/20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">جاهز تبدأ <span className="gradient-text">رحلتك</span> الحقيقية؟</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto">
            بلاش تضيع مجهودك في التقديم بـ CV ضعيف. خلي الخطوة الجاية تكون الأذكى في حياتك المهنية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-12 py-5 rounded-2xl text-xl font-bold hover:bg-gray-200 transition-all shadow-xl shadow-white/5">
              ابدأ الآن مجاناً
            </button>
            <button className="glass border-blue-500/30 text-blue-400 px-12 py-5 rounded-2xl text-xl font-bold hover:bg-white/5 transition-all">
              تواصل عبر واتساب
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 glass border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-4xl font-black tracking-tighter gradient-text mb-6">CVEEEZ</div>
            <p className="text-gray-400 max-w-md mb-8">
              CVEEEZ هي المنصة الرائدة في تحسين السير الذاتية وتطوير المسارات المهنية باستخدام الذكاء الاصطناعي وخبرات التوظيف الحقيقية. هدفنا إننا نخلي كل طموح يوصل لمكانه الصح.
            </p>
            <p className="text-gray-600 text-sm italic">
              Empowering professional journeys through intelligent CV optimization.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-blue-400 transition-colors">عن الشركة</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl">تواصل معنا</h4>
            <div className="space-y-4 text-gray-500">
              <p>مصر، القاهرة</p>
              <p>support@cveeez.com</p>
              <div className="flex gap-4 mt-6">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">LN</div>
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">X</div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-gray-600">
          © {new Date().getFullYear()} CVEEEZ. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
};

// Helper components for the app
const ShieldCheckIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const CpuIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>;

export default App;
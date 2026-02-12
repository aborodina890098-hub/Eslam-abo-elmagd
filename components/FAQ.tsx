
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: "إيه هو نظام الـ ATS وليه مهم؟",
    answer: "الـ ATS هو اختصار لـ Applicant Tracking System، وهو برنامج بتستخدمه الشركات لفلترة آلاف السير الذاتية. لو الـ CV بتاعك مش متوافق معاه، مش هيوصل أصلاً لعين مدير التوظيف."
  },
  {
    question: "بياخد وقت قد إيه عشان أستلم الـ CV بتاعي؟",
    answer: "في الباقة الآلية، الاستلام بيكون فوري. أما لو اخترت المراجعة البشرية، بياخد من 2 لـ 4 أيام عمل عشان نضمن لك أعلى جودة."
  },
  {
    question: "ممكن أعدل على الـ CV بعد ما أستلمه؟",
    answer: "أيوة طبعاً، حسب باقتك تقدر تعدل عليه من خلال لوحة التحكم الخاصة بيك، أو تطلب تعديلات لو معاك خبير بشري."
  },
  {
    question: "هل بتدعموا العربي والإنجليزي؟",
    answer: "بالضبط، بنوفر قوالب وصياغة احترافية باللغتين، وبنقدر نعمل لك نسخة مدمجة أو نسختين منفصلتين."
  },
  {
    question: "بياناتي الشخصية هتكون بأمان؟",
    answer: "خصوصيتك أولوية قصوى. بياناتك مش بتتشير مع أي جهة خارجية وبنستخدم تشفير عالي الجودة لحمايتها."
  },
  {
    question: "إيه المعلومات اللي هحتاج أقدمها؟",
    answer: "هتحتاج بس ترفع الـ CV القديم بتاعك (لو موجود) أو تملأ بيانات خبراتك، مهاراتك، وتعليمك والوظيفة اللي بتستهدفها."
  },
  {
    question: "هل بتعملوا Cover Letter كمان؟",
    answer: "أيوة، باقة المحترفين والباقة الشاملة بيتضمنوا كتابة خطاب تغطية احترافي مخصص لكل وظيفة بتقدم عليها."
  },
  {
    question: "الخدمة مناسبة لأي مجال؟",
    answer: "مناسبة لكل المجالات، من التكنولوجيا والهندسة لغاية الإدارة والمبيعات. خوارزمياتنا وخبراءنا عندهم خبرة في مختلف القطاعات."
  }
];

export const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">أسئلة <span className="gradient-text">شائعة</span></h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="glass rounded-2xl overflow-hidden">
            <button 
              onClick={() => setActive(active === index ? null : index)}
              className="w-full p-6 text-right flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <span className="text-xl font-bold">{item.question}</span>
              {active === index ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
            <AnimatePresence>
              {active === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6 text-gray-400 leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

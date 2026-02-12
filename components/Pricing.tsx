
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'الباقة الأساسية',
    price: '[X]',
    features: [
      'نموذج CV واحد متوافق مع ATS',
      'تصدير PDF لا محدود',
      'صياغة آلية للخبرات',
      'دعم لغة واحدة'
    ]
  },
  {
    name: 'باقة المحترفين',
    price: '[Y]',
    recommended: true,
    features: [
      'كل مميزات الأساسية',
      'تحليل ذكي للكلمات المفتاحية',
      'خطاب تغطية (Cover Letter)',
      'تحديثات لمدة 6 شهور',
      'دعم عربي وإنجليزي'
    ]
  },
  {
    name: 'الباقة الشاملة',
    price: '[Z]',
    features: [
      'كل مميزات المحترفين',
      'مراجعة يدوية من خبير بشرى',
      'تحسين بروفايل LinkedIn',
      'جلسة تحضير إنترفيو (30 دقيقة)',
      'أولوية في الدعم الفني'
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">باقات تناسب <span className="gradient-text">طموحك</span></h2>
        <p className="text-gray-400">استثمر في مستقبلك المهني مع الحلول اللي تناسب احتياجك.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`glass p-10 rounded-[2.5rem] relative flex flex-col ${tier.recommended ? 'border-2 border-blue-500/50 shadow-2xl shadow-blue-500/10' : ''}`}
          >
            {tier.recommended && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-bold">
                الأكثر طلباً
              </span>
            )}
            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
            <div className="mb-8">
              <span className="text-4xl font-black">{tier.price}</span>
              <span className="text-gray-400 mr-2">جنيه</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              {tier.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${tier.recommended ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg' : 'bg-white/5 hover:bg-white/10 text-white'}`}>
              اشترك الآن
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

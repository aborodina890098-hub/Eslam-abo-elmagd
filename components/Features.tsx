
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Target, FileText, Globe, Download } from 'lucide-react';

const featureList = [
  {
    title: 'توافق تام مع ATS',
    description: 'بنضمن لك إن سيرتك الذاتية تعدي من فلاتر التوظيف الآلية بنجاح.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />
  },
  {
    title: 'تحسين الكلمات المفتاحية',
    description: 'بنحلل الوصف الوظيفي وبنضيف أهم الكلمات اللي بيبحث عنها المديرون.',
    icon: <Target className="w-8 h-8 text-purple-400" />
  },
  {
    title: 'صياغة إنجازات احترافية',
    description: 'مش مجرد مهام، بنحول شغلك لإنجازات رقمية وملموسة تلفت النظر.',
    icon: <Zap className="w-8 h-8 text-blue-400" />
  },
  {
    title: 'قوالب عصرية ونظيفة',
    description: 'تصميمات بريميوم، مريحة للعين، وبتركز على المحتوى بشكل احترافي.',
    icon: <FileText className="w-8 h-8 text-purple-400" />
  },
  {
    title: 'دعم ثنائي اللغة',
    description: 'سواء بتقدم في شركة محلية أو دولية، بنكتب لك بالعربي والإنجليزي.',
    icon: <Globe className="w-8 h-8 text-blue-400" />
  },
  {
    title: 'تصدير PDF جاهز',
    description: 'حمل نسختك في ثواني بتنسيق مثالي للطباعة ولأنظمة التقديم أونلاين.',
    icon: <Download className="w-8 h-8 text-purple-400" />
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          ليه تختار <span className="gradient-text">CVEEEZ</span>؟
        </motion.h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          إحنا مش مجرد موقع بيعمل CV، إحنا شريكك في رحلتك للوصول للوظيفة اللي بتحلم بيها.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureList.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="glass p-8 rounded-3xl group"
          >
            <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block group-hover:bg-blue-500/10 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

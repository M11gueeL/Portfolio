// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export const Loader = () => {
  return (
    <motion.div
      key="global-loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-zinc-950"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative flex items-center justify-center"
      >
        {/* Animated Rings */}
        <motion.div 
          className="absolute w-32 h-32 md:w-40 md:h-40 bg-brand/20 dark:bg-brand/10 rounded-full blur-xl mix-blend-multiply"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Logo Element */}
        <motion.img
          src="/logo.png"
          alt="Cargando..."
          className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10 drop-shadow-2xl"
          animate={{ 
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

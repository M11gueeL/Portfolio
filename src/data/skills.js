import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaPython, 
  FaPhp, 
  FaJava,
  FaLaravel
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

export const skillsData = [
  { id: 'html', name: 'HTML5', icon: FaHtml5, url: 'https://developer.mozilla.org/es/docs/Web/HTML', color: 'group-hover:text-orange-500' },
  { id: 'css', name: 'CSS3', icon: FaCss3Alt, url: 'https://developer.mozilla.org/es/docs/Web/CSS', color: 'group-hover:text-blue-500' },
  { id: 'js', name: 'JavaScript', icon: FaJs, url: 'https://developer.mozilla.org/es/docs/Web/JavaScript', color: 'group-hover:text-yellow-400' },
  { id: 'react', name: 'React', icon: FaReact, url: 'https://react.dev/', color: 'group-hover:text-sky-400' },
  { id: 'tailwind', name: 'Tailwind CSS', icon: SiTailwindcss, url: 'https://tailwindcss.com/', color: 'group-hover:text-cyan-400' },
  { id: 'node', name: 'Node.js', icon: FaNodeJs, url: 'https://nodejs.org/docs/latest/api/', color: 'group-hover:text-green-500' },
  { id: 'express', name: 'Express', icon: SiExpress, url: 'https://expressjs.com/', color: 'group-hover:text-gray-500 dark:group-hover:text-gray-300' },
  { id: 'git', name: 'Git', icon: FaGitAlt, url: 'https://git-scm.com/doc', color: 'group-hover:text-red-500' },
  { id: 'github', name: 'GitHub', icon: FaGithub, url: 'https://docs.github.com/', color: 'group-hover:text-zinc-800 dark:group-hover:text-zinc-200' },
  { id: 'python', name: 'Python', icon: FaPython, url: 'https://docs.python.org/3/', color: 'group-hover:text-blue-500' },
  { id: 'mysql', name: 'MySQL', icon: SiMysql, url: 'https://dev.mysql.com/doc/', color: 'group-hover:text-blue-600' },
  { id: 'php', name: 'PHP', icon: FaPhp, url: 'https://www.php.net/manual/es/', color: 'group-hover:text-indigo-500' },
  { id: 'laravel', name: 'Laravel', icon: FaLaravel, url: 'https://laravel.com/docs', color: 'group-hover:text-red-600' },
  { id: 'java', name: 'Java', icon: FaJava, url: 'https://docs.oracle.com/en/java/', color: 'group-hover:text-red-600' },
  { id: 'csharp', name: 'C#', icon: TbBrandCSharp, url: 'https://learn.microsoft.com/en-us/dotnet/csharp/', color: 'group-hover:text-purple-600' },
];

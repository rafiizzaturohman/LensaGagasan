const navLinks = document.querySelectorAll('#nav-link a');
  
const commonClasses = [
  'relative', 'pb-1', 'font-black', 'text-gray-800', 
  'transition-colors', 'duration-300', 'hover:text-red-900', 
  'after:absolute', 'after:bottom-0', 'after:left-0', 
  'after:h-[2px]', 'after:w-full', 'after:scale-x-0', 
  'after:bg-red-900', 'after:transition-transform', 
  'after:duration-300', 'after:content-[\'\']', 
  'hover:after:scale-x-100', 'tracking-wide'
];

navLinks.forEach(link => {
  link.classList.add(...commonClasses);
});
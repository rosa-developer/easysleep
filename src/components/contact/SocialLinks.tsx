
const SocialLinks = () => {
  return (
    <div className="bg-sleep-50 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-slate-800">Follow Us</h3>
      <div className="flex space-x-4">
        {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
          <a key={index} href="#" className="p-2 bg-white rounded-full hover:bg-sleep-100 transition-colors">
            <span className="sr-only">{social}</span>
            <div className="w-6 h-6 bg-sleep-200 rounded-full"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;

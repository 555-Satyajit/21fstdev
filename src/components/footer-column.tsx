import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: '#',
  instaLink: '#',
  twitterLink: '#',
  githubLink: '#',
  dribbbleLink: '#',
  services: {
    edge: '/edge-intelligence',
    infrastructure: '/infrastructure',
    design: '/ui-ux-design',
    engineering: '/engineering',
  },
  about: {
    history: '/vision',
    team: '/experts',
    handbook: '/documentation',
    careers: '/join-us',
  },
  help: {
    faqs: '/faqs',
    support: '/support',
    livechat: '/live-chat',
  },
  contact: {
    email: 'hello@aurora.network',
    phone: '+1 (555) AURORA-EDGE',
    address: 'Silicon Valley, California',
  },
  company: {
    name: 'Aurora Network',
    description:
      'The global leader in decentralized edge intelligence and low-latency infrastructure. Scaling the future of the decentralized web.',
    logo: 'https://api.dicebear.com/7.x/shapes/svg?seed=aurora&backgroundColor=000000',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Github, label: 'GitHub', href: data.githubLink },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Dribbble, label: 'Dribbble', href: '#' },
];

const aboutLinks = [
  { text: 'Company Vision', href: data.about.history },
  { text: 'Meet the Experts', href: data.about.team },
  { text: 'Documentation', href: data.about.handbook },
  { text: 'Join Us', href: data.about.careers },
];

const serviceLinks = [
  { text: 'Edge Intelligence', href: data.services.edge },
  { text: 'Global Infrastructure', href: data.services.infrastructure },
  { text: 'UI/UX Design', href: data.services.design },
  { text: 'High-perf Engineering', href: data.services.engineering },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Support Portal', href: data.help.support },
  { text: 'Live Intelligence Chat', href: data.help.livechat, hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-zinc-950/80 backdrop-blur-xl border-t border-white/10 mt-16 w-full rounded-t-3xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-white flex justify-center gap-3 sm:justify-start items-center">
              <img
                src={data.company.logo}
                alt="logo"
                className="h-10 w-10 rounded-xl border border-white/10"
              />
              <span className="text-2xl font-bold tracking-tighter uppercase italic">
                {data.company.name}
              </span>
            </div>

            <p className="text-zinc-400 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-zinc-400 hover:text-lime-400 transition-colors"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-white uppercase tracking-widest text-xs opacity-50 mb-8">About Us</p>
              <ul className="space-y-4 text-sm mt-0">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-zinc-400 hover:text-lime-400 transition-colors"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-white uppercase tracking-widest text-xs opacity-50 mb-8">Specialties</p>
              <ul className="space-y-4 text-sm mt-0">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-zinc-400 hover:text-lime-400 transition-colors"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-white uppercase tracking-widest text-xs opacity-50 mb-8">Resources</p>
              <ul className="space-y-4 text-sm mt-0">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-zinc-400 hover:text-lime-400 transition-colors'
                      }`}
                    >
                      <span className="text-zinc-400 group-hover:text-lime-400 transition-colors">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="bg-lime-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                          <span className="bg-lime-400 relative inline-flex size-2 rounded-full" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-bold text-white uppercase tracking-widest text-xs opacity-50 mb-8">Inquiries</p>
              <ul className="space-y-4 text-sm mt-0">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-2 sm:justify-start text-zinc-400 hover:text-lime-400 transition-all group"
                      href="#"
                    >
                      <Icon className="text-zinc-500 group-hover:text-lime-400 size-5 shrink-0 transition-colors" />
                      {isAddress ? (
                        <address className="flex-1 not-italic">
                          {text}
                        </address>
                      ) : (
                        <span className="flex-1">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-zinc-500">
              <span className="block sm:inline">Design engineered for the future.</span>
            </p>

            <p className="text-zinc-500 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 {data.company.name}. Premium decentralized infrastructure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

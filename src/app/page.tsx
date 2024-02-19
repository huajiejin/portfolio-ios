'use client';

import Image from 'next/image';
import config from '../../dev-portfolio-pro.config';
import WorkItem from '@/components/WorkItem';
import { SocialIconsList } from '@/components/SocialIconsList';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid'
import DarkModeDropdown from '@/components/DarkModeDropdown';
import { useSystemDarkModeListener } from '@/hooks/useSystemDarkModeListener';

const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
  // If not Safari, return since Safari is the only tested browser supporting 
  //   smooth scroll without issues with HTML scrolling snap.
  const ua = navigator?.userAgent;
  if (!ua?.includes('Safari') || ua?.includes('Chrome')) return;
  // get element by id
  const element = document.getElementById(id);
  if (!element) return;
  // prevent default behavior
  e.preventDefault();
  element.scrollIntoView({ behavior: 'smooth' });
}

export default function Home() {
  useSystemDarkModeListener();
  
  // Valid social links
  const validSocialLinks = Object.entries(config.socials || {})
    .filter(([_, value]) => !!value)
  
  const emailSubject = encodeURIComponent(`Hello ${config.name} - From your portfolio`)
  const emailBody = encodeURIComponent(`Hello ${config.name},\n\nI found your portfolio, and I would like to connect with you.`)
  const emailHref = `mailto:${config.email}?subject=${emailSubject}&body=${emailBody}`

  return (
    <div>
      <header className="dark-container-2 flex justify-end items-center fixed z-10 w-full h-16 px-6">
        <div className="flex gap-1 text-sm font-medium">
          {
            config.work?.length > 0 && (
              <a
                href="#work"
                className="flex justify-center items-center px-3 py-2"
                onClick={e => smoothScrollTo(e, 'work')}>
                  <span className="text-clickable-1">Work</span>
                </a>
            )
          }
          <a className="flex justify-center items-center px-3 py-2" href={emailHref}><span className="text-clickable-1">Contact</span></a>
        </div>
      </header>
      <main>
        <div className="dark-container-2 relative">
          <div className="text-secondary absolute bottom-4 left-1/2 -translate-x-1/2 text-xs">
            <a
              href="#work"
              className="flex justify-center items-center gap-1 cursor-pointer text-clickable-2"
              onClick={e => smoothScrollTo(e, 'work')}>
              <ChevronDoubleDownIcon
                className="w-4 h-4 -translate-y-[0.5px] animate-zeroBounce"
                style={{animationDelay: '6s'}}
                />
              Featured Work
            </a>
          </div>
          <div id="top" className="flex justify-center items-center -translate-y-8 md:gap-24 flex-wrap-reverse min-h-[95vh] px-8 py-16 mx-auto snap-start">
            <div className="max-w-md">
              <div className="text-4xl font-semibold leading-relaxed">Hi, I&apos;m {config.name},</div>
              <div className="text-4xl font-semibold">{config.role}</div>
              <div className="mt-4 whitespace-pre-wrap">{config.bio}</div>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
                {
                  validSocialLinks.length > 0 && (
                    <SocialIconsList socials={validSocialLinks} className="flex justify-center items-center gap-3" />
                  )
                }
                {
                  // show download resume button if the resume link is provided
                  config.resume_url && (
                    <a
                      href={config.resume_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-clickable-1 text-sm underline hover:no-underline"
                    >
                      Download Resume
                    </a>
                  )
                }
              </div>
            </div>
            <div className="flex-shrink-0 w-60 h-60 overflow-hidden rounded-full shadow-xl">
              <Image
                src={config.avatar_url}
                alt={`Avatar of ${config.name}`}
                className="w-full h-full object-cover object-center"
                width={480}
                height={480}
                priority
              />
            </div>
          </div>
        </div>
        {
          config.work?.length > 0 && (
            <div id="work" className="">
              {
                config.work.map((workItem, index) => {
                  return (
                    <div key={workItem.name} className={`${index % 2 === 1 ? 'dark-container-2' : ''}`}>
                      <WorkItem
                        workItem={workItem}
                        className="px-8 py-32 mx-auto snap-start"
                      />
                    </div>
                  );
                })
              }
            </div>
          )
        }
      </main>
      <footer className="py-16 snap-start">
        <div className="mt-4 flex items-center justify-center gap-4">
          {
            config.resume_url && (
              <a
                href={config.resume_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download Resume
              </a>
            )
          }
          <a href={emailHref} className="btn-primary">Contact Me</a>
        </div>
        {
          validSocialLinks.length > 0 && (
            <SocialIconsList socials={validSocialLinks} className="mt-16 flex justify-center items-center gap-4" />
          )
        }
        <div className="text-secondary mt-4 flex justify-center items-center gap-2 text-xs">
          <span>&#64;{new Date().getFullYear()} All Rights Reserved.</span>
          <span>Powered by <a href="https://github.com/huajiejin/dev-portfolio-pro" target="_blank" rel="noopener noreferrer" className="underline text-clickable-2">Dev Portfolio Pro</a></span>
        </div>
        <div className="text-secondary mt-4 mb-[6px] flex justify-center items-center flex-wrap gap-x-3 text-xs">
          <a
            href="#top"
            className="flex justify-center items-center gap-1 cursor-pointer text-clickable-2"
            onClick={e => smoothScrollTo(e, 'top')}>
            <ChevronDoubleUpIcon className="w-4 h-4" />
            Back to Top
          </a>
          <span className="text-xs">&bull;</span>
          <DarkModeDropdown />
        </div>
      </footer>
    </div>
  );
}

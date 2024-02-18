'use client';

import Image from 'next/image';
import config from '../../dev-portfolio-pro.config';
import { CalendarIcon, ArrowTopRightOnSquareIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Tag from './Tag';
import NewTabButton from './NewTabButton';
// FIXME: Remove framer-motion, because Parallax Scrolling is relatively simple to
//  implement, and it's not worth the extra bundle size (26kb after tree shaking)
import { m as motion, LazyMotion, domAnimation, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';


function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

type WorkItem = typeof config.work[0];

export default function WorkItem({ workItem, className }: { workItem: WorkItem, className?: string}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'end start'] });
  const y = useParallax(scrollYProgress, 100);

  return (
    <LazyMotion features={domAnimation}>
      <div
        key={workItem.name}
        className={`flex justify-center items-center gap-24 flex-wrap-reverse ${className || ''}`}
        ref={container}
        >
        <motion.div
          className="max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          >
          <div className="text-sm font-medium text-stone-500">{workItem.name}</div>
          <p className="mt-4 text-4xl font-semibold">{workItem.impact}</p>
          {
            workItem.description && (
              <p className="mt-4">{workItem.description}</p>
            )
          }
          <div className="mt-4 flex flex-wrap items-center gap-x-3">
            <Tag text={workItem.date}>
              <CalendarIcon className="h-4 w-4 -translate-y-[0.5px]" />
            </Tag>
            <span className="text-stone-500 text-xs">&bull;</span>
            {
              workItem.tech_stack?.map((tech) => (
                <Tag key={tech} text={tech} />
              ))
            }
          </div>
          {
            (workItem.live_url || workItem.url) && (
              <div className="mt-4 flex justify-start items-center gap-2">
                {
                  workItem.live_url && (
                    <NewTabButton href={workItem.live_url} className="btn-secondary">
                      Live demo
                      <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    </NewTabButton>
                  )
                }
                {
                  workItem.url && (
                    <NewTabButton href={workItem.url} className="btn-primary">
                      View details
                      <ArrowRightIcon className="h-4 w-4" />
                    </NewTabButton>
                  )
                }
              </div>
            )
          }
        </motion.div>
        {
          workItem.image_url ? (
            <motion.div
              className="image-container flex-shrink-0 overflow-hidden rounded-lg bg-transparent"
              initial={{ opacity: 0 }}
              whileInView={{opacity: 1}}
              style={{y}}
              >
              <Image
                src={workItem.image_url}
                alt={`Image of ${workItem.name}`}
                className="w-full h-auto object-cover object-center"
                width={1080}
                height={1080}
                priority
              />
            </motion.div>
          ) : (
            <div className="image-container w-full" />
          )
        }
      </div>
    </LazyMotion>
  );
}
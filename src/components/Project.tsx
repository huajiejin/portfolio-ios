import Image from 'next/image';
import config from '../../dev-portfolio-pro.config';
import { CalendarIcon } from '@heroicons/react/24/solid'
import Tag from './Tag';

type Project = typeof config.projects[0];

export default function Project({ project, className }: { project: Project, className?: string}) {
  return (
    <div key={project.name} className={`flex justify-center items-center gap-24 flex-wrap-reverse ${className || ''}`}>
      <div className="max-w-md">
        <div className="text-sm font-medium text-stone-500">{project.name}</div>
        <p className="mt-4 text-4xl font-semibold">{project.impact}</p>
        {
          project.description && (
            <p className="mt-4">{project.description}</p>
          )
        }
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Tag text={project.date}>
            <CalendarIcon className="h-4 w-4 -translate-y-[0.5px]" />
          </Tag>
          {
            project.tech_stack?.map((tech) => (
              <Tag key={tech} text={tech} />
            ))
          }
        </div>
      </div>
      {
        project.image_url ? (
          <div className="max-w-md flex-shrink-0 overflow-hidden rounded-lg shadow-xl">
            <Image
              src={project.image_url}
              alt={`Image of ${project.name}`}
              className="w-full h-full object-cover object-center"
              width={1080}
              height={1080}
              layout="responsive"
              priority
            />
          </div>
        ) : (
          <div className="max-w-md w-full" />
        )
      }
    </div>
  );
}
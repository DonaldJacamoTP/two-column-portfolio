import React from 'react';
import About from "@/components/about";
import Education from "@/components/education/education";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Volunteering from "@/components/volunteering/volunteering";
import GitHubProjects from '@/components/github-projects';
import Skills from '@/components/skills';
import Certifications from '@/components/certifications';
import Languages from '@/components/languages';
import Credits from '@/components/credits';
import DownloadButton from '@/components/download-button';
import {promises as fs} from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 xl:px-24">
      <div className="z-2 w-full max-w-7xl font-mono text-sm flex flex-col lg:flex-row gap-0 lg:gap-28 xl:gap-48 justify-between">
        <div className="lg:w-1/3 xl:w-1/4">
          <Header data={data.general}></Header>
        </div>
        <div className="lg:w-2/3 xl:w-3/4 mt-8 lg:mt-0">
          <About data={data.general}></About>
          <Skills data={data.general.skills}></Skills>
          <Experiences data={data.experiences}></Experiences>
          <Education data={data.education}></Education>
          <Certifications data={data.general.certifications}></Certifications>
          <Languages data={data.general.languages}></Languages>
          <Volunteering data={data.volunteering}></Volunteering>
          <GitHubProjects />
          <Credits data={data.general}></Credits>
        </div>
      </div>
      <DownloadButton />
    </main>
  )
}

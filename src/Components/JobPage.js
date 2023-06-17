import JobList from './JobList';
import JobFilter from './JobFilter';
import Header from './Header';
import { useState } from 'react';

const data = [
  {
    id: 1,
    img: "photosnap",
    company: 'Photosnap',
    tags: ['NEW!', 'FEATURED'],
    jobTitle: 'Senior Frontend Developer',
    time: '1d ago',
    contract: 'Full Time',
    location: 'USA only',
    skills: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    img: "manage",
    company: 'Manage',
    tags: ['NEW!', 'FEATURED'],
    jobTitle: 'Fullstack Developer',
    time: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    skills: ['Fullstack', 'Midweight', 'Python', 'React'],
  },
  {
    id: 3,
    img: "account",
    company: 'Account',
    tags: ['NEW!'],
    jobTitle: 'Junior Frontend Developer',
    time: '2d ago',
    contract: 'Part Time',
    location: 'USA only',
    skills: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
  },
  {
    id: 4,
    img: "myhome",
    company: 'MyHome',
    tags: [],
    jobTitle: 'Junior Frontend Developer',
    time: '5d ago',
    contract: 'Contract',
    location: 'USA only',
    skills: ['Frontend', 'Junior', 'CSS', 'Javascript'],
  },
  {
    id: 5,
    img: "loop-studios",
    company: 'Loop Studios',
    tags: [],
    jobTitle: 'Software Engineer',
    time: '1w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    skills: ['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby'],
  },
  {
    id: 6,
    img: "faceit",
    company: 'FaceIt',
    tags: [],
    jobTitle: 'Junior Backend Developer',
    time: '2w ago',
    contract: 'Full Time',
    location: 'UK only',
    skills: ['Backend', 'Junior', 'Ruby', 'RoR'],
  },
  {
    id: 7,
    img: "shortly",
    company: 'Shortly',
    tags: [],
    jobTitle: 'Junior Developer',
    time: '2w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    skills: ['Frontend', 'Junior', 'HTML', 'Sass', 'JavaScript'],
  },
  {
    id: 8,
    img: "insure",
    company: 'Insure',
    tags: [],
    jobTitle: 'Junior Frontend Developer',
    time: '2w ago',
    contract: 'Full Time',
    location: 'USA only',
    skills: ['Frontend', 'Junior', 'Vue', 'JavaScript', 'Sass'],
  },
  {
    id: 9,
    img: "eyecam-co",
    company: 'Eyecam Co.',
    tags: [],
    jobTitle: 'Full Stack Engineer',
    time: '3w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    skills: ['Fullstack', 'Midweight', 'Javascript', 'Django', 'Python'],
  },
  {
    id: 10,
    img: "the-air-filter-company",
    company: 'The Air Filter Company',
    tags: [],
    jobTitle: 'Front-end Dev',
    time: '1mo ago',
    contract: 'Part Time',
    location: 'Worldwide',
    skills: ['Frontend', 'Junior', 'React', 'Sass', 'Javascript'],
  },
];

const initSkills = { frontend: false, senior: false, html: false, css: false, javascript: false, fullstack: false, midweight: false, python: false, react: false, junior: false, sass: false, ruby: false, backend: false, ror: false, vue: false, django: false };


export default function JobPage() {
  const jobs = data;
  const [filteredSkills, setFilteredSkills] = useState(initSkills)

  const addFilter = (skillName) => {
    setFilteredSkills((prevFilteredSkills) => ({
      ...prevFilteredSkills,
      [skillName.toLowerCase()]: true,
    })
    )
  }

  const removeFilter = (skillName) => {
    setFilteredSkills((prevFilteredSkills) => ({
      ...prevFilteredSkills,
      [skillName.toLowerCase()]: false,
    })
    )
  }

  return (
    <>
      <Header />
      <JobFilter filteredSkills={filteredSkills} removeFilter={removeFilter} />
      <JobList jobs={jobs} filteredSkills={filteredSkills} addFilter={addFilter} />
    </>
  );
}


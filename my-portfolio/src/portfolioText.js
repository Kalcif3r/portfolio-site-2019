import React from 'react'
import portfolio1 from './resources/portfolio-1.jpg'
import portfolio2 from './resources/portfolio-2.png'
import portfolio3 from './resources/portfolio-3.png'

const cvEntries = [
  {
    country: 'Sri Lanka',
    year: 'Aug 2018 - present',
    position: 'Freelance Web Developer',
    imageURL: portfolio2,
    portfolioURL: 'https://www.werarefromhereproject.com',
    bodyText: (
      <React.Fragment>
        I spent the days leading up to my graduation, learning to{' '}
        <span className="bolder">hunt for leads</span>,{' '}
        <span className="bolder">pitch ideas</span>,{' '}
        <span className="bolder">handle clients</span> and{' '}
        <span className="bolder">achieve results</span> .
      </React.Fragment>
    )
  },
  {
    country: 'Sri Lanka',
    year: 'Nov - Dec 2018',
    position: 'Social Media Manager at the Irish Bar & Grill',
    portfolioURL: 'https://www.instagram.com/irishbarandgrill/',
    imageURL: portfolio1,
    bodyText: (
      <React.Fragment>
        Me and my team <span className="bolder">developed branding</span>,{' '}
        <span className="bolder">devised marketing strategies</span> and{' '}
        <span className="bolder">handled content creation</span> for the bar.
      </React.Fragment>
    )
  },
  {
    country: 'Malaysia',
    year: 'Aug - Dec 2017',
    position: 'Freelance Web Developer',
    imageURL: portfolio3,
    portfolioURL: 'https://servishero.com/',

    bodyText: (
      <React.Fragment>
        During the gap between my second and third year of university, I worked
        as an Intern, for the first three months, and then as a Developer. My
        main responsibilities included working with their{' '}
        <span className="bolder">React + Redux front-end</span>, delivering new
        features within <span className="bolder">agile sprints</span>, as well
        as touching on their <span className="bolder">JavaScript back end</span>{' '}
        using their SailsJS API’s and
        <span className="bolder"> Amazon Web Services</span> tech stack.
      </React.Fragment>
    )
  }
]

export default cvEntries

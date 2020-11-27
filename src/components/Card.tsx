import git from '../iconmonstr-github-1.svg'
import linkedin from '../iconmonstr-linkedin-3.svg'
import email from '../iconmonstr-email-2.svg'
import phone from '../iconmonstr-phone-9.svg'
import React from 'react'
import Column from './Column'

export default function Card() {
  return (
    <div className='card'>
      <Column
        width='33%'
        alignItems='flex-start'
      >
        <div className='content text'>
          <h1>Franz Spiess</h1>
          <h3 className="italic">Developer</h3>
        </div>
        <div className='content text'>
          <span>Typescript</span>
          <span>Python</span>
          <span>React/Redux</span>
          <span>NodeJS</span>
        </div>
        <div className='content logos'>
          <a href='https://github.com/franzspiess'>
            <img src={git} alt='github' />
          </a>
          <a href='https://linkedin.com/en/franzspiess'>
            <img src={linkedin} alt='linkedin' />
          </a>
          <a href='mailto:franz.spiess.dev@gmail.com'>
            <img src={email} alt='email' />
          </a>
          <img src={phone} alt='phone' />
        </div>
      </Column>
      <Column
        width='34%'
        alignItems='center'
      >
      </Column>
      <Column
        width='33%'
        alignItems='flex-start'>
      </Column>
    </div>
  )
}